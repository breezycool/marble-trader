import React from 'react';

export default class Loggedin extends React.Component {
  static propTypes = {
    onClickHandler: React.propTypes.func.isRequired
  }
  render() {      
    return (
      <div>
      	You are logged in.
      	<div>
          <button className="btn btn-warning btn-lg glyphicon glyphicon-log-out" onClick={this.props.onClickHandler}> Logout!</button>
        </div>
      </div>
    )
  }
}