import React from 'react';
import {connect} from 'react-redux';
import {logout} from 

export const Profile = React.createClass({

  handleSubmit(e) {
    this.props.dispatch(logout());
  },
  render() {
    return (
    	<div>
    		This is a user profile.
				<button className="btn btn-warning btn-lg glyphicon glyphicon-log-out"  onClick={this.handleSubmit}
				> Logout!</button>
    	</div>
    )
  }
})

export const ProfileContainer = connect()(Profile)