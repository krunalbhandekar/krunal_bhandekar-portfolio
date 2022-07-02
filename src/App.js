import React from "react";
import "./App.css";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Home from "./Modules/Home";
import Skills from "./Modules/Skills";
import Projects from "./Modules/Projects";
import Contact from "./Modules/Contact";
import About from "./Modules/About";
import CustomNav from "./Components/NavBar";

function App() {
  return (
    <>
    {/* // <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/skills" component={Skills} />
    //     <Route exact path="/projects" component={Projects} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/contact" component={Contact} />
    //   </Switch>
    // </BrowserRouter> */}
    
    <CustomNav/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
        <Route exact path="/skills" element={<Skills/>} />
         <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
     </Routes>
    </>
  );
}

export default App;
