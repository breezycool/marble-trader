import {expect} from 'chai'
import {createStore} from 'redux'
import user from '../redux/user/reducer'
import {toggleLogin, saveUserdata} from '../redux/user/actions'


describe('user reducer', () => {

	let store

	beforeEach(function(){
		store = createStore(user)
		store.dispatch({type:'INITIALIZER'})
	})

	it('has initial state loggedIn false', () => {
		let state = store.getState()
		expect(state).to.contain({loggedIn: false})
	})

	it('handles TOGGLE_LOGIN', () => {
		store.dispatch(toggleLogin())
		let state = store.getState()
		expect(state).to.contain({loggedIn: true})
	})

	it('handles SAVE_USERDATA', () => {
		store.dispatch(saveUserdata(1, 'lachie', 'password', 'lachlankermode@live.com'))
		let state = store.getState()
		expect(state).to.contain({
			id: 1,
			name: 'lachie',
			password: 'password',
			email: 'lachlankermode@live.com'
		})
	})
})
