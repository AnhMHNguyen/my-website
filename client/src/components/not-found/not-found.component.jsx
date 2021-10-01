import React from 'react'
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './not-found.styles'

const NotFound = ({error = ""}) => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png'/>           
      <ErrorImageText>Caution! This Page is Cordoned Off</ErrorImageText>  
      <ErrorImageText>{error ? error: "Page Not Found 404"}</ErrorImageText>  
    </ErrorImageOverlay>
  )
}

export default NotFound