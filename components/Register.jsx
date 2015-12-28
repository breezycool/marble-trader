import React from 'react';

export default class Register extends React.Component {
  // static propTypes = {
  //   onClickHandler: React.propTypes.func.isRequired
  // }
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
          <label>Email: </label>
          <input type="email" ref="email" />
        </div>
        <div>
          <button className="btn btn-warning btn-lg glyphicon glyphicon-user" onClick={this.props.onClickHandler}
          > Register!</button>
        </div>
      </div>
    )
  }
}