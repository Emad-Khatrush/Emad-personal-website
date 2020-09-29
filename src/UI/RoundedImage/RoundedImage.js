import React from 'react';
import classes from './RoundedImage.module.css';
import personalPhoto from '../../assest/images/emad-photo.JPG';

const roundedImage = () => {
  return(
    <div className={classes.RoundedImage}>
        <img src={personalPhoto} alt="not found"/>
    </div>
  )
}
export default roundedImage;
