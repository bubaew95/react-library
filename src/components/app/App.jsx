import React, { Component } from 'react'
import HomePage from '../../pages/home-page'
import ErrorPage from '../../pages/error-page'
import BooksPage from '../../pages/books-page'
import { connect } from 'react-redux'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import { history } from '../../extends/state'

import Preloader from '../preloader'
import HeaderSection from '../header-section'
import FooterSection from '../footer-section'
import BookViewPage from '../../pages/book-view-page'
import BooksCategory from '../../pages/books-category'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Preloader /> */}
        <HeaderSection />

        <Routers history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/books">
              <Route path="/books" exact component={BooksPage} />
              <Route path="/books/view/:id" component={HomePage} />
              <Route path="/books/:alias/:id" component={BooksPage} />
            </Route>

            <Route component={ErrorPage} />
          </Switch>
        </Routers>

        <FooterSection />
      </React.Fragment>
    )
  }
}

export default connect()(App)
