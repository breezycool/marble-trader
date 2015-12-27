import React from 'react';
import TagSelect from './TagSelect.jsx'

export const DisplayBox = React.createClass({

	getDefaultProps() {
		return {
			backgroundColor: "#FFF",
			height: "100%",
			width: "45%",
			margin: "8px"
		}
	},

	render() {
		return (
			<div>
				<div>
					{this.props.text}
				</div>	
				<div>
					<button style={{margin: '0.2em'}}
						className="btn btn-primary glyphicon glyphicon-pencil"
						onClick={this.props.onClickHandler}
					> Edit</button>
					<button style={{margin: '0.2em'}} className="btn btn-danger glyphicon glyphicon-trash"
						onClick={this.props.onClickRemoveHandler}
					> Remove</button>
				</div>
				<div>
					<TagSelect/>
				</div>	
			</div>
		);
	}
})

export default DisplayBox
