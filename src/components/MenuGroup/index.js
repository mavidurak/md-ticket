import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(105, 120, 150);
`;

const Content = styled.div`
  padding-top: 10px;
`;

export default function MenuGroup({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
}
