import React from 'react';

import classes from './Languages.module.css';
import skillsClasses from '../Skills/Skills.module.css';

const languages = () => {
  return(
    <section className={classes.Languages}>
      <div className="row">
        <div className="col-sm-12">
          <div className={skillsClasses.Title}>
            <h2> Languages </h2>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-sm-12 col-md-4">
            <ul>
              <li className={classes.Arabic}> Arabic </li>
              <h6> 100% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-4">
            <ul>
              <li className={classes.Turkish}> Turkish </li>
              <h6> 90% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-4">
            <ul>
              <li className={classes.English}> English </li>
              <h6> 75% </h6>
            </ul>
          </div>
      </div>
    </section>
  )
}
export default languages;
