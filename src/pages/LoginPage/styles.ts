import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #c9c9;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 35rem;
  height: 100vh;
  max-height: 25rem;
  border: 1px solid #c9c9;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: #c9c9;

  &:focus {
    outline: none;
    border: 1px solid #c9c9;
  }

  @media (max-width: 768px){
    width: 100%;
    height: 2rem;
  }
`;

export const Button = styled.button`
  width: 20rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: #c9c9;
  background-color: #c9c9;
  cursor: pointer;

  &:hover {
    background-color: #c9c;
    color: black;
  }

  @media (max-width: 768px){
    width: 100%;
    height: 2rem;
  }
`;