import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbarInstance';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCmHD9ETQ7GQ4TQbQvG6MuD5g7Wb_w7HOE';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
        var self = this;
        YTSearch({'term': 'ps4', 'key': API_KEY }, function(data) {
            self.setState({
                videos: data
            });
        });
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));