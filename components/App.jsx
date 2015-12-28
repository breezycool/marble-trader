import React from 'react'
import {Link} from 'react-router'


export default class App extends React.Component {
	render() {
		return (
			<div>
				Welcome to MarbleTrader! <br />
				<Link to='/login'>Login</Link>
			</div>
		)
	}
}
