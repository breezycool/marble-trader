import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import initial from './initialReducer'

export const reducer = combineReducers({
	routing: routeReducer,
	initial
})