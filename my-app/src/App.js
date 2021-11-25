import { Cards, Chart, CountryPicker } from './components';
import Css from './App.module.css';
import React from 'react';
import axios from 'axios'

import logo from './images/covid-19.svg'

class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  }
  
  componentDidMount = () => {
    this.getCovidData();
  }

  getCovidData = () => {
    axios.get('http://localhost:8080/all-covid-Data')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been recieved");
        console.log(data);
      }) 
      .catch(() => {
        console.log("Error retrieving data");
      })
  }

  displayData = (posts) => {

    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index}>
        <h3>Je;;p</h3>
      </div>
    ));
  }

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
