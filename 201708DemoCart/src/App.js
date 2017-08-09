import React, { Component } from 'react';
import Perf from 'react-addons-perf'
import MonthJail from './MonthJail.js';
import Calendar from './Calendar';
import {GoodList} from './Cart.js';
import Cart from './Cart.js';
import logo from './logo.svg';
import './App.css';
// const DATA={days:30,firstDayOfWeek:4,planList:[]};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Demo By Zxp</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Calendar />
        <Cart />
      </div>
    );
  }
}

export default App;
