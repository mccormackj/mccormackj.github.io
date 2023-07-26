import './App.css';
import React, { Component } from 'react';
import Home from './Home.js'
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
          <Link to="/" onClick = {() => highlightActive("/")} >Home</Link>
          <Link to="/about" onClick = {() => highlightActive("/about")} >About Me</Link>
          <Link to="/contact" onClick = {() => highlightActive("/contact")} >Contact Me</Link>
        </div>
        <div class ="main">
        <Routes>
            <Route exact path='/' element = {<Home />} ></Route>
            <Route exact path='/about' element={< About />}></Route>
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