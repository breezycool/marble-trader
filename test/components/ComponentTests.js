import {expect} from 'chai'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import Register from '../../components/RegisterContainer'

describe('NavBar', () => {
	it('has no tests', () => {
	})
})

describe('Register', () => {

	it('needs a name of at least 5 characters', () => {

	var register = ReactTestUtils.renderIntoDocument(
      <Register />
    );

    var registerNode = ReactDOM.findDOMNode(register);

    expect(checkboxNode.state.errorValidate).toEqual('');

       // Simulate a click and verify that it is now On
    ReactTestUtils.Simulate.click(
      ReactTestUtils.findRenderedDOMComponentWithTag(register, 'button')
    );

    expect(checkboxNode.state.errorValidate).toEqual('Name must be 5 or more characters.');

	})
})