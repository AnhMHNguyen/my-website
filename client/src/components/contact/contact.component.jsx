import React, {useState} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { ContactContainer, TitleContainer } from './contact.styles'

const Contact = React.forwardRef((props, ref) => {
  const [contactCredentials, setCredentials] = useState ({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { name, email, subject, message} = contactCredentials;

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('submit')
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setCredentials({...contactCredentials, [name]: value});
  };

  return (
    <ContactContainer ref={ref}>
      <TitleContainer>Contact Me</TitleContainer>
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
        <CustomButton type="submit" primary >Send</CustomButton>
      </form>
    </ContactContainer>
  )
})

export default Contact
