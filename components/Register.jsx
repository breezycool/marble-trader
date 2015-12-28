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
        <div>
          <label>Name: </label>
          <input type="text" ref="name" defaultValue={fieldValues.name} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password" defaultValue={fieldValues.password} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref="email" defaultValue={fieldValues.email} />
        </div>
        <div>
          <button className="btn btn-warning btn-lg glyphicon glyphicon-user" onClick={this.onClick}> Register!</button>
        </div>
      </div>
    )
  }
}