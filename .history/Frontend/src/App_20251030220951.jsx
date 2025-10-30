import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";
import SideBar from "./components/AdminComponent/Sidebar";
import Navbar from "./components/WebPageComponents/Navbar";
import HomePage from "./components/WebPageComponents/HomePage";
import MyPortfolioPage from "./components/WebPageComponents/PagePortfolio";
import HomeComponent from "./components/AdminComponent/HomeComponet";
import AddSkills from "./components/AdminComponent/AddSkills";
import "./index.css";
import AddEducation from "./components/AdminComponent/AddEducations";
import AddExperince from "./components/AdminComponent/AddExperinces";
import CreateBlogs from "./components/AdminComponent/CreateBlogs";
import AddProjects from "./components/AdminComponent/AddProjects";
import Dashboard from "./components/AdminComponent/Dashboard";
import viewEducation from "./components/AdminComponent/viewEducation";
import viewProjects from "./components/AdminComponent/viewProject";
import viewExperince from "./components/AdminComponent/viewExperince";
import viewBlogs from "./components/AdminComponent/viewBlogs";
import viewSkills from "./components/AdminComponent/viewSkills";
viewSkills

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myportfolio" element={<MyPortfolioPage />} />

        <Route path="/admin" element={<HomeComponent />}>
          <Route path="addskills" element={<AddSkills />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addeducation" element={<AddEducation />} />
          <Route path="addexperience" element={<AddExperince />} />
          <Route path="CreateBlogs" element={<CreateBlogs />} />
          <Route path="AddProjects" element={<AddProjects />} />

          <Route path="education" element={<AddProjects />} />
          <Route path="projects" element={<AddProjects />} />
          <Route path="experience" element={<AddProjects />} />
          <Route path="blogs" element={<AddProjects />} />
          <Route path="skills" element={<AddProjects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
