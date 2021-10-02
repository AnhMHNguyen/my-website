import React from 'react'
import { saveAs } from 'file-saver'
import resume from '../../assets/my_resume.pdf'
import CustomButton from '../custom-button/custom-button.component'
import { AboutContainer, TitleContainer } from './about.styles'

const About = React.forwardRef((props, ref) => {
  const saveFile = () => {
    saveAs(resume, "AnneNguyen_Resume.pdf")
  }

  return (
    <AboutContainer ref={ref}>
      <TitleContainer>About Me</TitleContainer>
      <span data-aos="zoom-in">
      I'm a graduate with an Advanced Diploma in Computer Programming and Analysis. My interests are in Web Developer and I love to create beautiful and performant products with delightful user experiences. I'm also a data lover and currently learning Machine Learning.
      </span>
      <CustomButton primary onClick={saveFile}>My Resume</CustomButton>
    </AboutContainer>
  )
})

export default About
