import React, { Component } from 'react';

import AppHeader from './AppHeader';
import MainContent from './MainContent';

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <AppHeader/>
        <MainContent/>
      </div>
    );
  }
}

export default Layout;
