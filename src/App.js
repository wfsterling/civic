import React, { Component } from 'react';
// import img from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={img} className="App-logo" alt="logo" /> */}

          <p>
            This is Raining.design
          </p>
          {/* <p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
              You can login here.
            </a>
          </p> */}

          <button id="signupButton" className="civic-button-a medium" type="button">
              <span>Log in with Civic</span>
          </button>
        </header>
      </div>
    );
  }
}

export default App;
