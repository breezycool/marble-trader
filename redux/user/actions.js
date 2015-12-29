export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const VALIDATE_LOGIN = 'VALIDATE_LOGIN'

export const registerNewUser = (id, user, password, email) => {
	return {
		type: REGISTER_NEW_USER,
		id: id,
		user: user,
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