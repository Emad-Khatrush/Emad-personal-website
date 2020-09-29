import React, { Component } from 'react';

import Toolbar from '../../components/Navbar/Toolbar/Toolbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

class Home extends Component{

  render(){
    return(
      <div>
        <Toolbar />
        <Jumbotron />
        <p> sections </p>
      </div>
    )
  }
}
export default Home;
