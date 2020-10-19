import React from 'react';

import classes from './Technologies.module.css';
import skillsClasses from '../Skills/Skills.module.css';

const technologies = () => {
  return(
    <section onScroll={()=> console.log("reached")} className={classes.Technologies}>
      <div className="row">
        <div className="col-sm-12">
          <div className={skillsClasses.Title}>
            <h2> Technologies </h2>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.HTML}> HTML </li>
              <h6> 100% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.CSS}> CSS </li>
              <h6> 90% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.Javascript}> Javascript </li>
              <h6> 90% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.React}> React.js </li>
              <h6> 80% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.JQuery}> JQuery </li>
              <h6> 90% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.Bootstrap}> Bootstrap 3/4 </li>
              <h6> 100% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.Redux}> Redux </li>
              <h6> 70% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.Node}> Node.js </li>
              <h6> 95% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.Express}> Express.js </li>
              <h6> 100% </h6>
            </ul>
          </div>

          <div className="col-sm-12 col-md-6">
            <ul>
              <li className={classes.MangoDB}> MangoDB </li>
              <h6> 100% </h6>
            </ul>
          </div>
      </div>
    </section>
  )
}
export default technologies;
