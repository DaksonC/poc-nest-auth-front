import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  color: #f5f5f5;
  
  h1, h2 {
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 5rem;
    color: #f5f5;
    background: transparent;
  }

  h2 {
    font-size: 4rem;
    background: transparent;
  }

  @media (max-width: 768px) {
    h1, h2 {
      background: transparent;
    }
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;