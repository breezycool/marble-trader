export const TOGGLE_LOGIN = 'TOGGLE_LOGIN'

export const toggleLogin = (id) => {
	return {
		type: TOGGLE_LOGIN,
		id: id
	}
}