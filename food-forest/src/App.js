import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

class App extends Component {

  constructor() {
    super()
    this.state = {
      plantInfo: {},
      plantCoords: []
    }
  }

  // Loads plant info on initialization into a map of name to object
  componentDidMount() {
    Tabletop.init({
      key: '1ecF8O2AxaI3DDI8A-o3B7zvzAeYYNU9HDvsshXAAmwc',
      callback: (junk, tabletop) => {
        let info = {};
        let coords = tabletop.sheets('Plant_Coordinates').all()
        tabletop.sheets('Plant_Details').all().forEach(dat => {
          info[dat['Label']] = dat;
        });
        this.setState({plantInfo: info, plantCoords: coords});
      }
    });
  }


  render() {
    if (Object.keys(this.state.plantInfo).length === 0) {
      return (<p>Loading...</p>);
    }
    else
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            {Object.keys(this.state.plantInfo).map((key, value) => (
              <p>Name:&nbsp;{key}&nbsp;&nbsp;&nbsp;Family:&nbsp;{this.state.plantInfo[key]['Family']}</p>
            ))}
            {this.state.plantInfo['Peach']['Label']}
            
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
  }
}

export default App;
