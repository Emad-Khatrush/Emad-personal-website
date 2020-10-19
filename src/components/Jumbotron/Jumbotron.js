import React from 'react';

import classes from './Jumbotron.module.css';

import RoundedImage from '../../UI/RoundedImage/RoundedImage';
import Info from './Info/Info';

const jumbotron = (props) => {
  let myClasses = [classes.Jumbotron];

  return(
      <main className={myClasses.join(' ')}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 ">
            <RoundedImage />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 ">
            <Info />
          </div>
        </div>
      </main>
  )
}
export default jumbotron;
