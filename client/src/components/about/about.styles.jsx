import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: var(--color-secondary);
  width: 100%;
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 30px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding: 30px 100px 70px;
  span {
    color: var(--color-background);
  }
  @media screen and (max-width: 800px) {
   padding: 30px 20px;
   height: 60vh;
  }
`;

export const TitleContainer = styled.span`
  color: var(--color-background);
  font-family: var(--font-title);
  font-size: 30px;
`;
