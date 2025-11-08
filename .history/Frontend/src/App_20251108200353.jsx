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
import AddProjects from "./components/AdminComponent/AddProjects.jsx";
import Dashboard from "./components/AdminComponent/Dashboard.jsx";
import ViewEducation from "./components/AdminComponent/viewEducation.jsx";
import ViewProjects from "./components/AdminComponent/viewProject";
import ViewExperince from "./components/AdminComponent/viewExperince";
import ViewBlogs from "./components/AdminComponent/viewBlogs";
import ViewSkills from "./components/AdminComponent/viewSkills";
import MyProfile from "./components/AdminComponent/MyProfile";
import ProtectedRoute from "./utils/protectedRoute";
import BlogsPage from "./components/WebPageComponents/BlogPage";
import SingleBlogPage from "./components/WebPageComponents/singleBlogPage";


function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myportfolio" element={<MyPortfolioPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <HomeComponent />{" "}
            </ProtectedRoute>
          }
        >
          <Route path="addskills" element={<AddSkills />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addeducation" element={<AddEducation />} />
          <Route path="addexperience" element={<AddExperince />} />
          <Route path="CreateBlogs" element={<CreateBlogs />} />
          <Route path="AddProjects" element={<AddProjects />} />
          <Route path="education" element={<ViewEducation />} />
          <Route path="projects" element={<ViewProjects />} />
          <Route path="experience" element={<ViewExperince />} />
          <Route path="blogs" element={<ViewBlogs />} />
          <Route path="skills" element={<ViewSkills />} />
          <Route path="MyProfile" element={<MyProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
