import React, { Fragment } from 'react';
import FloatBtnGroup from './FloatBtnGroup/FloatBtnGroup';
import styles from './Home.module.css';

const home = (props) => (
  <Fragment>
    <div className={styles.BigText}> MIKLÓS JÁSDI</div>
    <div className={styles.SmallText}> Aeronautical Engineer &amp; Data Scientist</div>
    <FloatBtnGroup/>
  </Fragment>
)

export default home;