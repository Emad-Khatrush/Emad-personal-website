import React from 'react';
import classes from './Button.module.css';

const button = (props) => {
  let typeButton = [classes.btn];
  if (props.type === "primary") {
    typeButton.push(classes.primary);
  }else if (props.type === "secondary") {
    typeButton.push(classes.secondary);
  }
  return(
    <button className={typeButton.join(" ")} onClick={props.clicked}> {props.children} </button>
  )
}
export default button;
