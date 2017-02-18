import React from 'react';
import uid from 'uid';
import Grid from 'react-bootstrap/lib/Grid';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import VideoView from './video_view';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            showModal: false
        }
    }

    openModal(video) {
        console.log(video);
        this.setState({ showModal: true });
    }
    close() {
        this.setState({ showModal: false });
    }

    render() {
        const videoItems = this.props.videos.map(video =>
            <Col xs={6} md={4}>
                <Thumbnail onClick={() => this.openModal(video)}
                    className="thumbnail"
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.description}
                    key={uid()}
                >
                    <h3>{video.title}</h3>
                    <p>{video.snippet.description}</p>
                    <hr />
                    <i>Date: {video.snippet.publishedAt}</i>
                    <VideoView show={this.state.showModal} video={video} close={this.close} />
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
}

export default VideoList;




