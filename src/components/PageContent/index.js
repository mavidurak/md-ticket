import styled from "styled-components";

const Container = styled.div`
  margin-left: 250px;
  padding: 10px;
`;

export default function PageContent({ children }) {
  return <Container>{children}</Container>;
}
