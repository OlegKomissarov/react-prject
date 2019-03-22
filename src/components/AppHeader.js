import React, { Component } from 'react';

import Logo from './Logo';
import Button from './Button';

class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <Logo/>
        {/*TODO: Make router and change this*/}
        <a href="http://localhost:3000/">
          <Button text="My account" white/>
        </a>
      </div>
    );
  }
}

export default AppHeader;
