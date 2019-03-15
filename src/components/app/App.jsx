import React, { Component } from 'react'
import ErrorPage from '../../pages/error-page'
import { connect } from 'react-redux'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import { history } from '../../extends/state'
import Preloader from '../preloader'
import HeaderSection from '../header-section'
import FooterSection from '../footer-section'
import pageRouters from '../../extends/routers'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Preloader /> */}
        <HeaderSection />

        <Routers history={history}>
          <Switch>
            {pageRouters.map((prop, key) => {
              return (
                <Route
                  exact={prop.exact}
                  key={key}
                  path={prop.path}
                  component={prop.component}
                />
              )
            })}
            <Route component={ErrorPage} />
          </Switch>
        </Routers>

        <FooterSection />
      </React.Fragment>
    )
  }
}

export default connect()(App)
