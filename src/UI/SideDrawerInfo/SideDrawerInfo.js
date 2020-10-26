import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './SideDrawerInfo.module.css';
import './SideDrawerInfo.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InfoBox from '../InfoBox/InfoBox';
import Aux from '../../HOC/Auxiliary';

class SideDrawerInfo extends Component {

  displayScrollBar = () => {
    let element = document.getElementsByTagName('body');
    ReactDOM.findDOMNode(element[0]).style.overflow = "auto";
  }
  render(){
    let attachedClasses = [classes.SideDrawerInfo, classes.Close];
    if (this.props.open) {
      attachedClasses = [classes.SideDrawerInfo, classes.Open];
    }

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides"
    };
    let displayTechnology = null;
    let images = null;
    if (this.props.project) {
      displayTechnology = this.props.project.technology.map( skill => {
        return <li key={skill}> <button> {skill} </button> </li>
      });
      images = this.props.project.images.map((image, i) => {
        return(
          <div key={i}>
            <img src={require("../../assest" + image.src)} width="100%" alt="not found"/>
            <h5> {image.title} </h5>
          </div>
        )
      })
    }

    return(
        <div className={attachedClasses.join(' ')}>
          {this.props.project ?
            <Aux>
          <div className={classes.PageTitle}>
            <div onClick={this.displayScrollBar} className={classes.CrossIcon}>
              <i onClick={this.props.closed} className="fas fa-times"></i>
            </div>
            <h1> {this.props.project.name} </h1>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-7">
              <div className={classes.PageInfo}>
                <Slider {...settings}>
                  {images}
                </Slider>
              </div>
            </div>

            <div className="col-sm-12 col-md-5">
              <InfoBox>
                <div className={classes.Description}>
                  <h3> Description </h3>
                  <p> <i className="fas fa-calendar"></i> {this.props.project.date} </p>
                  <p>
                    {this.props.project.desc}
                  </p>
                </div>
                <div className={classes.Technology}>

                  <h3> Technology </h3>
                  <ul>
                    {displayTechnology}
                  </ul>
                </div>
              </InfoBox>
            </div>
          </div>
          </Aux>
        : <h1> Loading </h1>}
        </div>

    )
  }
}
export default SideDrawerInfo;
