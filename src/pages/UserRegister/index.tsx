import { Button, Container, Form, Input, Link } from "./styles";

export function UserRegister() {
  return (
    <Container>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <Button type="submit">Cadastrar</Button>
        <Link href="/login">Já tenho uma conta</Link>
      </Form>
      <h1>Realize seu cadastro!</h1>
    </Container>
  )
}