import React from 'react'
import { IntroductionContainer, TextContainer, ImageContainer, Image } from './introduction.styles'

const Introduction = React.forwardRef((props, ref) => {

  return (
    <IntroductionContainer ref={ref}>
      <TextContainer >Hi, my name is <span>Anne Nguyen</span> <br/> I'm a Web Developer</TextContainer>
      <ImageContainer><Image /></ImageContainer>
    </IntroductionContainer>
  )
})

export default Introduction
