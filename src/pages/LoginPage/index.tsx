import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Container, Form, Input, Link } from "./styles";
import { IUserData, LoginUser } from "../../api/LoginUser";

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      const data: IUserData = { email, password };
      const access_token = await LoginUser(data);
      localStorage.setItem('access_token', access_token);
      window.location.href = '/welcome';
    } catch (error) {
      console.log(error);
    }
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <Container>
      <h1>Conecte-se</h1>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="E-mail"
          autoFocus
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <Link href="/">Cadastra-se</Link>
      </Form>
    </Container>
  )
}