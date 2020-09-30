import React, { Component } from 'react';

import Toolbar from '../../components/Navbar/Toolbar/Toolbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';

class Home extends Component{

  render(){
    return(
      <div className="contianer">
        <Toolbar />
        <Jumbotron />
        <Skills />
        <Education />
      </div>
    )
  }
}
export default Home;
