import React from 'react';
import uid from 'uid';
import Grid from 'react-bootstrap/lib/Grid';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const VideoList = props => {
    const videoItems = props.videos.map((video) =>
        <Col xs={6} md={4}>
            <Thumbnail onClick={() => alert('Hi!')}
                className="thumbnail"
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.description}
                key={uid()}
            >
                <h3>{video.title}</h3>
                <p>{video.snippet.description}</p>
                <hr/>
                <i>Date: {video.snippet.publishedAt}</i> 
             </Thumbnail>
        </Col>
    );
    return (
        <Grid>
            <Row>
              {videoItems}
            </Row>
        </Grid>
    );
}

export default VideoList;




