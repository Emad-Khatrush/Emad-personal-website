import React, { Component } from 'react';

import Home from './contianers/Home/Home';
import './App.css';
import { Route } from 'react-router-dom';
import Toolbar from './components/Navbar/Toolbar/Toolbar';
import SideDrawer from './UI/SideDrawer/SideDrawer';
import Portfolio from './contianers/Portfolio/Portfolio';
import Contact from './contianers/Contact/Contact';
import Spinner from './UI/Spinner/Spinner';
import Aux from './HOC/Auxiliary';

class App extends Component{

  state = {
    showSideDrawer: false,
    loading: true
  }
   sideDrawerClosed = () => {
    this.setState({showSideDrawer: false});
  }
  drawerToggleHandler = () => {
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }
  componentDidMount(){
    setTimeout(() =>{
      this.setState({loading: false});
    },1500)
  }

  render(){
    let pageLoad = <Aux>
      <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
      <SideDrawer
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosed}/>
      <Route path="/" exact component={Home} />
      <Route path="/Portfolio" exact component={Portfolio} />
      <Route path="/Contact" exact component={Contact} />

    </Aux>
    if (this.state.loading) {
      pageLoad = <Spinner />
    }
    return(
      <Aux>
        {pageLoad}
      </Aux>
    )
  }
}


export default App;
