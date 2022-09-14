import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo-app" element={<Home />} />
      </Routes>
    </>
    
  );
}

export default App;
