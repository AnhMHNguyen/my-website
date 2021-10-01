import styled, { css } from "styled-components";

const buttonStyles = css`
  font-size: 20px;
  padding: 10px 50px;

  &:after {
    top: 7px;
    left: 7px;
  }
`;

const smallButtonStyles = css`
  font-size: 15px;
  padding: 7px 30px;

  &:after {
    top: 5px;
    left: 5px;
  }
`;

const getButtonStyles = props => {
  return props.small ? smallButtonStyles: buttonStyles;
}

export const CustomButtonContainer = styled.button`
  /* font-size: 15px; */
  font-weight: 200;
  letter-spacing: 1px;
  /* padding: 7px 30px; */
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  

  &:after {
    content: "";
    background-color: ${props => props.primary ? "var(--color-primary)" : "var(--color-secondary)"};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    /* top: 5px;
    left: 5px; */
    transition: 0.2s;
  }

  &:hover::after {
  top: 0px;
  left: 0px;
}
${getButtonStyles}

  /* @media screen and (max-width: 800px) {
    line-height: 35px;
    height: 35px;
    width: 100px;
    font-size: 11px;
  } */
`;