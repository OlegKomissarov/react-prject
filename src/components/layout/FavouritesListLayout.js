import React, { Component } from 'react'

import ContentHeader from '../elements/ContentHeader'
import FavouritesList from '../favourites-list/FavouritesList'

class FavouritesListLayout extends Component {
  render() {
    return (
      <div className="layout layout--favourite-page">
        <ContentHeader text="My favourite"/>
        <FavouritesList/>
      </div>
    )
  }
}

export default FavouritesListLayout
