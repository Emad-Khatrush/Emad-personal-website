import React from 'react';
import classes from './Info.module.css';
import Button from '../../../UI/Button/Button';

const info = () => {
  return(
    <div className={classes.Info}>
        <h4> Full-Stack Web Developer </h4>
        <h1> Emad Khatrush </h1>
        <p> Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu. </p>
        <Button type="primary"> Download CV </Button>
        <Button type="secondary"> Contact </Button>
    </div>
  )
}
export default info;
