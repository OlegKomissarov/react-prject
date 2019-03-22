import React, { Component } from 'react'

import AppHeader from './AppHeader'
import MainContent from './MainContent'

//TODO: Make small components like functions not classes
//TODO: Ставить точки с запятой(((((
//TODO: юзать это https://www.npmjs.com/package/react-redux и это https://www.npmjs.com/package/redux
class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <AppHeader/>
        <MainContent/>
      </div>
    )
  }
}

export default Layout
