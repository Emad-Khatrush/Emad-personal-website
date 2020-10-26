import React from 'react';
import classes from './Info.module.css';
import Button from '../../../UI/Button/Button';

import { Link } from 'react-router-dom';
import emadCv from "../../../assest/emad-cv.pdf";

const info = () => {
  return(
    <div className={classes.Info}>
        <h4> Full-Stack Web Developer </h4>
        <h1> Emad Khatrush </h1>
        <p> I am an ambitious and hardworking person, I have a very
            good experience as a Full-Stack Web Developer, building
            projects from scratch using HTML/CSS javascript, React.js, and
            Node.js on the server-side.</p>
        <Link to={emadCv} target="_blank" download> <Button type="primary">  Download CV </Button> </Link>
         <Link to="/Contact"> <Button type="secondary"> Contact </Button> </Link>
    </div>
  )
}
export default info;
