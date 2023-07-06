import { useEffect, useState } from "react";
import { Container } from "./styles";
import { GetName } from "../../api/GetName";
import ConfettiExplosion from 'react-confetti-explosion';

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
      <ConfettiExplosion duration={10000} />
      <ConfettiExplosion duration={10000} particleCount={200} />
      <ConfettiExplosion duration={10000} particleCount={300} />
      <h1>{name}</h1>
      <h2>Bem-vindo!</h2>
    </Container>
  )
}