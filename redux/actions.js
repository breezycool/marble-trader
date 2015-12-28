export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
export const SAVE_USERDATA = 'SAVE_USERDATA'

export const toggleLogin = (id) => {
	return {
		type: TOGGLE_LOGIN,
		id: id
	}
}

export const saveUserData = (id, name, password, email) => {
	return {
		type: SAVE_USERDATA,
		id: id,
		name: name,
		password: password,
		email: email
	}
}