import React, { Component } from 'react';

import Home from './contianers/Home/Home';
import './App.css';
import { Route } from 'react-router-dom';
import Toolbar from './components/Navbar/Toolbar/Toolbar';
import SideDrawer from './UI/SideDrawer/SideDrawer';

class App extends Component{

  state = {
    showSideDrawer: false
  }
   sideDrawerClosed = () => {
    this.setState({showSideDrawer: false});
  }
  drawerToggleHandler = () => {
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render(){
    return(
      <div>
        <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosed}/>
          
        <Route path="/" exact component={Home} />
      </div>
    )
  }
}


export default App;
