import React, { Component } from 'react';

import SubjectTitle from '../../components/SubjectTitle/SubjectTitle';
import ContactInfo from "../../components/ContactInfo/ContactInfo";

import Footer from '../../components/Footer/Footer';
import Aux from '../../HOC/Auxiliary';

import classes from './Contact.module.css';

class Contact extends Component{

  render(){
    return(
      <Aux>
        <div className={`${classes.Contact} container-fluid`}>
          <SubjectTitle title="Contact" desc="Get in Touch"/>
          <ContactInfo />
        </div>
        <Footer />
      </Aux>
    )
  }
}
export default Contact;
