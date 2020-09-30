import React from 'react';

import classes from './Education.module.css';
import InfoBox from '../../UI/InfoBox/InfoBox';
import skillsClasses from '../../components/Skills/Skills.module.css';

import beykentLogo from '../../assest/images/beykent-Logo.jpg';

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
              <img src={beykentLogo} alt="not found"/>
            </div>
            <div className={classes.CardTitle}>
              <h4> Beykent University </h4>
            </div>
            <div className={classes.Major}>
              <p> Software Engineering / 2017-2021 </p>
            </div>
            <div className={classes.CardContent}>
              <p>
                Mauris neque libero, aliquet vel mollis nec,
                euismod sed tellus. Mauris convallis dictum
                elit id volutpat. Vivamus blandit, dolor vitae
                 lacinia maximus, risus velit vehicula odio, a
                 tincidunt turpis turpis tempus ex.
              </p>
            </div>
          </InfoBox>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <InfoBox>
            <div className={classes.CardLogo}>
              <img src={beykentLogo} alt="not found"/>
            </div>
            <div className={classes.CardTitle}>
              <h4> Beykent University </h4>
            </div>
            <div className={classes.Major}>
              <p> Software Engineering / 2017-2021 </p>
            </div>
            <div className={classes.CardContent}>
              <p>
                Mauris neque libero, aliquet vel mollis nec,
                euismod sed tellus. Mauris convallis dictum
                elit id volutpat. Vivamus blandit, dolor vitae
                 lacinia maximus, risus velit vehicula odio, a
                 tincidunt turpis turpis tempus ex.
              </p>
            </div>
          </InfoBox>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-4">
          <InfoBox>
            <div className={classes.CardLogo}>
              <img src={beykentLogo} alt="not found"/>
            </div>
            <div className={classes.CardTitle}>
              <h4> Beykent University </h4>
            </div>
            <div className={classes.Major}>
              <p> Software Engineering / 2017-2021 </p>
            </div>
            <div className={classes.CardContent}>
              <p>
                Mauris neque libero, aliquet vel mollis nec,
                euismod sed tellus. Mauris convallis dictum
                elit id volutpat. Vivamus blandit, dolor vitae
                 lacinia maximus, risus velit vehicula odio, a
                 tincidunt turpis turpis tempus ex.
              </p>
            </div>
          </InfoBox>
        </div>
      </div>

    </section>
  )
}
export default education;
