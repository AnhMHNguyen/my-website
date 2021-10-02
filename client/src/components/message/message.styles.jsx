import styled from "styled-components";

export const MessageContainer = styled.div`
  color: ${props => props.error ? "#BB371A" : "#32502E"} ;
  background-color: ${props => props.error ? "#FED9CA": "#CDF2CA"};
  padding: 12px;
  font-size:15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  width: 40%;
  margin-bottom: 20px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;