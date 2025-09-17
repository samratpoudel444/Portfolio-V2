import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";
Side
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/admin/dashboard" element={< />} />
      </Routes>
    </Router>
  );
}

export default App;
