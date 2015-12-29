export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
export const SAVE_USERDATA = 'SAVE_USERDATA'
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN'

export const toggleLogin = () => {
	return {
		type: TOGGLE_LOGIN,
	}
}

export const saveUserdata = (id, name, password, email) => {
	return {
		type: SAVE_USERDATA,
		id: id,
		name: name,
		password: password,
		email: email
	}
}

export const validateLogin = (username, password) => {
	return {
		type: VALIDATE_LOGIN,
		username: username,
		password: password
	}
}