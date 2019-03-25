import React, { Component } from 'react'
import './style/main.scss'

import AppHeader from './components/elements/AppHeader'
import Layout from './components/layout/Layout'
import MovieTableLayout from './components/layout/MovieTableLayout'
import FavouritesListLayout from './components/layout/FavouritesListLayout'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <AppHeader/>
          <Route path="/" component={Layout}>
            <Route path="/" exact component={MovieTableLayout}/>
            <Route path="/favourites" component={FavouritesListLayout} />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
