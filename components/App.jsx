import React from 'react';
import { Link } from 'react-router'
import Scene from './3D-Scene/Scene.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
      	Something here <br />
      	<Link to='about'>About</Link> <span> | </span>
      	<Link to='login'>Link</Link>

				{this.props.children}
        <Scene />
      </div>
    )
  }
}
