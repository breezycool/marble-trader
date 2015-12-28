import React from 'react';

var fieldValues = {
  name     : null,
  email    : null,
  password : null
}

export default class Register extends React.Component {
  render() {   
      
      let styles = {.container {
                      width: 500px;
                      clear: both;
                      }

             .container-input {
                width: 100%;
                clear: both;
              }
    
    return (

      <div className={styleMap.container}>
        <div>
          <label>Name: </label>
          <input type="text" ref="name" className={styleMap.containerInput} defaultValue={fieldValues.name} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password" className={styleMap.containerInput} defaultValue={fieldValues.password} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref="email" className={styleMap.containerInput} defaultValue={fieldValues.email} />
        </div>
        <div>
          <button className="btn btn-warning btn-lg glyphicon glyphicon-user" onClick={this.onClick}> Register!</button>
        </div>
      </div>
    )
  }
}