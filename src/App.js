import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Weather from "./Pages/Weather";
import News from "./Pages/News";
import ToDo from "./Pages/ToDo";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="main">
        <h1>My Projects</h1>
      </div>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/ToDo" element={<ToDo />} />
            <Route path="/News" element={<News />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
