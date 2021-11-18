import { Cards, Chart, CountryPicker } from './components';
import Css from './App.module.css';
import React from 'react';

import logo from './images/covid-19.svg'

class App extends React.Component {
  render() {
    return (
      <div className={Css.container}>
        <div className={Css.logo}>
          <h1>Covid Tracker</h1> 
          <img src={logo}></img>
        </div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
