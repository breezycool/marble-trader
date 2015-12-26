import React from 'react';
import {connect} from 'react-redux'

import {toggleEdit, saveText} from '../redux/actions'

import {ParagraphBoxContainer} from './ParagraphBox'

export const ParagraphList = React.createClass({
	render() {
		console.log('rerendered paragraph list')
		return (
			<div>
			{Object.keys(this.props.paragraphs).map((index) => {

				return <ParagraphBoxContainer
					key={index}
					index={parseInt(index)}
					paragraph={this.props.paragraphs[index].paragraph}
				/>
			})}
			</div>
		)
	}
})

const mapStateToProps = (state) => {
	return {
		paragraphs: state.paragraphs
	}
}

export const ParagraphListContainer = connect(mapStateToProps)(ParagraphList)