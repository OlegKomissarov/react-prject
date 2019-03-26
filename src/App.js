import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './style/main.scss'

import AppHeader from './components/elements/AppHeader'
import MovieTableLayout from './components/layout/MovieTableLayout'
import FavouritesListLayout from './components/layout/FavouritesListLayout'

// TODO: add switch
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <AppHeader/>
          <Route path="/" exact component={MovieTableLayout}/>
          <Route path="/favourites" component={FavouritesListLayout}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
