import React from 'react';
import {connect} from 'react-redux'
import {toggleEdit} from '../redux/actions'


export class EditBox extends React.Component {
	render() {
		let showing = (
			<div>
				<textarea name="edit" id="edit" cols="30" rows="10">
				</textarea>
				<div>
					<button 
						className="btn btn-secondary glyphicon glyphicon-trash"
						onClick={this.props.onClick}
					>Save</button>
				</div>
			</div>
		);
		return (
			<div>
				{this.props.visible ? showing : ""}
			</div>	
		);
	}
}

const mapStateToProps = (state) => {
	return {
		visible: state.isEditing
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(toggleEdit())
		}
	}
}

export const EditBoxContainer = connect(mapStateToProps, mapDispatchToProps)(EditBox)