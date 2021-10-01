import styled from "styled-components";
import { ReactComponent as Coding } from '../../assets/image.svg';

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    height: 60vh;
  }
`;

export const TextContainer = styled.div`
  font-family: var(--font-title);
  font-size: 38px;
  text-align: right;
  height: 60%;
  width: 100%;
  padding-top: 250px;
  padding-right: 50px;
  span {
    color: var(--color-primary)
  }
  @media screen and (max-width: 800px) {
    font-size: 25px;
    height: 50%;
    padding-top: 150px;
    padding-right: 20px;
  }
`;

export const ImageContainer = styled.div`
  height: 40%;
  width: 100%;
  /* padding-bottom: 30px; */
  padding-left: 100px;
  @media screen and (max-width: 800px) {
    padding-left: 20px;
  }
`;

export const Image = styled(Coding)`
  width:300px;
  height: 300px;
  @media screen and (max-width: 800px) {
    width:200px;
    height: 200px;
  }
`;