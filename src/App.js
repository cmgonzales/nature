import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Mid from './Mid';
import Bar from './nv'

class App extends Component {
  render() {
    return (
      <div>
      <Bar/>
      <Mid/>
      </div>
    );
  }
}

export default App;
