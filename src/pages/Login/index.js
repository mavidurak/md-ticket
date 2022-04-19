import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 200px;
  width: 400px;
  background-color: #363636;
  left: 0px;
  right: 0px;
  margin: auto;
  border-radius: 5px;
  padding: 30px;
  color: white;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 20px;
`;

const Form = styled.form`
  padding: 20px 0px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px 12px;
  color: #333;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #0087da;
  border: none;
  padding: 12px 20px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #004874;
  }
`;

export default function LoginPage() {
  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <Input type="text" placeholder="john@mail.com" />
        <Input type="password" placeholder="your secret password" />
        <Button type="button">Log in</Button>
      </Form>
    </Container>
  );
}
