import React from 'react';
import TokenInput from './TokenInput/index';
import {uniq, without} from 'lodash-node';

const TagSelect = React.createClass({
	getInitialState() {
		return {
			selected: [],
			options: {}
		};
	},

	handleChange(value) {
		this.setState({
			selected: value
		})
	},

	handleRemove(value) {
		let selectedOptions = uniq(without(this.state.selected,value))
		this.handleChange(selectedOptions)
	},

	handleSelect(value, combobox) {
		if(typeof value === 'string') {
			value = {id: value, name: value};
		}

		let selected = uniq(this.state.selected.concat([value]))
		this.setState({
			selected: selected,
			selectedToken: null
		})

		this.handleChange(selected)
	},

	handleInput(userInput) {
		// this.setState({selectedStateId: null});
		this.filterTags(userInput);
	},

	filterTags(userInput) {
		// this is for the options, because we are not using options as tags so names is an empty array
		let names = [];
		if (userInput === '')
			return this.setState({options: []});
		var filter = new RegExp('^'+userInput, 'i');
		this.setState({options: names.filter(function(state) {
			return filter.test(state.name) || filter.test(state.id);
		})});
	},

	renderComboboxOptions() {
		return this.state.options.map(function(name) {
			return (
				<ComboboxOption
					key={name.id}
					value={name}
				>{name.name}</ComboboxOption>
			);
		});
	},

	render() {
		let selectedFlavors = this.state.selected.map(function(tag) {
			return <li key={tag.id}>{tag.name}</li>
		})

		let options = this.state.options.length ?
			this.renderComboboxOptions() : [];

		return (
			<div>
				<TokenInput
					onChange={this.handleChange}
					onInput={this.handleInput}
					onSelect={this.handleSelect}
					onRemove={this.handleRemove}
					selected={this.state.selected}
					menuContent={options}
				/>
			</div>
		);
	}
})

export default TagSelect