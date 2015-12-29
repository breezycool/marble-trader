import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import user from './user/reducer'

export const reducer = combineReducers({
	routing: routeReducer,
	user
})