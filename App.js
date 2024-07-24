import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
