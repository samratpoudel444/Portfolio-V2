import {Routes, Route } from "react-router";
import loginComponent from "./components/AdminComponent/login";

function App() {


  return (
    <Routes>
      <Route element={<loginComponent />}/>
      
    </Routes>
  );
}

export default App
