import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbarInstance';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import ValidateJSON from './components/validateJSON';

const API_KEY = 'AIzaSyCmHD9ETQ7GQ4TQbQvG6MuD5g7Wb_w7HOE';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.filterVideosByTerm = this.filterVideosByTerm.bind(this);
        this.state = {
            videos: []
        }
        var self = this;
        YTSearch({'term': 'PS4', 'key': API_KEY }, function(data) {
            self.setState({
                videos: data
            });
        });
    }
    
    filterVideosByTerm(term, filter) {
        var self = this;

        let options = {
            part: filter || 'snippet'
        };
        YTSearch({'term': term, 'key': API_KEY, 'params': options }, function(data) {
            self.setState({
                videos: data
            });
        });
    }

    render() {
        return (
            <div>
                <ValidateJSON />
                <SearchBar onSearchPerformed={(term, filter) => this.filterVideosByTerm(term, filter) } />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));