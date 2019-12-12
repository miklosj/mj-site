import React from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import routes from './utils/routes';
import AtcCanvas from './components/AtcCanvas/AtcCanvas';
import About from './components/About/About';
import Blog from './containers/Blog/Blog';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
            <Route path={routes.BASE} component={AtcCanvas} exact/>
            <Route path={routes.BLOG} component={Blog}/>
            <Route path={routes.ABOUT} component={About}/>
            <Route path={routes.CONTACT} component={Contact}/>
            <Redirect to={routes.BASE}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
