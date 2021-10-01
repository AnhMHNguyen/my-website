import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi'

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SidebarContainer = styled.div`
  width: 15%;
  min-width: 250px;
  display: flex;
  /* overflow-y: hidden; */
  @media screen and (max-width: 1200px) {
    display: none;
    width: 0;
  }
`;

export const ContentContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  
`;

export const BarIcon = styled(GiHamburgerMenu)`
  display: none;
  @media screen and (max-width: 1200px) {
    display: flex;
    position: fixed;
    width: 30px;
    height: 30px;
    margin: 20px;
    z-index: 2;
    color: black;
  }
`;