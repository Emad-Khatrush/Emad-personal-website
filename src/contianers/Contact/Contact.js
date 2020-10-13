import React, { Component } from 'react';

import SubjectTitle from '../../components/SubjectTitle/SubjectTitle';
import ContactInfo from "../../components/ContactInfo/ContactInfo";

class Contact extends Component{

  render(){
    return(
      <div className="container-fluid">
        <SubjectTitle title="Contact" desc="Get in Touch"/>
        <ContactInfo />
      </div>
    )
  }
}
export default Contact;
