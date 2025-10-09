import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";
import SideBar from "./components/AdminComponent/Sidebar";
import Navbar from "./components/WebPageComponents/Navbar";
import HomePage from "./components/WebPageComponents/HomePage";
import "./index.css";
import MyPortfolioPage from "./components/WebPageComponents/PagePortfolio";
import HomeComponent from "./components/AdminComponent/HomeComponet";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myportfolio" element={<MyPortfolioPage />} />
      </Routes>
      <Routes path="/admin" element={<HomeComponent />}>
        <Route path="dashboard" element={<AddSkills/>} />
      </Routes>
    </Router>
  );
}

export default App;
