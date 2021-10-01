import styled from "styled-components";

export const SideDrawerContainer = styled.div`
  height: 100%;
  position: fixed;
  width: 70%;
  left:0;
  top:0;
  max-width: 400px;
  box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
  z-index: 900;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  &.open {
    transform: translateX(0%);
  }
`;
