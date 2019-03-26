import React from 'react';
import logo from './../logo.svg';

function Home () {    
    return (      
      <div className="home-container">        
        <p>Hi, My name is Yaroslav. I learn React</p>        
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }

export default Home;