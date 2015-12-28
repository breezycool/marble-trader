import React from 'react';
import Login from './Login'


export default class App extends React.Component {
  render() {
    return (
      <div>
        Welcome to MarbleTrader! <br />
          <Login/>
        {this.props.children}
      </div>
    )
  }
}
