import React, { Component } from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Technologies from '../../components/Technologies/Technologies';
import Languages from '../../components/Languages/Languages';

class Home extends Component{

  render(){
    return(
        <div className="contianer">
          <Jumbotron />
          <Skills />
          <Education />
          <Technologies />
          <Languages />
        </div>
    )
  }
}
export default Home;
