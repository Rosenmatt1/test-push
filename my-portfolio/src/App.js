import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js'
import image from './Components/pair-programming.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        {image}
       
      </div>
    );
  }
}

export default App;
