import React, {Component} from 'react';
import Home from './Home';

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    }
  }

  render() {
    const body =  
    <ul className="submenu">
      <li>Familiar with principles of work in IT companies;</li>
      <li>Practical experience in testing processes, Project Life Cycle, Bug Life Cycle;</li>
      <li>Practical experience in functional testing, creation of test documentation design;</li>
      <li>Practical experience with TortoiseGit, GitHub, VisualStudio, VisualStudio Team Service;</li>
      <li>Experience in working with user stories, specification;</li>
      <li>Basic knowledge of Java, C#, Python, HTML, CSS, JS;</li>
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

export default Skill;
