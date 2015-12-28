import {expect} from 'chai'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import NavBar from '../components/NavBar'
import Link from 'react-router'

describe('NavBar', () => {
	it('renders appropriately', () => {
		const nav = TestUtils.renderIntoDocument(<NavBar />)
		expect(nav).to.exist

		const div = TestUtils.findRenderedDOMComponentWithTag(nav, 'div')
		expect(TestUtils.isDOMComponent(div)).to.equal(true)
	})
})