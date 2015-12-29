import React from 'react'
import {Link} from 'react-router'
import NavBarView from './NavBarView'


export default class App extends React.Component {
	render() {
		return (
			<div>
				Welcome to MarbleTrader! <br />
        <NavBarView/>
        {this.props.children}
			</div>
		)
	}
}
