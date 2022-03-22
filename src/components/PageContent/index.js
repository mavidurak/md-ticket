import { useEffect, useState } from "react";
import styled from "styled-components";
import MyComponent from "./MyComponent";

const Container = styled.div`
  margin-left: 250px;
`;

export default function PageContent() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((value) => value + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <Container>
      <MyComponent initialValue={100} />
    </Container>
  );
}
