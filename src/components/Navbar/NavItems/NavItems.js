import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = () => {
  return(
    <ul className={classes.NavItems}>
      <NavItem path="/"> About Me</NavItem>
      <NavItem path="/Portfolio"> Portfolio </NavItem>
      <NavItem path="/Contact"> Contact </NavItem>
    </ul>
  )
}
export default navItems;
