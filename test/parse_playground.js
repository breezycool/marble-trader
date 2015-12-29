import {expect} from 'chai'
import {Parse} from 'parse/node'

describe('Parse playground', () => {
	beforeEach(() => {
		Parse.initialize('ETtqncNDreunvRT5FRdhC3a76GsDQura7kPLddb3', 'l7qPU76a6i5PNzGS2TAQUvjbfsds8kP3Qsl2jwOl')
	})

	// TODO: learn Promise-based testing through this file
	it('can add a new user', () => {
		let user = new Parse.User()
		user.set('username', 'Lachie')
		user.set('password', 'password')
		user.set('email', 'lachlankermode@live.com')

		user.signUp(null, {
			success: function(user) {
				console.log("Signed up "+user.get('username'))
			},
			error: function(user, error) {
				console.log(user.get('username')+" is already signed up.")
			}
		})

	})

	it('can lookup users', () => {
		let query = new Parse.Query(Parse.User)
		query.find({
		  success: function(users) {
		 		let foundUsers = []
		    for (var i = 0; i < users.length; ++i) {
		      foundUsers.push(users[i].get('username'))
		    }
		    console.log(foundUsers.length+" users: "+foundUsers)
		  }
		})
	})
})
