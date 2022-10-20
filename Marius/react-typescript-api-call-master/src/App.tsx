import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";


const App: React.FC = () => {
  return (
    <div>
      

      <div className="container">
  <div className="row">
    <div className="col">
    <nav  className="flex-column" >
        <a href="/tutorials" className="navbar-brand">
          bezKoder2
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials2
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adds2
            </Link>
          </li>
 
        </div>
      </nav>
    </div>
    <div className="col-6">
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adds
            </Link>
          </li>

        </div>
      </nav>     
      </div>
      <div>
      <div className="container mt-3  bg-warning">
        <Routes>
          <Route path="/" element={<TutorialsList/>} />
          <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
 
        </Routes>
      </div> 
        </div>
  
    </div>
    <div className="col bg-success" >
      Meniu desine
    </div>
  </div>
  <div className="row fixed-bottom h-25">
    <div className="col align-middle" >
Footer kopyraitas D&D
    </div>
    </div>
</div>
      



    </div>
  );
}

export default App;
