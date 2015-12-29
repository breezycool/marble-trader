import React from 'react';
import { pushPath } from 'redux-simple-router';
import {connect} from 'react-redux';
import {toggleLogin} from '../redux/user/actions';

export const Profile = React.createClass({

  handleSubmit(e) {
    this.props.dispatch(pushPath('/'));
    this.props.dispatch(toggleLogin());
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