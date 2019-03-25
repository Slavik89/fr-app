import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Skill from './components/Skill';
import Qualities from './components/Qualities';
import Home from './components/Home';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history} >
        <div className="titled">
          <ul type="none">
            <li className=""><Link to='/' className="titles">Home</Link></li>
            <li className=""><Link to='/skill' className="titles">Skill</Link></li>
            <li className=""><Link to='/qualities' className="titles">Qualities</Link></li>
          </ul>
        </div>        
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
