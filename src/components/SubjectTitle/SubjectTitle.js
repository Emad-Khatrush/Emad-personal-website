import React from 'react';

import classes from './SubjectTitle.module.css';

const subjectTitle = (props) => {
  return(
    <div className={classes.SubjectTitle}>
      <div className="row">
        <div className="col-sm-12">
          <h1> {props.title} </h1>
        </div>
        <div className="col-sm-12">
          <h4> {props.desc} </h4>
        </div>
      </div>
    </div>
  );
}
export default subjectTitle;
