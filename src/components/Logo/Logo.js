import React from 'react';
import classes from './Logo.module.css';

const logo = () => {
  return(
    <div className={classes.Logo}>
      <img src="https://tr.rbxcdn.com/0a8cb94afc58e2231d63be139d67208d/420/420/Decal/Png" alt="not found"/>
      <span className={classes.FirstName}> Emad <span className={classes.LastName}> Khatrush </span> </span>
    </div>
  )
}
export default logo;
