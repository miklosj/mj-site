import React from 'react';
import styles from './Home.module.scss';
import routes from '../../utils/routes';

import FloatBtn from './FloatBtn/FloatBtn';

const home = (props) => (
  <div className={styles.Container}>
    <div className={styles.BigText}> MIKLÓS JÁSDI</div>
    <div className={styles.SmallText}> Aeronautical Engineer &amp; Data Scientist</div>
    <div className={styles.BtnGroup}>
      <FloatBtn to={routes.BLOG}>my blog</FloatBtn>
      <FloatBtn to={routes.ABOUT}>about</FloatBtn>
    </div>
  </div>
)

export default home;