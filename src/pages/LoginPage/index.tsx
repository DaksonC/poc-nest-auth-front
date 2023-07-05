import { Button, Container, Form, Input } from "./styles";

export function LoginPage() {
  return (
    <Container>
      <h1>Conecte-se</h1>
      <Form>
        <Input placeholder="E-mail" autoFocus />
        <Input placeholder="Senha" />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  )
}