import React, {Fragment} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar/>
          <Route exact path='/'component={Home}/>
        </Fragment>
      </Router>
      
    </div>
  );
}

export default App;
