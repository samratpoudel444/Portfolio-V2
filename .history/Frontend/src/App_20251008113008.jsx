import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";
import SideBar from "./components/AdminComponent/Sidebar";
import Navbar from "./components/WebPageComponents/Navbar";
import HomePage from "./components/WebPageComponents/HomePage";
import MyPortfolioPage from "./components/WebPageComponents/PagePortfolio";
import HomeComponent from "./components/AdminComponent/HomeComponet";
import AddSkills from "./components/AdminComponent/AddSkills";
import "./index.css";


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myportfolio" element={<MyPortfolioPage />} />

        <Route path="/admin" element={<HomeComponent />}>
          <Route path="dashboard" element={<AddSkills />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
