import React from 'react';
const buttonStyles = {margin: '0.3em', borderRadius: '24px'};

export const LoginRegister = React.createClass({

	getDefaultProps() {
		return {
			backgroundColor: "#FFF",
		}
	},

	render() {
		return (
			<div class='btn-group'>
					<button style={buttonStyles}
					className="btn btn-success btn-lg glyphicon glyphicon-log-in"
					onClick={this.props.onClickLogin}
					> Log in!</button>
					<button style={buttonStyles} 
					className="btn btn-success btn-lg glyphicon glyphicon-user"
					onClick={this.props.onClickSignup}
					> Sign up!</button>
			</div>
		);
	}
})

export default LoginRegister