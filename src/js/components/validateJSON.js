import React from 'react';
import Validator from '../helpers/Validator';

class ValidateJSON extends React.Component {

	constructor(props) {
		super(props);
		this.selectorChange = this.selectorChange.bind(this);
		this.operatorChange = this.operatorChange.bind(this);
		this.valueChange = this.valueChange.bind(this);

		this.state = {
			selector: '',
			operator: '',
			value: ''
		}
	}

	selectorChange(selector) {
		this.setState({
			selector
		});
	}

	operatorChange(operator) {
		this.setState({
			operator
		});
	}

	valueChange(value) {
		this.setState({
			value
		});
	}

	render() {
		const currentData = {
			id: 1,
			salutation: 'Hello!',
			mail: 'mauro.a89x@gmail.com',
			age: 28,
			type: 'EMAIL',
			address: {
				street: 'Muzio 26',
				city: 'Trelew',
				phone: '2804649854'
			}
		};

		const jsonString = JSON.stringify(currentData);
		return (
			<div>
				<label htmlFor="inputSelector">Selector</label>
				<input type="text" id="inputSelector"
					onChange={evt => this.selectorChange(evt.target.value)} />
				<label htmlFor="operatorSelect">Operator</label>
				<select id="operatorSelect"
					onChange={evt => this.operatorChange(evt.target.value)}>
				  <option value="" selected>None</option>
				  <option value="EQUAL">EQUAL</option>
				  <option value="NOT EQUAL">NOT EQUAL</option>
				</select>
				<label htmlFor="operatorSelect">Value</label>
				<input type="text" 
					onChange={evt => this.valueChange(evt.target.value)}
					id="operatorSelect" />
				<br />
				<input type="button" value="Validate" 
					onClick={() => Validator(this.state.selector,this.state.operator, this.state.value, jsonString)} />	
			</div>
		);
	}
}

export default ValidateJSON;