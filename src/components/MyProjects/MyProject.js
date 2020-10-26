import React from 'react';
import ReactDOM from 'react-dom';

// import classes from './MyProject.module.css';
import classes from './MyProject.module.scss';
import { Link } from 'react-router-dom';

const myProject = (props) => {

  const hideScrollBar = () => {
    let element = document.getElementsByTagName('body');
    ReactDOM.findDOMNode(element[0]).style.overflow = "hidden";
  }
  return(
    <section className={classes.MyProject}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div onClick={props.drawerOpenHandler} className={classes.Images}>
          <Link to={{
            path: "/Portfolio",
            hash: "Project-1"
          }}>
            <img onClick={hideScrollBar} src="https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="not found"/>
          </Link>
          </div>
          <span> Details </span>
          <i className="far fa-file-alt"></i>
        <div className={classes.Name}>
          <h4> TAS-SWEETS PROJECT </h4>
        </div>

        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div onClick={props.drawerOpenHandler} className={classes.Images}>
          <Link to={{
            path: "/Portfolio",
            hash: "Project-2"
          }}>
            <img onClick={hideScrollBar} src={require("../../assest/images/rickAndMorty.jpg")} alt="not found"/>
          </Link>
          </div>
          <span> Details </span>
          <i className="far fa-file-alt"></i>
          <div className={classes.Name}>
            <h4> THE RICK AND MORTY API </h4>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div onClick={props.drawerOpenHandler} className={classes.Images}>
          <Link to={{
            path: "/Portfolio",
            hash: "Project-3"
          }}>
            <img onClick={hideScrollBar} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" alt="not found"/>
          </Link>
          </div>
          <span> Details </span>
          <i className="far fa-file-alt"></i>
          <div className={classes.Name}>
            <h4> EMAD PERSONAL WEBSITE </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default myProject;
