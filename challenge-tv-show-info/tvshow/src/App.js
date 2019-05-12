import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ShowBox from './components/ShowBox'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShowBox />
      </div>
    );
  }
}

export default App;
