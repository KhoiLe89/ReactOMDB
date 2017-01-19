import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js'

class Home extends Component {
  render() {
    return (
      <div>
        <h1> OMDB React </h1>
        <Search input={document.getElementById('input')}/>
      </div>
    );
  }
}

export default Home;
