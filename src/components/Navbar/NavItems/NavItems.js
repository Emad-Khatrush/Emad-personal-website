import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => {
  return(
    <ul className={classes.NavItems}>
      <NavItem clicked={props.clicked} path="/"> About Me</NavItem>
      <NavItem clicked={props.clicked} path="/Portfolio"> Portfolio </NavItem>
      <NavItem clicked={props.clicked} path="/Contact"> Contact </NavItem>
    </ul>
  )
}
export default navItems;
