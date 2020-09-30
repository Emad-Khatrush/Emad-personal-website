import React from 'react';
import classes from './Skills.module.css';

const skills = () => {
  return(
    <section className={classes.Skills}>
      <div className="row">
        <div className="col-sm-12 ">
          <div className={classes.Title}>
            <h2> My Skills </h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className={classes.TextBox}>
            <i className="fab fa-js-square"></i>
            <div className={classes.Text}>
              <h4> Front-end </h4>
              <p>
                Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis
                turpis tempus ex.
              </p>
            </div>
          </div>
        </div>

          <div className="col-md-6 col-lg-6">
            <div className={classes.TextBox}>
              <i className="fab fa-js-square"></i>
              <div className={classes.Text}>
                <h4> Front-end </h4>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                  Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                  vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis
                  turpis tempus ex.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className={classes.TextBox}>
              <i className="fab fa-js-square"></i>
              <div className={classes.Text}>
                <h4> Front-end </h4>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                  Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                  vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis
                  turpis tempus ex.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className={classes.TextBox}>
              <i className="fab fa-js-square"></i>
              <div className={classes.Text}>
                <h4> Front-end </h4>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                  Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                  vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis
                  turpis tempus ex.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default skills;
