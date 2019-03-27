import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style/main.scss'

import AppHeader from './components/elements/AppHeader'
import MovieTableLayout from './components/layout/MovieTableLayout'
import FavouritesListLayout from './components/layout/FavouritesListLayout'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <AppHeader/>
          <Switch>
            <Route path="/" exact component={MovieTableLayout}/>
            <Route path="/favourites" component={FavouritesListLayout}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
