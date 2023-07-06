import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Text = styled.h1`
  width: 100vw;
  height: 100vh;
  font-size: 100px;
  color: #c9c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  text-transform: uppercase;  

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;