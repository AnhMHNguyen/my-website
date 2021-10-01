import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 70px 0;
  gap: 100px;
  @media screen and (max-width: 800px) {
  }
`;

export const HeaderContainer = styled.span`
  color: black;
  font-family: var(--font-title);
  font-size: 30px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
    gap: 20px;
    &:nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`;

export const TitleContainer = styled.span`
  color: black;
  font-family: var(--font-title);
  font-size: 20px;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 15px;
  & span:last-child {
    display: flex;
    gap: 50px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  background-color: transparent;
  width: 60%;
  height: 40vh;
  perspective: 1000px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  ${CardContainer}:hover & {
    transform: rotateX(-180deg);
  }
`;


export const DetailsContainer = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateX(-180deg);
  background-color: var(--color-blue);
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;


export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;