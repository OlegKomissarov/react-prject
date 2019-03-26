import React, { Component } from 'react'

import ContentHeader from '../elements/ContentHeader'
import MovieTable from '../movies-table/MovieTable'

class MovieTableLayout extends Component {
  render() {
    return (
      <div className="layout">
        <ContentHeader text="Latest Releases"/>
        <MovieTable/>
      </div>
    )
  }
}

export default MovieTableLayout
