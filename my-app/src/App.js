import { Cards, Chart, Update, NavBar } from './components';
import Css from './App.module.css';
import React from 'react';
import logo from './images/covid-19.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className={Css.container}>
          <div className={Css.logo}>
            <h1>Covid Tracker</h1> 
            <img src={logo}></img>
            <nav>
              <NavBar />
            </nav>
          </div>
          <div className={Css.content}>
            <Routes>
              <Route exact path="/" element={<Cards />}></Route>
              <Route exact path="/graph" element={<Chart />}></Route>
              <Route exact path="/form" element={<Update />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
