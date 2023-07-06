import { ChangeEvent, useState } from "react";
import { Button, Container, Form, Input, Link } from "./styles";
import { CreateUser, IUser } from "../../api/CreateUser";

export function UserRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleOnClick() {
    try {
      const user: IUser = { name, email, password };
      await CreateUser(user);
      window.location.href = '/login';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Form>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button type="submit" onClick={handleOnClick}>Cadastrar</Button>
        <Link href="/login">Já tenho uma conta</Link>
      </Form>
      <h1>Realize seu cadastro!</h1>
    </Container>
  )
}