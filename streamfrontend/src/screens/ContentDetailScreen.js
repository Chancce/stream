import React from 'react'
import { Card,Row,Col,Image,ListGroup, ListGroupItem, Container } from 'react-bootstrap'
import { useParams,Link } from "react-router-dom";
import movies_shows from '../movies_shows'
import  VideoPlayer  from '../components/VideoPlayer'
import '../videoPlayer.css'

function ContentDetailScreen() {
  const { id } = useParams()
  const all_shows = movies_shows.find((c) => String(c.id) === id)

  function getRandomVideoLength() {
    const hours = Math.floor(Math.random() * 2); // 0 to 1 hours
    const minutes = Math.floor(Math.random() * 60); // 0 to 59 minutes
    const seconds = Math.floor(Math.random() * 60); // 0 to 59 seconds
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div className="content-detail-container">
      <Link to="/" className="btn btn-light back-button">Back Home</Link>
      <Row>
        <Col md={3}>
          <Image src={all_shows.poster} fluid />
        </Col>
        <Col md={9}>
          <ListGroup>
            <ListGroup.Item className="list-group-item">
              <strong>{all_shows.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item">
              {all_shows.description}
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item">
              IMDB Rating: {all_shows.rating}
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item">
              Genre: {all_shows.genre}
            </ListGroup.Item>
            <ListGroup.Item className="list-group-item">
              Length: {getRandomVideoLength()}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="video-section">
        <Col>
          <VideoPlayer videoSrc={all_shows.media} title={all_shows.name} />
        </Col>
      </Row>
    </div>
  );
}

export default ContentDetailScreen;