import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManifestoList from "./components/ManifestoList";
import ManifestoPage from "./components/ManifestoPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManifestoList />} />
        <Route path="/manifesto/:id" element={<ManifestoPage />} />
      </Routes>
    </Router>
  );
}
