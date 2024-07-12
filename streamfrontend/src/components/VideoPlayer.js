import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../videoPlayer.css';

const VideoPlayer = ({ videoSrc, title }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
  
    const handlePlayPause = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
  
    const handleFullscreen = () => {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    };
  
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col >
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className={`video-container ${isFullscreen ? 'fullscreen-video' : ''}`}>
                  <video ref={videoRef} controls width="100%">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!isPlaying && (
                    <div className="play-button" onClick={handlePlayPause}>
                      ▶
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default VideoPlayer;