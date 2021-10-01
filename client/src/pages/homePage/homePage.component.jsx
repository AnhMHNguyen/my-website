import React, { useState, useRef, useEffect} from 'react'
import Sidebar from '../../components/sidebar/sidebar.component'
import Introduction from '../../components/introduction/introduction.component'
import About from '../../components/about/about.component';
import Projects from '../../components/projects/projects.component'
import Contact from '../../components/contact/contact.component';
import Skills from '../../components/skills/skills.component';
import SideDrawer from '../../components/side-drawer/side-drawer.component';
import { ContentContainer, MainContainer, SidebarContainer, BarIcon } from './homePage.styles'
import Backdrop from '../../components/backdrop/backdrop.component';

const HomePage = () => {
  const about = useRef(null)
  const introduction = useRef(null)
  const contact = useRef(null)
  const projects = useRef(null)
  const skills = useRef(null)
  const [ pos, setPos ] = useState(false)
  const [ toggle, setToggle ] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  },[])

  const scrollListener = () => {
    if (about.current.getBoundingClientRect().y < 100 && projects.current.getBoundingClientRect().y > 100){
      setPos("about")
    } 
     else if (projects.current.getBoundingClientRect().y <= 100 && skills.current.getBoundingClientRect().y > 100) {
      setPos("projects")
    } 
     else if (skills.current.getBoundingClientRect().y <= 100 && (window.innerHeight + window.pageYOffset) < document.body.offsetHeight-2) {
      setPos("skills")
    } 
     else if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight-2 ) {
      setPos("contact")
    } else {
      setPos(false)
    }
  }

  const scrollHandler = (content) => {
    // ref && ref.current && ref.current.scrollIntoView({ behavior: "smooth"})
    switch(content) {
      case "about":
        about.current.scrollIntoView({behavior: 'smooth'})
        break
      case "contact":
        contact.current.scrollIntoView({behavior:'smooth'})
        break
      case "skills":
        skills.current.scrollIntoView({behavior:'smooth'})
        break
      case "projects":
        projects.current.scrollIntoView({behavior: 'smooth'})
        break
      default:
        introduction.current.scrollIntoView({behavior: 'smooth'})
        break
    }
  }

  const closeHandler = () => {
    setToggle(false)
  }
console.log(toggle)
  return (
    <>
    <MainContainer>
      <BarIcon onClick={()=> setToggle(true)}/>
      <SidebarContainer>
        <Sidebar scroll={scrollHandler} pos={pos}/>
      </SidebarContainer>
      <ContentContainer>
        <Introduction ref={introduction}/>
        <About ref={about}/>
        <Projects ref={projects}/>
        <Skills ref={skills}/>
        <Contact ref={contact}/>
      </ContentContainer>
    </MainContainer>
    <SideDrawer show={toggle}>
      <Sidebar scroll={scrollHandler} pos={pos}/>
    </SideDrawer>
    { toggle && <Backdrop close={closeHandler} />}
    </>
  )
}

export default HomePage
