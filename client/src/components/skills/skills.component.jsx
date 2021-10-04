import React from 'react'
import {FaNodeJs,FaReact, FaPython, FaSass, FaAws} from 'react-icons/fa'
import { SiJavascript, SiDjango, SiHtml5, SiAtom, SiVisualstudiocode, SiFirebase, SiJupyter, SiRstudio} from 'react-icons/si'

import { SkillsContainer, HeaderContainer, ContentContainer, CardContainer, CardInner, IconContainer, ToolsContainer, TitleContainer } from './skills.styles'
const Skills = React.forwardRef((props, ref) => {
  return (
    <SkillsContainer ref={ref}>
      <HeaderContainer>My Skills</HeaderContainer>
      <ContentContainer>
        <CardContainer data-aos="flip-down">
          <CardInner>
            <IconContainer>
              <TitleContainer>Web Development</TitleContainer>
              <span>
                <SiJavascript size={35}/>
                <FaReact size={35}/>
                <FaPython size={35}/>
                <SiDjango size={35}/>
                <FaNodeJs size={35}/>
                <FaSass size={35}/>
                <SiHtml5 size={35}/>
              {/* <img src="https://img.icons8.com/windows/64/000000/pycharm.png"/> */}
              </span>
            </IconContainer>
            <ToolsContainer>
              <TitleContainer>Tools</TitleContainer>
                <span>
                  <SiVisualstudiocode size={35}/>
                  <SiAtom size={35} />
                  <img src="https://img.icons8.com/windows/50/000000/pycharm.png" alt="PyCharm"/>
                  <FaAws size={35}/>
                  <SiFirebase size={35} />
                </span>
              </ToolsContainer>
          </CardInner>
        </CardContainer>

        <CardContainer data-aos="flip-down">
          <CardInner>
            <IconContainer>
              <TitleContainer>Machine Learning</TitleContainer>
              <div>
                <span>
                  <p>NumPy</p>
                  <p>Pandas</p>
                  <p>Matplotlib</p>
                  <p>Scikit-learn</p>
                </span>
                <span>
                  <FaPython size={35}/>
                  <SiRstudio size={35}/>
                </span>
              </div>
            </IconContainer>
            <ToolsContainer>
              <TitleContainer>Tools</TitleContainer>
              <span>
                <p>GoogleColab</p>
                <SiJupyter size={35}/>
                <SiRstudio size={35}/>
              </span>
            </ToolsContainer>
          </CardInner>
        </CardContainer>
      </ContentContainer>
    </SkillsContainer>
  )
})

export default Skills
