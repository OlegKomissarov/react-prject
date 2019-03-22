import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src="logo2.png" alt="Not loaded" className="logo__image"/>
        <div className="logo__text">
          Movies
        </div>
      </div>
    );
  }
}

export default Logo;
