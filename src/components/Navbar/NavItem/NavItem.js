import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props) => {
  return(
    <li className={classes.NavItem}>
      <a href="/"> {props.children} </a>
    </li>
  )
}
export default navItem;
