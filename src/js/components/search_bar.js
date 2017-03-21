import React from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCmHD9ETQ7GQ4TQbQvG6MuD5g7Wb_w7HOE';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	        term: ''
	    }
	    this.performSearch = this.performSearch.bind(this);
    }
	performSearch(aTerm) {
		this.setState({term: aTerm});
		YTSearch({'term': aTerm, 'key': API_KEY }, function(data) {
	    	console.log(data)
		});
	}

	render() {
		return (
			<input type="text" placeholder="Your search" 
				value={this.state.term}
				onChange={evt => this.performSearch(evt.target.value)} /> 
		); 
	}
}

export default SearchBar;