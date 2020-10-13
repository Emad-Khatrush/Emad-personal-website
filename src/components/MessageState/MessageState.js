import React from 'react';

import classes from './MessageState.module.css';

const messageState = (props) => {

  let result = null;
  if (props.type === "successed") {
    result = <div>
      <i className="fas fa-check-circle"></i>
      <h1> Message sent successfully </h1>
    </div>;
  }else {
    result = <div>
      <i className="fas fa-exclamation-circle" style={{color: '#e2e632'}}></i>
      <h1> Please fill the form </h1>
    </div>;
  }
  return(
    <div className={classes.MessageState}>
      {result}
    </div>
  )
}
export default messageState;
