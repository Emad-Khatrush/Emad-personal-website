import React from 'react';
import classes from './InfoBox.module.css';

const infoBox = (props) => {
  return(
    <div className={classes.InfoBox}>
      {props.children}
    </div>
  )
}
export default infoBox;
