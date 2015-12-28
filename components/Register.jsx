import React from 'react';

var fieldValues = {
  name     : null,
  email    : null,
  password : null
}

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <label>Name</label>
        <input type="text" ref="name" defaultValue={fieldValues.name} />
 
        <label>Password</label>
        <input type="password" ref="password" defaultValue={fieldValues.password} />
 
        <label>Email</label>
        <input type="email" ref="email" defaultValue={fieldValues.email} />
 
        <button onClick={this.onClick}>Register</button>
      </div>
    )
  }
}