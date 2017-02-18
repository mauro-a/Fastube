import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const VideoView = props => {
    if (!props) {
        return <div>{'Could not load the video'}</div>
    }
    return (
        <div className="static-modal">
            <Modal show={props.show}>
                <Modal.Header>
                    <Modal.Title>{props.video.snippet.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    One fine body...
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.close()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VideoView;
