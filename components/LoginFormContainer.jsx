import React from 'react';
import {connect} from 'react-redux';
import {validateLogin} from '../redux/user/actions';
import { pushPath } from 'redux-simple-router';


export const LoginForm = React.Component ({

 getInitialState() {
    return {name: '', password: ''};
  },
  handleSubmit(e) {
    const name = this.state.name.trim();
    const pw = this.state.password.trim();
    
    this.props.dispatch(validateLogin(name, pw));
    this.props.dispatch(pushPath('/profile'));
  },
  render() {      
    return (
      <div>
        <div>
          <label>Name: </label>
          <input type="text" ref="name" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password" />
        </div>
        <div>
          <button className="btn btn-warning btn-lg glyphicon glyphicon-log-in" onClick={this.handleSubmit}
          > Login!</button>
        </div>
      </div>
    )
  }
})

export const LoginFormContainer = connect()(LoginForm)