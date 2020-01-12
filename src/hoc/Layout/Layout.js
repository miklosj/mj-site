import React, { Component} from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import AtcCanvas from '../../components/AtcCanvas/AtcCanvas';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({showSideDrawer: !prevState.showSideDrawer}));
  }

  render = () => (
    <Aux>
      <Toolbar
        drawerToggle={this.sideDrawerToggleHandler}
        drawerClose={this.sideDrawerClosedHandler}/>
      <SideDrawer
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler}/>
      <main>
        <AtcCanvas></AtcCanvas>
        {this.props.children}
      </main>
    </Aux>
  );
}

export default Layout;
