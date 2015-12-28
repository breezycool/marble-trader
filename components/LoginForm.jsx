import React from 'react';

export default class LoginForm extends React.Component {
  render() {      
    return (
      <div>
        <div>
          <label>Name: </label>
          <input type="text" ref="name" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref="password" />
        </div>
        <div>
          <button className="btn btn-warning btn-lg glyphicon glyphicon-log-in" onClick={this.props.onClickHandler}
          > Login!</button>
        </div>
      </div>
    )
  }
}