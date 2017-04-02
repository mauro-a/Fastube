import React from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCmHD9ETQ7GQ4TQbQvG6MuD5g7Wb_w7HOE';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	        term: '',
	        filterBy: ''
	    }
	    this.onInputChange = this.onInputChange.bind(this);
	    this.onFilterChange = this.onFilterChange.bind(this);
    }

    onFilterChange(aFilter) {
    	this.setState({
    		term: '',
    		filterBy: aFilter
    	});
    }

	onInputChange(aTerm, filter) {
		console.log('SEARCHING TERM: ', aTerm, 'WITH FILTER: ', filter , 'SET');
		this.setState({term: aTerm});
		this.props.onSearchPerformed(aTerm);
	}

	resetFilters() {
		this.setState({
    		term: '',
    		filterBy: ''
    	});
    	this.props.onSearchPerformed('PS4', this.state.filterBy);
	}

	render() {
		return (
			<form>
				<input type="text" placeholder="Your search"
					id="inputSearch" 
					value={this.state.term}
					onChange={evt => this.onInputChange(evt.target.value, this.state.filterBy)} /> 
				<label htmlFor="searchBy">Search by</label>
				<select id="searchBy" 
					 onChange={evt => this.onFilterChange(evt.target.value) }> 
					<option value="" selected>All</option>
					<option value="title">Title</option>
					<option value="description">Description</option>
				</select>
				<input type="reset" onClick={() => this.resetFilters()} value="Reset to defaults" />
			</form>
		); 
	}
}

export default SearchBar;
