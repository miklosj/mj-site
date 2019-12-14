import React from 'react';
import FloatBtn from './FloatBtn/FloatBtn';
import classes from './FloatBtnGroup.module.css';
import routes from './../../../utils/routes';

const FloatBtnGroup = (props) => (

  <div className={classes.OuterContainer}>
    <div className={classes.BtnGroup}>
      <FloatBtn to={routes.BLOG}>my blog</FloatBtn>
      <FloatBtn to={routes.ABOUT}>about me</FloatBtn>
      <FloatBtn to={routes.CONTACT}>contact</FloatBtn>
    </div>
  </div>
);

export default FloatBtnGroup;