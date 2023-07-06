import { useEffect, useState } from "react";
import { Container } from "./styles";
import { GetName } from "../../api/GetName";

export function Welcome() {
  const [name, setName] = useState('');

  async function fetchUserData() {
    try {
      const userName = await GetName();
      setName(userName);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <Container>
      <h1>{name}</h1>
      <h2>Bem-vindo!</h2>
    </Container>
  )
}