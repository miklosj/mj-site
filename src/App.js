import React from 'react';
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import routes from './utils/routes';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './containers/Blog/Blog';
import Post from './components/Post/Post';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
            <Route path={routes.BASE} component={Home} exact/>
            <Route path={routes.BLOG} component={Blog} exact/>
            <Route path={routes.ABOUT} component={About}/>
            <Route path={routes.BLOG + routes.POST} component={Post}/>
            <Route path={routes.NOTFOUND} component={NotFound}/>
            <Redirect to={routes.BASE}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
