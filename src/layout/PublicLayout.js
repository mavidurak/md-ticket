import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  background-image: url("/bg.jpg");
  width: 100%;
  height: 100vh;
`;

export default function PublicLayout() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
