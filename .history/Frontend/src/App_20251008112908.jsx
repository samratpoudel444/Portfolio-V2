import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginComponent from "./components/AdminComponent/login";
import SideBar from "./components/AdminComponent/Sidebar";
import Navbar from "./components/WebPageComponents/Navbar";
import HomePage from "./components/WebPageComponents/HomePage";
import MyPortfolioPage from "./components/WebPageComponents/PagePortfolio";
import HomeComponent from "./components/AdminComponent/HomeComponet";
import AddSkills from "./components/AdminComponent/AddSkills";
import "./index.css";

// Admin layout with Sidebar
function AdminLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/myportfolio" element={<MyPortfolioPage />} />

        {/* Admin routes with layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<HomeComponent />} /> {/* /admin */}
          <Route path="dashboard" element={<AddSkills />} />{" "}
          {/* /admin/dashboard */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
