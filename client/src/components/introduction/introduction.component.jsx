import React from 'react'
import { IntroductionContainer, TextContainer, ImageContainer, Image } from './introduction.styles'

const Introduction = React.forwardRef((props, ref) => {

  return (
    <IntroductionContainer ref={ref}>
      <TextContainer data-aos="fade-right">Hi, my name is <span>Anne Nguyen</span> <br/> I'm a Web Developer</TextContainer>
      <ImageContainer data-aos="fade-left"><Image /></ImageContainer>
    </IntroductionContainer>
  )
})

export default Introduction
