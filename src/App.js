import React, { Component } from 'react';

import Home from './contianers/Home/Home';
import './App.css';
import { Route } from 'react-router-dom';
import Toolbar from './components/Navbar/Toolbar/Toolbar';
import SideDrawer from './UI/SideDrawer/SideDrawer';
import Portfolio from './contianers/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Contact from './contianers/Contact/Contact';

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
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Contact" exact component={Contact} />
        <Footer />
      </div>
    )
  }
}


export default App;
