import React from 'react';
import {withRouter} from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default withRouter(App);
