const express = require('express');
const router = express.Router();
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/", router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}; 

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD
  }
});

contactEmail.verify((error) => {
  if(error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.USER_EMAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if(error) {
      console.log(error)
      res.json({status: "ERROR"})
    } else {
      res.json({ status: "SUCCESS" })
    }
  });
});
