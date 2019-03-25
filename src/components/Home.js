import React from 'react';
import logo from './../logo.svg';

function Home () {
    return (
      <div className="home-container">        
        <p>Hi, I'm learning React now</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }

export default Home;