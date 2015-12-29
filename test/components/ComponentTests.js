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
})