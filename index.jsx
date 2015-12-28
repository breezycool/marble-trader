require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

/* REDUX */
import {Provider} from 'react-redux'
import {configureStore} from './redux/store'
import DevTools from './redux/devtools'

import Main from './components/Main'
 
export class App extends React.Component {
	render() {
		return (
			<div>
				<Main />
				<DevTools />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider store={configureStore()}>
		<App/>
	</Provider>,
	document.querySelector("#app")
);
