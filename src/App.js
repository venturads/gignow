import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <NavBar />
      <h2>hello world!</h2>
      <Route path='/' />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
    </Router>
  );
}

export default App;
