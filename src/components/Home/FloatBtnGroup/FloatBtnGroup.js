import React from 'react';
import FloatBtn from './FloatBtn/FloatBtn';
import styles from './FloatBtnGroup.module.css';
import routes from './../../../utils/routes';

const FloatBtnGroup = (props) => (

  <div className={styles.OuterContainer}>
    <div className={styles.BtnGroup}>
      <FloatBtn to={routes.BLOG}>my blog</FloatBtn>
      <FloatBtn to={routes.ABOUT}>about</FloatBtn>
    </div>
  </div>
);

export default FloatBtnGroup;