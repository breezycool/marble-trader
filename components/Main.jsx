import React from 'react';
import LoginRegister from './LoginRegister.js';

export default class Main extends React.Component {

  render() {
    return (
    	<div>
          <div>This is MarbleTrader</div>
          <LoginRegister/>
        </div>
    );
  }
}