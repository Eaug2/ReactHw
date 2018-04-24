import React, { Component } from 'react';
import './App.css';
// import Navbar from "./narbar";
// import Jumbo from "./jumbo";
// import Section from "./section";
import Score from "./Score";


class App extends Component {
  render() {
    return (
      
      <div className="App">
        {/* <header className="App-header">
          <Navbar /> */}
          <Score />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* </header>
        <p className="App-intro">
          <Section />
        </p> */}
      </div>
    );
  }
}

export default App;
