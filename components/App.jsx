import React from 'react';
import LoginComponent from './LoginComponent'


export default class App extends React.Component {
  render() {
    return (
      <div>
        Welcome to MarbleTrader! <br />
          <LoginComponent/>
        {this.props.children}
      </div>
    )
  }
}
