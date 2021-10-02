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
  & .buttons {
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
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate(-2%, -2%);
  box-shadow: 10px 15px 25px 0 rgba(0,0,0,.3);
  display: block;
  transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-top: -10px;
  &:hover {
    box-shadow: 1px 1px 10px 0 rgba(0,0,0,.1);
    transform: translate(0%, 0%);
  }
`;


export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;