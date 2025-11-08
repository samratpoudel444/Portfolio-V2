import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login.jsx";
import HomePage from "./components/WebPageComponents/HomePage.jsx";
import MyPortfolioPage from "./components/WebPageComponents/PagePortfolio.jsx";
import HomeComponent from "./components/AdminComponent/HomeComponet.jsx";
import AddSkills from "./components/AdminComponent/AddSkills.jsx";
import "./index.css";
import AddEducation from "./components/AdminComponent/AddEducations.jsx";
import AddExperince from "./components/AdminComponent/AddExperinces.jsx";
import CreateBlogs from "./components/AdminComponent/CreateBlogs.jsx";
import AddProjects from "./components/AdminComponent/AddProjects.jsx";
import Dashboard from "./components/AdminComponent/Dashboard.jsx";
import ViewEducation from "./components/AdminComponent/viewEducation.jsx";
import ViewProjects from "./components/AdminComponent/viewProject.jsx";
import ViewExperince from "./components/AdminComponent/viewExperince.jsx";
import ViewBlogs from "./components/AdminComponent/viewBlogs.jx";
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
