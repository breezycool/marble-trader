import React from 'react';
import { Link } from 'react-router'
import Scene from './3D-Scene/Scene.js'
import NavBarView from './NavBarView'

export default class App extends React.Component {
	render() {
		// TODO: at the moment only NavBar or Scene is valid.
		// We need to modularize the routing out to switch
		// between Scene and Navbar eventually, or bracket
		// them both in some other component.
		return (
			<div>
				Welcome to MarbleTrader! <br />
        <NavBarView/>
        {this.props.children}
        <Scene />
			</div>
		)
	}
}
