import React from 'react'
import profile from '../../assets/profile1.jpg'
import { SidebarContainer, SidebarHeader, Image, ListContainer, OptionContainer, SocialMedia, SidebarBody, Divider } from './sidebar.styles'

const Sidebar = ({ scroll, pos }) => {
  return (
   <SidebarContainer>
     <SidebarHeader>
       <Image src={profile} alt="profile" />
     </SidebarHeader>
     <Divider />
     <SidebarBody>
      <ListContainer>
        <OptionContainer className={pos ==="about" ? "active-section" : '' } >
          <div onClick={() => scroll("about")}>
            <span className="rect"></span>
            <span className="circle"></span>  
            About Me
          </div>
        </OptionContainer>
        <OptionContainer className={pos ==="projects" ? "active-section" : '' }>
          <div onClick={() => scroll("projects")}>
            <span className="rect"></span>
            <span className="circle"></span>  
            My Work
          </div>
        </OptionContainer>
        <OptionContainer className={pos ==="skills" ? "active-section" : '' }>
          <div onClick={() => scroll("skills")}>
            <span className="rect"></span>
            <span className="circle"></span>  
            What I'm good at
          </div>
        </OptionContainer>
        <OptionContainer className={pos ==="contact" ? "active-section" : '' }>
          <div onClick={() => scroll("contact")}>
            <span className="rect"></span>
            <span className="circle"></span>  
            Contact Me
          </div>
        </OptionContainer>
      </ListContainer>
     </SidebarBody>
     <Divider />
     <SocialMedia>
        <a href="https://github.com/AnhMHNguyen"><i className="fab fa-github fa-lg"></i></a>
        <a href="https://www.linkedin.com/in/anh-nguyen-b585b9222/"><i className="fab fa-linkedin fa-lg"></i></a>
        <a href="https://www.kaggle.com/anhng241"><i className="fab fa-kaggle fa-lg"></i></a>
     </SocialMedia>
     
   </SidebarContainer>
  )
}


export default Sidebar
