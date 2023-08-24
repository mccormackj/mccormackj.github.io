import './App.css';
import React, { Component } from 'react';
import Projects from './Projects.js'
import About from './About.js'
import Contact from './Contact.js'
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


function App () {
  return (
      <Router>
      <div className="App">
        <div class ="navbar">
          <Link to="/contact" onClick = {() => highlightActive("/contact")} >Contact Me</Link>
          <Link to="/projects" onClick = {() => highlightActive("/projects")} >Projects</Link>
          <Link to="/" onClick = {() => highlightActive("/about")} >About Me</Link>
        </div>
        <div class ="main">
        <Routes>
          <Route exact path='/' element={< About />}></Route>  
          <Route exact path='/projects' element = {<Projects />} ></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
        </div>
      </div>
      </Router>
  );
}

function highlightActive(path) {
  var links = document.getElementById("Menu").getElementsByTagName("a")
  for(var i = 0; i < links.length; i++) {
    var linkPath = links[i].pathname
    console.log(path + " " + linkPath)
    if(path == linkPath){
      links[i].classList.add("selected")
    } else {
      links[i].classList.remove("selected")
    }
  }
}

export default App;