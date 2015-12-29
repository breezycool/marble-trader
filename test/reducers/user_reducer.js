import {expect} from 'chai'
import {createStore} from 'redux'
import user from '../../redux/user/reducer'
import {toggleLogin, registerNewUser, validateLogin} from '../../redux/user/actions'


describe('user reducer', () => {

	let store

	beforeEach(function(){
		store = createStore(user)
		store.dispatch({type:'INITIALIZER'})
	})

	it('initially has loggedIn set to false', () => {
		let state = store.getState()
		expect(state).to.contain({loggedIn: false})
	})

	describe('REGISTER_NEW_USER', () => {
		it('registers a new user with parse', () => {
			//TODO:
		})

		it('rejects registering of existing users', () => {
			store.dispatch(registerNewUser(1, 'existing-user', 'password', 'lachlankermode@live.com'))
			// TODO: test with Parse login
			let state = store.getState()
			expect(state).to.contain({
				registerRejected: true
			})
		})

		it('updates user credentials in state', () => {
			store.dispatch(registerNewUser(1, 'lachie', 'password', 'lachlankermode@live.com'))
			let state = store.getState()
			expect(state).to.contain({
				id: 1,
				user: 'lachie',
				password: 'password',
				email: 'lachlankermode@live.com'
			})
		})

	})

	it('handles VALIDATE_LOGIN', () => {
		store.dispatch(validateLogin('lachie', 'password'))
		// TODO: real testing with a Parse login
		let state = store.getState()
		expect(state).to.contain({
			loggedIn: true
		})
	})
})