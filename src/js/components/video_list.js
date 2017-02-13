import React from 'react';
import uid from 'uid';

const VideoList = props => {
    const videoItems = props.videos.map((video) => 
        <li key={uid()}>
            {video.snippet.channelTitle}
        </li>
    );
    return (
        <div>
            <h2>List of channel names!</h2>
            <ul>{videoItems}</ul>
        </div>
    );
}

export default VideoList;