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
Vie
import ViewEducation from "./components/AdminComponent/ViewEducation.jsx";
import ViewProjects from "./components/AdminComponent/ViewProject.jsx";
import ViewExperince from "./components/AdminComponent/viewExperince.jsx";
import ViewBlogs from "./components/AdminComponent/viewBlogs.jsx";
import ViewSkills from "./components/AdminComponent/viewSkills.jsx";
import MyProfile from "./components/AdminComponent/MyProfile.jsx";
import ProtectedRoute from "./utils/protectedRoute.jsx";
import BlogsPage from "./components/WebPageComponents/BlogPage.jsx";
import SingleBlogPage from "./components/WebPageComponents/singleBlogPage.jsx";


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
