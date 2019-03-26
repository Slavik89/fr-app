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
            <li><Link to='/' className="titles">Home</Link></li>
            <li><Link to='/skill' className="titles">Skill</Link></li>
            <li><Link to='/qualities' className="titles">Qualities</Link></li>
          </ul>
        </div>        
        <Route path='/' component={Home} />
        <Route path='/skill' component={Skill} />
        <Route path='/qualities' component={Qualities} />
        <Home />        
      </BrowserRouter>           
    );
  }
}

export default App;
