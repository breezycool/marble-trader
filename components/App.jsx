import React from 'react';
import { Link } from 'react-router'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Something here <br />
         <Link className="btn btn-success btn-lg glyphicon glyphicon-log-in" to='about'> Login!</Link> <span> | </span>
         <Link className="btn btn-success btn-lg glyphicon glyphicon-user" to='login'> Register!</Link> <span> | </span> 
         <Link className="btn btn-info btn-lg glyphicon glyphicon-user" to='login'> About</Link>
        {this.props.children}
      </div>
    )
  }
}
