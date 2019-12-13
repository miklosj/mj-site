import React from 'react';
import classes from './FloatBtnGroup.module.css';

const FloatBtnGroup = (props) => {
  return (
    <div className={classes.BtnGroup}>
      <span className={classes.Btn}>continue to blog</span>
      <span className={classes.Btn}>about me</span>
      <span className={classes.Btn}>contact</span>
    </div>
  );
}

export default FloatBtnGroup;