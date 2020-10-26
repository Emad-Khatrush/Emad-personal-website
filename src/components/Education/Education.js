import React from 'react';

import classes from './Education.module.css';
import InfoBox from '../../UI/InfoBox/InfoBox';
import skillsClasses from '../../components/Skills/Skills.module.css';

const education = () => {
  return(
    <section className={classes.Education}>

      <div className="row">
        <div className="col-sm-12 ">
          <div className={skillsClasses.Title}>
            <h2> Education </h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <InfoBox>
            <div className={classes.CardLogo}>
              <img src={require('../../assest/images/beykent-Logo.jpg')} alt="not found"/>
            </div>
            <div className={classes.CardTitle}>
              <h4> Beykent University </h4>
            </div>
            <div className={classes.Major}>
              <p> Software Engineering / 2017-2021 </p>
            </div>
            <div className={classes.CardContent}>
              <p>
                A software engineer who is the development
                and building of computer systems software
                and applications software. In this course,
                I learned how to analyze and test the projects
                also how-to programming and coding, algorithms and
                data structures, testing software, design, and architecture.
              </p>
            </div>
          </InfoBox>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <InfoBox>
            <div className={classes.CardLogo}>
              <img className={classes.UdemySize} src={require('../../assest/images/udemyLogo.png')} alt="not found"/>
            </div>
            <div className={classes.CardTitle}>
              <h4> Udemy </h4>
            </div>
            <div className={classes.Major}>
              <p> Full-Stack Web Developer / 2020 </p>
            </div>
            <div className={classes.CardContent}>
              <p>
                It is an online course from Udemy
                with more than 50+ hour of work in
                this course, the technologies that I
                learned in this course is HTML5, CSS3,
                flexbox, responsive design, JavaScript,
                Bootstrap 4, SemanticUI, DOM Manipulation,
                NodeJS, NPM, ExpressJS, MongoDB, Database Associations,
                Authorization and much more.
              </p>
            </div>
          </InfoBox>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-4">
          <InfoBox>
            <div className={classes.CardLogo}>
              <img className={classes.UdemySize} src={require('../../assest/images/udemyLogo.png')} alt="not found"/>
            </div>
            <div className={classes.CardTitle}>
              <h4> Udemy </h4>
            </div>
            <div className={classes.Major}>
              <p> React Developer / 2020 </p>
            </div>
            <div className={classes.CardContent}>
              <p>
                It is a full course with 40+ hours only
                focusing on the React.js library, the main goal
                of this course is to learn how React.js structure
                works also learning state management with redux,
                Components, Authentication, React Hooks, Routing,
                and much more.
              </p>
            </div>
          </InfoBox>
        </div>
      </div>

    </section>
  )
}
export default education;
