import React from 'react';

import classes from './Logo.module.css';
import Logo from '../../assest/images/emad-logo.png';
import { Link } from 'react-router-dom';

const logo = () => {
  return(
    <div className={classes.Logo}>
      <Link to="/">
        <img src={Logo} alt="not found"/>
        <span className={classes.FirstName}> Emad <span className={classes.LastName}> Khatrush </span> </span>
      </Link>
    </div>
  )
}
export default logo;
