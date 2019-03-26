import React, {Component} from 'react';
import Home from './Home';

class Qualities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  render() {
    const body = 
    <ul className="submenu">
      <li>Team worker;</li>
      <li>Sociable, not conflict, polite, energetic, easy-going, responsible, conscientious, punctual;</li>
      <li>Determined and self-organized, easily learned;</li>
      <li>Interested in learning something new;</li>
    </ul>;
    return (
      <div>        
        {this.state.isOpen && body}
        <button className="btn btn-primary" onClick={this.handleClick}>{this.state.isOpen ? 'Hide' : 'Show'}</button>
        {this.state.isOpen && <Home/>}                
      </div>
    )
  }    

    handleClick = () =>  {
      this.setState({
        isOpen: !this.state.isOpen
      })
    } 

  }

export default Qualities;
