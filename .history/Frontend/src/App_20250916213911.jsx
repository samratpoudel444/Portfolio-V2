import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";
import SideBar from "./components/AdminComponent/Sidebar";
import Navbar from "./components/WebPageComponents/Navbar";
Navbar
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/admin/dashboard" element={<SideBar />} />
        <Route path="/Home" element={<SideBar />} />
      </Routes>
    </Router>
  );
}

export default App;
