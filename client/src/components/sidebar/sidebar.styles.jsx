import styled from "styled-components";


export const SidebarContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: var(--color-blue);
  padding: 35px 0;
  top:0;
  /* @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
    z-index: 900;
    position: fixed;
    width: 70%;
    max-width: 300px;
    &.open {
    width: 40%;
    transform: translateX(0%);
    }
  } */
`;

export const SidebarHeader = styled.div`
  height: 35%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  clip-path: circle(40%);
  width: 60%;
  height: 60%;
  object-fit: cover;
`;

export const SidebarBody = styled.nav`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  /* margin-left: 30px; */
  justify-content: center;
`;

export const ListContainer = styled.ul`
  /* margin-left: 45px; */
  padding: 0;
`;

export const OptionContainer = styled.li`
  padding: 10px 0;
  font-size: 17px;
  font-family: var(--font-title);
  div {
    span {
    display: inline-block;
    position:relative;
      &.circle {
        margin-right: 7px;
        height: 10px;
        width: 10px;
        left: 0px;
        top: -1px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid var(--color-primary);
        transition: all 0.3s;
      }
      &.rect{
        height: 1px;
        width: 0px;
        left: 0;
        bottom: 5.5px;
        background-color: var(--color-primary);
        -webkit-transition: -webkit-transform 0.1s, width 0.6s;
        -moz-transition: -webkit-transform 0.1s, width 0.6s;
        transition: transform 0.1s, width 0.6s;
      }
    }
    
    &:focus{
      color: var(--color-primary);
    }
    &:hover {
      color: var(--color-primary);
      & span {
        background-color: var(--color-primary);
      }
    }
  }
  &.active-section {
    span {
      background-color: var(--color-primary);
    }
    .rect {
      margin-right: 3px;
      width: 30px;
    }
    .circle {
      background-color:var(--color-primary);
    }
  }

  
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  height: 15%;
  i:hover {
  
    color: var(--color-primary);
  }
`;

export const Divider = styled.hr`
  border-top: 2px solid var(--color-primary);
`;
