import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
