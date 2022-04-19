import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, LoginPage } from "./pages";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

function App() {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
