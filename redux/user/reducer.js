const initialState = {loggedIn: false}

import {REGISTER_NEW_USER, VALIDATE_LOGIN} from './actions'

const user = (state=initialState, action) => {
	switch(action.type) {

	case REGISTER_NEW_USER:
		return Object.assign({}, state, {
			id: action.id,
			name: action.name,
			password: action.password,
			email: action.email
		})
	case VALIDATE_LOGIN:
		let loginValid = false
		// TODO: implement Parse authentication
		if (action.password == 'password') {
			loginValid = true
		}
		return Object.assign({}, state, {
			loggedIn: loginValid
		})
	default:
		return state
	}
}

export default user