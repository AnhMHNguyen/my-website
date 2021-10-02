import React, {useState} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import Message from '../message/message.component';
import { ContactContainer, TitleContainer } from './contact.styles'

const Contact = React.forwardRef((props, ref) => {
  const [contactCredentials, setCredentials] = useState ({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [ status, setStatus ] = useState("Send")
  const [ result, setResult ] = useState(false)
  const { name, email, subject, message} = contactCredentials;

  const submitHandler = async (e) => {
    e.preventDefault()
    setStatus("Sending...");
    let details = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send");
    let result = await response.json();
    setResult(result.status);
    setCredentials({name: '',email: '',subject: '',message: ''})
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...contactCredentials, [name]: value});
  };

  return (
    <ContactContainer ref={ref}>
      <TitleContainer>Contact Me</TitleContainer>
      { result && <Message type={result === "ERROR" ? "true" : "false"} message={result === "ERROR" ? "Opps! Something went wrong. Please try again." : "Thank you for your message!"}/>}
      <form onSubmit={submitHandler} data-aos="zoom-in-down">
        <span>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name"
            required />
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            required />
        </span>
        <input 
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
          placeholder="Subject"
          required />
        <textarea 
          name='message' 
          onChange={handleChange} 
          value={message} 
          rows='3'
          placeholder="Your Message"/>
        <CustomButton type="submit" primary >{status}</CustomButton>
      </form>
    </ContactContainer>
  )
})

export default Contact
