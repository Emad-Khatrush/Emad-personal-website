import React, { Component } from 'react';

import MyProjects from '../../components/MyProjects/MyProject';
import SubjectTitle from '../../components/SubjectTitle/SubjectTitle';
import SideDrawerInfo from '../../UI/SideDrawerInfo/SideDrawerInfo';
import { withRouter } from 'react-router-dom';
import { projectsData }  from '../../assest/projectData/projectData';
import Footer from '../../components/Footer/Footer';
import Aux from '../../HOC/Auxiliary';

import classes from './Portfolio.module.css';

class Portfolio extends Component{
  state = {
    showSideDrawerInfo: false,
    projectData: null
  }
  sideDrawerClosed = () => {
   this.setState({showSideDrawerInfo: false});
 }
 drawerOpenHandler = () => {
   setTimeout(() => {
     const hash = this.props.location.hash;
     const getProjectData = projectsData.map( project => {
       if (project.id === hash) {
         return project;
       }
       return null;
     })
     getProjectData.forEach((item) => {
       if (item !== null) {
         this.setState({showSideDrawerInfo: true, projectData: item});
       }
     });
   }, 1)
 }

  render(){
    let displaySideDrawerInfo = <SideDrawerInfo />;
    if (!this.state.loading) {
      displaySideDrawerInfo = <SideDrawerInfo
      open={this.state.showSideDrawerInfo}
      closed={this.sideDrawerClosed}
      project={this.state.projectData}/>;
    }
    console.log(this.state.projectData);
    return(
      <Aux>
        <div className={`${classes.Portfolio} container-fluid`}>
          <SubjectTitle title="Portfolio" desc="My Works" />
          <MyProjects drawerOpenHandler={this.drawerOpenHandler}/>
          {displaySideDrawerInfo}
        </div>
        <Footer />
      </Aux>
    )
  }
}
export default withRouter(Portfolio);
