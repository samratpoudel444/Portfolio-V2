import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import loginComponent from "./components/AdminComponent/login";

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/login" element={<loginComponent />}/>
    </Routes>
    </Router>
  );
}

export default App
