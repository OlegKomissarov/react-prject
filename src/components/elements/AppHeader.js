import React, { Component } from 'react'

import Logo from './Logo'
import Button from './Button'
import { Link } from 'react-router-dom'

class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <Logo/>
        <Link to="/favourites">
          <Button text="My account" white/>
        </Link>
      </div>
    )
  }
}

export default AppHeader
