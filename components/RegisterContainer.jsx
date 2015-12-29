import React from 'react';
import {connect} from 'react-redux';
import {toggleLogin, saveUserdata} from '../redux/user/actions';
import { pushPath } from 'redux-simple-router';

export const Register = React.createClass({
	// static propTypes = {
	//   onClickHandler: React.propTypes.func.isRequired
	// }
 getInitialState() {
    return {id: 1, name: '', password: '', email: ''};
  },
  nameChange(e) {
    this.setState({name: e.target.value});
  },
  pwChange(e) {
    this.setState({password: e.target.value});
  },
  emailChange(e) {
    this.setState({email: e.target.value});
  },
  handleSubmit(e) {
  	const id = this.state.id
    const name = this.state.name.trim();
    const pw = this.state.password.trim();
    const email = this.state.email.trim();
    
    this.props.dispatch(toggleLogin());
    this.props.dispatch(saveUserdata(id, name, pw, email));
    this.props.dispatch(pushPath('/profile'));
  },
	render() {      
		return (
			<div>
				<div>
					<label>Name: </label>
					<input type="text" onChange={this.nameChange}/>
				</div>
				<div>
					<label>Password: </label>
					<input type="password" onChange={this.pwChange} />
				</div>
				<div>
					<label>Email: </label>
					<input type="email" onChange={this.emailChange} />
				</div>
				<div>
					<button className="btn btn-warning btn-lg glyphicon glyphicon-user"  onClick={this.handleSubmit}
					> Register!</button>
				</div>
			</div>
		)
	}
})

export const RegisterContainer = connect()(Register)