import React from 'react'
import { MessageContainer } from './message.styles'

const Message = ({error, message}) => {
  return (
    <MessageContainer>
      <i className={error ? "fa fa-times-circle" : "fa fa-check-circle"}></i>
      {message}
    </MessageContainer>
  )
}

export default Message
