import React from 'react';
import {connect} from 'react-redux';
import {registerNewUser} from '../redux/user/actions';
import { pushPath } from 'redux-simple-router';

export const Register = React.createClass({
	// static propTypes = {
	//   onClickHandler: React.propTypes.func.isRequired
	// }
 getInitialState() {
    return {id: 1, name: '', password: '', email: '', registerRejected: false};
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

    function validateEmail(email) 
		{
		    var re = /\S+@\S+\.\S+/;
		    return re.test(email);
		};

    if(name.length<5 || pw.length<5 || !validateEmail(email))
    {	
    	this.setState({registerRejected: true});
    	return;
    };

    this.props.dispatch(registerNewUser(id, name, pw, email));
    this.setState({registerRejected: this.props.registerRejected});

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
				{this.state.registerRejected?
				<div>
					Sorry, but that name is taken. Or maybe you didn't realise that name and password must be 5 or more letters. Or maybe your email isn't valid.
				</div>
					:
				<div>
				</div>
				}
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	return {
		registerRejected: state.user.registerRejected
	}
}

export const RegisterContainer = connect(mapStateToProps)(Register)