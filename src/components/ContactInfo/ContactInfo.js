import React, { Component } from 'react';

import classes from './ContactInfo.module.css';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/modal/modal';
import MessageState from '../../components/MessageState/MessageState';
import Spinner from '../../UI/Spinner/Spinner';

import axios from 'axios';

class contactInfo extends Component{

  state = {
    userForm: {
      name:{
        validation: {
          isValid: false,
          errorMessage: '',
          notValidStyle: null
        },
        value: '',
        inputLength: ''
      },
      email:{
        validation: {
          isValid: false,
          errorMessage: '',
          notValidStyle: null
        },
        value: '',
        inputLength: ''
      },
      subject:{
        validation: {
          isValid: false,
          errorMessage: '',
          notValidStyle: null
        },
        value: '',
        inputLength: ''
      },
      message:{
        validation: {
          isValid: false,
          errorMessage: '',
          notValidStyle: null
        },
        value: '',
        inputLength: ''
      }
    },
    loading: false,
    formIsValid: false,
    sendingMessage: false,
    messageState: null
  }

  sendMessageHandler = (event) => {
    event.preventDefault();
    this.setState({...this.state, loading: true, sendingMessage: true});
    if (this.state.formIsValid) {
      const userInfo = {
        name: this.state.userForm.name.value,
        email: this.state.userForm.email.value,
        subject: this.state.userForm.subject.value,
        message: this.state.userForm.message.value
      }
      axios.post("https://emad-website.firebaseio.com/Messages.json", userInfo)
        .then(res => {
          this.setState({...this.state ,loading: false, messageState: "successed"});
        })
        .catch(err => {
          this.setState({...this.state, loading: false, messageState: null});
        })
    }else {
      this.setState({...this.state, loading: false, sendingMessage: true ,messageState: null});
    }
  }

  inputChangedHandler = (event, identify) => {
    let updatedForm = {
      ...this.state.userForm
    };
    let updatedFormElement = {
        ...updatedForm[identify]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.inputLength = event.target.value.length;
    updatedForm[identify] = updatedFormElement;
    switch (identify) {
      case "name":
        this.checkIfValid(event, updatedFormElement);
        this.setState({userForm: updatedForm});
        break;

      case "email":
      var StrObj = event.target.value;
      var emailsArray = StrObj.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
      if (emailsArray != null && emailsArray.length) {
          //has email
          updatedFormElement.validation.notValidStyle = null;
          updatedFormElement.validation.isValid = true;
          updatedForm[identify] = updatedFormElement;
          this.setState({...this.state, userForm: updatedForm});
      }else {
        console.log(this.state);
        updatedFormElement.validation.notValidStyle = classes.InputValidStyle;
        updatedFormElement.validation.isValid = false;
        updatedForm[identify] = updatedFormElement;
        this.setState({...this.state, userForm: updatedForm});
      }
      break;

      case "subject":
      this.checkIfValid(event, updatedFormElement);
      this.setState({userForm: updatedForm});
      break;

      case "message":
      this.checkIfValid(event, updatedFormElement);
      this.setState({userForm: updatedForm});
      break;

      default:
      this.checkIfValid(event, updatedFormElement);
      this.setState({userForm: updatedForm});
    }

    let formIsValid = true;
    for ( let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].validation.isValid && formIsValid;
    }
    this.setState({formIsValid: formIsValid});
  }
  checkIfValid = (event,updateState) => {
    if (event.target.value.length >= 1 && event.target.value.length <= 2) {
      updateState.validation.isValid = false;
      updateState.validation.errorMessage = "Please enter more 5 charcter at least";
    }else if(event.target.value.length === 0) {
      updateState.validation.isValid = false;
    }else {
      updateState.validation.isValid = true;
    }
  }
  showInputNotValid = (event, identify) => {
    let updatedForm = {
      ...this.state.userForm
    };
    let updatedFormElement = {
        ...updatedForm[identify]
    };
      if (!this.state.userForm[identify].validation.isValid) {
        updatedFormElement.validation.notValidStyle = classes.InputValidStyle;
        updatedForm[identify] = updatedFormElement;
        this.setState({...this.state, userForm: updatedForm});
      }else {
        updatedFormElement.validation.notValidStyle = null;
        updatedForm[identify] = updatedFormElement;
        this.setState({...this.state, userForm: updatedForm});
      }
  }
  modalCloseHandler = () => {
    this.setState({ sendingMessage: false });
  }

  render(){
    let messageState = <MessageState type={this.state.messageState}/>;
    if (this.state.loading) {
      messageState = <Spinner />;
    }
    return(
      <section className={classes.ContactInfo}>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <i className="fas fa-mobile-alt"></i>
              <h4> +905535728209 </h4>
              <p> Feel free to contact me :) </p>

              <i className="far fa-envelope"></i>
                <h4> qwe.emad@hotmail.com </h4>
                <p> Don't bother me late at night :D </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div>
              <h2> How Can I Help You? </h2>
              <form>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <input
                      className={this.state.userForm.name.validation.notValidStyle}
                      type="text"
                      placeholder="Name"
                      onChange={(event) => this.inputChangedHandler(event, "name")}
                      onBlur={(event) => this.showInputNotValid(event, "name")}/>
                    <input
                      className={this.state.userForm.email.validation.notValidStyle}
                      type="email"
                      placeholder="Email"
                      onChange={(event) => this.inputChangedHandler(event, "email")}
                      onBlur={(event) => this.showInputNotValid(event, "email")}/>
                    <input
                      className={this.state.userForm.subject.validation.notValidStyle}
                      type="text"
                      placeholder="Subject"
                      onChange={(event) => this.inputChangedHandler(event, "subject")}
                      onBlur={(event) => this.showInputNotValid(event, "subject")}/>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <textarea
                      className={this.state.userForm.message.validation.notValidStyle}
                      placeholder="Message"
                      rows="4" cols="50"
                      onChange={(event) => this.inputChangedHandler(event, "message")}
                      onBlur={(event) => this.showInputNotValid(event, "message")}/>
                  </div>
                </div>
                <Button type="primary" clicked={this.sendMessageHandler}> Send Message </Button>
              </form>
            </div>
          </div>
        </div>
        <Modal show={this.state.sendingMessage} modalClosed={this.modalCloseHandler}>
          {messageState}
        </Modal>
      </section>
  )
}
}
export default contactInfo;
