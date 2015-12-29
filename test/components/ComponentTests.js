import {expect} from 'chai'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {Register} from '../../components/RegisterContainer'
import ReactDOM from 'react-dom';

describe('Register', () => {

	it('needs a name of at least 5 characters', () => {
		var register = TestUtils.renderIntoDocument(
			<Register />
		);
		expect(register.state.errorValidate).to.equal('');
		// Simulate a click 
		TestUtils.Simulate.click(
			TestUtils.findRenderedDOMComponentWithTag(register, 'button')
		);
		expect(register.state.errorValidate).to.equal('Name must be 5 or more characters.');
	})

	it('has a validateEmail function that works correctly', () => {

	    function validateEmail(email) 
		{
			var re = /\S+@\S+\.\S+/;
			return re.test(email);
		};

		let dummyemail = 'asd@asd.asd';
		let dummyemail2 = 'asd1@.1';
		let dummyemail3 = 'justastring';

		expect(validateEmail(dummyemail)).to.equal(true);
		expect(validateEmail(dummyemail2)).to.equal(false);
		expect(validateEmail(dummyemail3)).to.equal(false);

	})

	it('compares passwords appropriately', () => {

		var register = TestUtils.renderIntoDocument(
			<Register />
		);

		expect(register.state.password).to.equal('');

		expect(register.state.password2).to.equal('');

		register.setState({name:'thisnamehasfiveletters'});
		register.setState({password:'12345'});
		register.setState({password2:'12344'});
		// Simulate a click 
		TestUtils.Simulate.click(
		  TestUtils.findRenderedDOMComponentWithTag(register, 'button')
		);
		expect(register.state.errorValidate).to.equal('Passwords must match.');

	})

})

