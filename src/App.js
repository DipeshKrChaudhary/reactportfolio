import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Resume from './Resume';
import Project from './Projects';
import ContactPage from "./Contact";
import Footer from "./Footer";

function App() {
  return (
  <>
  <NavBar/>
  <Home/>
  <Resume/>
  <Project/>
  <ContactPage/>
  <Footer/>
  </>
  );
}

export default App;
