import React from 'react';
import { Link } from 'react-router'
import Scene from './3D-Scene/Scene.js'
import NavBar from './NavBar'

export default class App extends React.Component {
	render() {
		return (
			<div>
				Welcome to MarbleTrader! <br />
        <NavBar/>
        {this.props.children}
        <Scene />
			</div>
		)
	}
}
