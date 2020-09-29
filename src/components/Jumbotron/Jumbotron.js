import React from 'react';

import classes from './Jumbotron.module.css';
import RoundedImage from '../../UI/RoundedImage/RoundedImage';
import Info from './Info/Info';

const jumbotron = () => {
  let myClasses = [classes.Jumbotron, 'contianer'];
  return(
    <section className={myClasses.join(' ')}>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5 ">
          <RoundedImage />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7 ">
          <Info />
        </div>
      </div>
    </section>
  )
}
export default jumbotron;
