import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 60vh; */
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  form {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 15px;
   
    span {
      display: flex;
      width: 100%;
      justify-content: space-between;
      gap: 20px;
    }
    input, textarea {
      width: 100%;
      padding: 10px;
      background-color: var(--color-blue);
      border: none;
      border-bottom: 2px solid black;
      &:focus {
        outline: none;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    form {
      width: 80%;
    }
  }
`;

export const TitleContainer = styled.span`
  color: black;
  font-family: var(--font-title);
  font-size: 30px;
  margin-bottom: 20px;
`;