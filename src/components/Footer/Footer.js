import React from 'react';

import classes from './Footer.module.css';

const footer = () => {
  return(
    <footer className={classes.Footer}>
      <div className={classes.SocialMedia}>
        <ul>
          <li> <a href="https://www.instagram.com/medo_khatrush/" target="_blank" rel="noopener noreferrer"> <span className="fab fa-instagram" style={{color: "#e66465"}}></span> Instagram </a> </li>
          <li> <a href="https://www.facebook.com/emadkhatrush" target="_blank" rel="noopener noreferrer"> <span className="fab fa-facebook-square" style={{color: "#3b5998"}}></span> Facebook </a> </li>
          <li> <a href="https://www.youtube.com/channel/UCTZGAA3_YT5B_Vsbg2kcjxg" target="_blank" rel="noopener noreferrer"> <span className="fab fa-youtube" style={{color: "#FF0000"}}></span> Youtube </a> </li>
          <li> <a href="https://github.com/Emad-Khatrush" target="_blank" rel="noopener noreferrer"> <span className="fab fa-github-square" style={{color: "#333"}}></span> Github </a> </li>
        </ul>
      </div>
      <div className={classes.Copyright}>
        <p> © 2020 All rights reserved. Emad Khatrush. </p>
      </div>
    </footer>
  )
}
export default footer;
