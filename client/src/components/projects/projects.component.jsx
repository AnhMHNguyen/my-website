import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import project1 from '../../assets/image1.JPG'
import project2 from '../../assets/image2.JPG'
import { ProjectsContainer, ProjectContainer, Image, DescContainer, HeaderContainer, TitleContainer, CardContainer, ImageContainer, DetailsContainer} from './projects.styles'

const Projects = React.forwardRef((props, ref) => {
  return (
    <ProjectsContainer ref={ref}>
      <HeaderContainer>Projects</HeaderContainer>
      <ProjectContainer data-aos="fade-down-right">
        <DescContainer>
          <TitleContainer>Jimmie Pet Shop</TitleContainer>
          <span>
            This project is an Ecommerce website using Django and React with full
            featured shopping cart, product reviews and ratings, user profile with orders,
            admin product, user and order management, checkout process and Paypal.
          </span>
          <DetailsContainer>
              <span><strong>Front End:</strong> React Hooks and Redux Saga</span>
              <span><strong>Back End:&nbsp;</strong> Django</span>
              <span><strong>Styling:&nbsp;&emsp;</strong> Styled Components</span>
          </DetailsContainer>
          <span className="buttons">
            <a href="https://jimmie-shop.herokuapp.com/"><CustomButton primary small>Live Demo</CustomButton></a>
            <a href="https://github.com/AnhMHNguyen/jimmie-shop"><CustomButton small>View Code</CustomButton></a>
          </span>
        </DescContainer>
        <CardContainer>
            <ImageContainer>
              <Image src={project1} alt="project-1" />
            </ImageContainer>
        </CardContainer>
      </ProjectContainer>
      <ProjectContainer data-aos="fade-down-left">
        <DescContainer>
          <TitleContainer>Rent and Venues Data Analysis of Vancouver</TitleContainer>
          <span>
            This project is a Capstone Project - The Battles of Neighborhoods for Data
            Science Course by IBM/Cousera by using a list of data including Zumper, Foursquare API and 
            Google Maps API geocoding to create a map and information chart showing the 
            average rent in Vancouver and each area is clustered according to venue density.
          </span>
          <DetailsContainer>
              <span><strong>Language:&nbsp;</strong> Python</span>
              <span><strong>Algorithm:</strong> K-Means</span>
              <span><strong>Tools:&emsp;&emsp;</strong> Jupyter Notebook</span>
          </DetailsContainer>
          <span className="buttons">
            <a href="https://github.com/AnhMHNguyen/DataScienceCapstone/blob/main/Capstone_Report.pdf"><CustomButton primary small>View Report</CustomButton></a>
            <a href="https://github.com/AnhMHNguyen/DataScienceCapstone/blob/main/Neighborhoods-in-Toronto.ipynb"><CustomButton small>View Code</CustomButton></a>
          </span>
        </DescContainer>
        <CardContainer>
          <ImageContainer>
            <Image src={project2} alt="project-2" />
          </ImageContainer>
        </CardContainer>
      </ProjectContainer>
    </ProjectsContainer>
  )
})

export default Projects
