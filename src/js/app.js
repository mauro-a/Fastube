import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1>Below nr</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));