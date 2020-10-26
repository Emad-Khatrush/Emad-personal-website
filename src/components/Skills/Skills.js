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
            <i className="fab fa-react" style={{color: "#39c1fb"}}></i>
            <div className={classes.Text}>
              <h4> Front-end </h4>
              <p>
                One of the most important things that we
                should be concentrated on, is the flexibility
                 of using the customer to the site and the
                 beauty of the interface, for this reason,
                 I am using React.js to achieve ease in
                 developing websites professionally.
              </p>
            </div>
          </div>
        </div>

          <div className="col-md-6 col-lg-6">
            <div className={classes.TextBox}>
              <i className="fab fa-node-js" style={{color: "#51e615"}}></i>
              <div className={classes.Text}>
                <h4> Back-end </h4>
                <p>
                  Using Node.js as your server technology gives
                  me a great boost that comes from using
                  the same language on both the front end and the back end,
                  also Node.js offers great package management solutions, npm or yarn
                  the amount of available open-source tools in npm’s registry is massive and growing fast.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className={classes.TextBox}>
              <i className="fas fa-store" style={{color: "#3ccfbd"}}></i>
              <div className={classes.Text}>
                <h4> Ecommerce </h4>
                <p>
                  Building E-Commerce websites from scratch with
                  high-quality performance having a payment system
                  (by using Stripe API and PayPal API), flexibility to
                  add, edit, delete and update products.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className={classes.TextBox}>
              <i className="fas fa-film" style={{color: "#c50dcf"}}></i>
              <div className={classes.Text}>
                <h4> Video Editor </h4>
                <p>
                  Having +4 years of experience in editing videos
                   professionally using Vegas Pro 17 also a content
                   creator on Instagram with more than 50 videos edited.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default skills;
