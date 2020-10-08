import React from 'react';
import classes from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
  return(
    <li className={classes.NavItem}>
      <NavLink
        to={props.path}
        activeClassName={classes.active}
        exact>
        {props.children} 
      </NavLink>
    </li>
  )
}
export default navItem;
