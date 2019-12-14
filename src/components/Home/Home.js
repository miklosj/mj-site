import React from 'react';
import AtcCanvas from './../AtcCanvas/AtcCanvas';
import Aux from './../../hoc/Aux/Aux';
import FloatBtnGroup from './FloatBtnGroup/FloatBtnGroup';
import styles from './Home.module.css';

const home = (props) => (
  <Aux>
    <AtcCanvas></AtcCanvas>
    <div className={styles.BigText}> MIKLÓS JÁSDI</div>
    <div className={styles.SmallText}> Aeronautical Engineer &amp; Data Scientist</div>
    <FloatBtnGroup/>
  </Aux>
)

export default home;