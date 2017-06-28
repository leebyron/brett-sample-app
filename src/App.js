import React from 'react';
import logo from './logo.svg';
import './App.css';
import AgeAndName from './AgeAndName';
import Imgur from './Imgur';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          This is an example React + Webpack app!
          <img src={logo} alt="react-logo" className="reactLogo" />
        </div>
        <AgeAndName />
        <Imgur topic="funny" />
      </div>
    );
  }
}
