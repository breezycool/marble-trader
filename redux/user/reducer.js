const initialState = {loggedIn: false}

import {TOGGLE_LOGIN, SAVE_USERDATA} from './actions'

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
		default:
			return state
	}
}

export default user