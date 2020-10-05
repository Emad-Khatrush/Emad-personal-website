import React, { Component } from 'react';

import Toolbar from '../../components/Navbar/Toolbar/Toolbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Technologies from '../../components/Technologies/Technologies';
import Languages from '../../components/Languages/Languages';
import Footer from '../../components/Footer/Footer';

class Home extends Component{

  render(){
    return(
        <div className="contianer">
          <Toolbar />
          <Jumbotron />
          <Skills />
          <Education />
          <Technologies />
          <Languages />
          <Footer />
        </div>
    )
  }
}
export default Home;
