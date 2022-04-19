import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageContent from "../components/PageContent";

const Container = styled.div``;

export default function PrivateLayout({ children }) {
  return (
    <Container>
      <Sidebar />
      <PageContent>
        <Outlet />
      </PageContent>
    </Container>
  );
}
