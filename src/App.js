import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Sidebar />
      <PageContent />
    </Container>
  );
}

export default App;
