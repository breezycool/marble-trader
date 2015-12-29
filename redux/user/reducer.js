const initialState = {loggedIn: false}

import {TOGGLE_LOGIN, SAVE_USERDATA, VALIDATE_LOGIN} from './actions'

const user = (state=initialState, action) => {
	switch(action.type) {

	case TOGGLE_LOGIN:
		return Object.assign({}, state, {
			loggedIn: !state.loggedIn
		})
	case SAVE_USERDATA:
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