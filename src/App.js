import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Skill from './components/Skill';
import Qualities from './components/Qualities';

const history = createBrowserHistory();

const Home = () => (
  <h1>home</h1>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/skill'>Skill</Link></li>
            <li><Link to='/qualities'>Qualities</Link></li>
          </ul>
        </div>
        <hr/>
        <Route path='/' component={Home} />
        <Route path='/skill' component={Skill} />
        <Route path='/qualities' component={Qualities} />
  
        
      </BrowserRouter>

      /* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
    );
  }
}

export default App;
