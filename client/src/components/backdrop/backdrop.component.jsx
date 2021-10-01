import React from 'react'
import { BackdropContainer } from './backdrop.styles'
const Backdrop = ({ close }) => {
  return (
    <BackdropContainer onClick={close}>
      
    </BackdropContainer>
  )
}

export default Backdrop