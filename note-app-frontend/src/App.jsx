import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup/Signup";
import Page from "./pages/Page/Page";
import Login from "./pages/Login/Login";

const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Dashboard" exact element={<Dashboard />} />
      <Route path="/Login" exact element={<Login />} />
      <Route path="/Signup" exact element={<Signup />} />
      <Route path="/Page" exact element={<Page />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
