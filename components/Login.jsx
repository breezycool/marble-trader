import React from 'react';
import { Link } from 'react-router'

export default class Login extends React.Component {
  render() {
    return (
      <div>
         <Link className="btn btn-success btn-lg glyphicon glyphicon-log-in" to='login'> Login!</Link> <span> | </span>
         <Link className="btn btn-success btn-lg glyphicon glyphicon-user" to='register'> Register!</Link> <span> | </span> 
         <Link className="btn btn-info btn-lg glyphicon glyphicon-info-sign" to='about'> About</Link>
      </div>
    )
  }
}
