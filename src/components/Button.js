import React, { Component } from 'react';

class Button extends Component {
  render() {
    // TODO do like here
    const { text, white } = this.props;
    return (
      <div className={`button ${white && 'button--white'}`}>
        {text}
      </div>
    );
  }
}

export default Button;
