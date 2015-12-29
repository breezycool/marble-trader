import React from 'react';
import { Link } from 'react-router'
import {connect} from 'react-redux'

const NavBar = React.createClass({
  render() {
    return (
      <div>
       {this.props.loggedIn
					? 
		<div>
	         <Link className="btn btn-success btn-lg glyphicon glyphicon-user" to='profile'> Profile!</Link> <span> </span> 
	         <Link className="btn btn-info btn-lg glyphicon glyphicon-info-sign" to='about'> About</Link>
        </div>
					: 
		<div>
	         <Link className="btn btn-success btn-lg glyphicon glyphicon-log-in" to='login'> Login!</Link> <span> </span>
	         <Link className="btn btn-success btn-lg glyphicon glyphicon-user" to='register'> Register!</Link> <span> </span> 
	         <Link className="btn btn-info btn-lg glyphicon glyphicon-info-sign" to='about'> About</Link>
        </div>
		}
      </div>
    )
  }
})


const mapStateToProps = (state) => {
	return {
		loggedIn: state.user.loggedIn
	}
}

export const NavBarContainer = connect(mapStateToProps)(NavBar)
