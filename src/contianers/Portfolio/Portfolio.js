import React, { Component } from 'react';

import MyProject from '../../components/MyProjects/MyProject';
import SubjectTitle from '../../components/SubjectTitle/SubjectTitle';
import SideDrawerInfo from '../../UI/SideDrawerInfo/SideDrawerInfo';
import { withRouter } from 'react-router-dom';
import { projectsData }  from '../../assest/projectData/projectData';

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
    let displaySideDrawerInfo = null;
    if (!this.state.loading) {
      displaySideDrawerInfo = <SideDrawerInfo
      open={this.state.showSideDrawerInfo}
      closed={this.sideDrawerClosed}
      project={this.state.projectData}/>;
    }else {
      displaySideDrawerInfo = <SideDrawerInfo />;
    }

    return(
        <div className="container-fluid">
          <SubjectTitle title="Portfolio" desc="My Works" />
          <MyProject drawerOpenHandler={this.drawerOpenHandler}/>
          {displaySideDrawerInfo}
        </div>
    )
  }
}
export default withRouter(Portfolio);
