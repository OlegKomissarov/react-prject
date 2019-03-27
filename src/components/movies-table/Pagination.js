import React, { Component } from 'react'
import config from '../../config'

class Pagination extends Component {

  state = { page: this.props.page }

  changePage(page) {
    if (this.state.page !== page && page >= 1 && page <= config.pagesLength) {
      this.setState({page})
      this.props.changePage(page)
    }
  }

  render() {
    const { page } = this.state
    return (
      <div className="pagination">
        <div className="pagination__block">
          <div onClick={this.changePage.bind(this, 1)}
               className="pagination__button pagination__button--blue"
          >
            First
          </div>
          <div onClick={this.changePage.bind(this, page - 1)} className="pagination__button">
            Prev
          </div>
          {
            page === config.pagesLength && config.pagesLength > 2 &&
            <div onClick={this.changePage.bind(this, page - 2)} className="pagination__button">
              ...
            </div>
          }
          {
            page > 1 &&
            <div onClick={this.changePage.bind(this, page - 1)} className="pagination__button">
              {page - 1}
            </div>
          }
          <div onClick={this.changePage.bind(this, page)}
               className="pagination__button pagination__button--blue pagination__button--active"
          >
            {page}
          </div>
          {
            page < config.pagesLength &&
            <div onClick={this.changePage.bind(this, page + 1)} className="pagination__button">
              {page + 1}
            </div>
          }
          {
            page === 1 && config.pagesLength > 2 &&
            <div onClick={this.changePage.bind(this, page + 2)} className="pagination__button">
              ...
            </div>
          }
          <div onClick={this.changePage.bind(this, page + 1)} className="pagination__button">
            Next
          </div>
          <div onClick={this.changePage.bind(this, config.pagesLength)}
               className="pagination__button pagination__button--blue"
          >
            Last
          </div>
        </div>
      </div>
    )
  }
}

export default Pagination
