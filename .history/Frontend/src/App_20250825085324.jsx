import {BrowserRouter as Router, Routes, Route } from "react-router";
import loginComponent from "./components/AdminComponent/login";

function App() {


  return (
    <Routes>
      <Route path="/login" element={<loginComponent />}/>
    </Routes>
  );
}

export default App
