import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const VideoView = props => {
    if (!props.video) {
        return null;
    }
    
    const videoId = props.video.id.videoId;
    const src = `https://www.youtube.com/embed/${videoId}`; 

    return (
        <div className="static-modal">
            <Modal show={props.show}>
                <Modal.Header>
                    <Modal.Title>{props.video.snippet.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="500" height="315"
                         src={src}>
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => props.close()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VideoView;
