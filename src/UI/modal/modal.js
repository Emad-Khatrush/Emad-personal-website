import React, { Component } from 'react';
import classes from './modal.module.css';
import Aux from '../../HOC/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class modal extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return this.props.show !== nextProps.show || nextProps.children !== this.props.children;
  }


  render(){
    return(
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
}
export default modal;
