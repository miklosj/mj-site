import React from 'react';
import AtcCanvas from './../AtcCanvas/AtcCanvas';
import Aux from './../../hoc/Aux/Aux';
import FloatBtnGroup from './FloatBtnGroup/FloatBtnGroup';
import classes from './Home.module.css';

const home = (props) => (
  <Aux>
    <AtcCanvas></AtcCanvas>
    <div className={classes.BigText}> MIKLÓS JÁSDI</div>
    <div className={classes.SmallText}> Aeronautical Engineer &amp; Software Developer</div>
    <FloatBtnGroup/>
  </Aux>
)

export default home;