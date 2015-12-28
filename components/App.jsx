import React from 'react'
import {Link} from 'react-router'
import NavBar from './NavBar'


export default class App extends React.Component {
	render() {
		return (
			<div>
				Welcome to MarbleTrader! <br />
        <NavBar/>
        {this.props.children}
			</div>
		)
	}
}
