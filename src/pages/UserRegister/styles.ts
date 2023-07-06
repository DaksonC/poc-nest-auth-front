import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;

  h1 {
    color: #fff;
    align-self: center;
    margin: auto;
    background-color: transparent;
  }
  
  @media (max-width: 768px){
    padding: 20px;
    background: #c9c9;  
    flex-direction: column;
    h1 {
      margin: 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 50%;
  height: 100vh;
  padding: 20px;
  background-color: #c9c9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px){
    max-width: 100%;
  }
`;

export const Input = styled.input`
  width: 25rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: #c9c9;

  @media (max-width: 768px){
    width: 100%;
    height: 2rem;
  }
`;

export const Button = styled.button`
  width: 25rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f9f9;
    color: #000;
  }

  @media (max-width: 768px){
    width: 100%;
    height: 2rem;
  }
`;

export const Link = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  color: #f9f9;
  background-color: transparent;
  
  &:hover {
    color: #000;
  }

  @media (max-width: 768px){
    font-size: 0.8rem;
  }
`;