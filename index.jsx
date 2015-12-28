require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { syncReduxAndRouter } from 'redux-simple-router'
import { createHistory } from 'history'

import { reducer } from './redux/reducer'
import DevTools from './redux/devtools'
import About from './components/About'
import App from './components/App'
import Login from './components/Login'

const createFinalStore = compose(
	DevTools.instrument()
)(createStore)

const configureStore = (initialState) => {
  const store = createFinalStore(reducer);
  return store;
}

export const store = configureStore()
export const history = createHistory()

syncReduxAndRouter(history, store)

class Layout extends React.Component {
  render() {
    return (
      <div>
				<Router history={history}>
					<Route path="/" component={App}>
						<Route path="about" component={About}></Route>
						<Route path="login" component={Login}></Route>
					</Route>
				</Router>
      </div>
    );
  }
}
 
export class DevApp extends React.Component {
	render() {
		return (
			<div>
				<Layout />
				<DevTools />
			</div>
		);
	}
}

export class FullApplication extends React.Component {
	render() {
		return(
			<Provider store={store}>
				<DevApp/>
			</Provider>
		)
	}
}

ReactDOM.render(
	<FullApplication />,
	document.querySelector("#app")
);
