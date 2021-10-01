import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  background-color: var(--color-secondary);
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 50px;
`;

export const HeaderContainer = styled.span`
  color: var(--color-background);
  font-family: var(--font-title);
  font-size: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 50px;
  @media screen and (max-width: 800px) {
   flex-direction: column;
   align-items: center;
  }
`;

export const CardContainer = styled.div`
  background-color: transparent;
  width: 40%;
  height: 40vh;
  perspective: 1000px;
  @media screen and (max-width: 800px) {
   width: 90%;
   height: 30vh;
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
    transform: rotateY(-180deg);
  }
`;


export const ToolsContainer = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(-180deg);
  background-color: var(--color-blue);
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 50px;
  span {
    display: flex;
    gap: 15px;
    width: 100%;
    align-items: center;
    justify-content: center;
    
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 50px;
  span {
    display: flex;
    gap: 15px;
    width: 100%;
    align-items: center;
    justify-content: center;
    p{
      font-weight: 600;
    }
  }
  
`;

export const TitleContainer = styled.span`
  color: black;
  font-family: var(--font-title);
  font-size: 20px;
`;