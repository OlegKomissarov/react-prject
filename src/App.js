import React, { Component } from 'react';
import './style/main.scss';
// import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
