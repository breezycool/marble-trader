import {REGISTER_NEW_USER, VALIDATE_LOGIN} from './actions'

const initialState = {loggedIn: false}

const user = (state=initialState, action) => {
	switch(action.type) {

	case REGISTER_NEW_USER:
		if (action.user == 'existing-user') {
			return Object.assign({}, state, {
				registerRejected: true
			})
		} else {
			return Object.assign({}, state, {
				id: action.id,
				user: action.user,
				password: action.password,
				email: action.email
			})
		}
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