import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";
import { HomePage, AboutPage } from "./pages";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Sidebar />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </PageContent>
    </Container>
  );
}

export default App;
