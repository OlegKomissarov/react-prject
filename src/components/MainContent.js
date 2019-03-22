import React, { Component } from 'react';

import ContentHeader from './ContentHeader';
import MovieTable from './MovieTable';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <ContentHeader/>
        <MovieTable/>
      </div>
    );
  }
}

export default MainContent;
