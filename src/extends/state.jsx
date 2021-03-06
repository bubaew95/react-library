import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducers } from '../reducers'

const history = createBrowserHistory()
const histMiddleware = routerMiddleware(history)

const compose = composeWithDevTools({})
const middleware = compose(applyMiddleware(histMiddleware, thunk))

const store = createStore(reducers, middleware)

export { store, history }
