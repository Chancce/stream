import React from 'react'
import { Row, Col } from 'react-bootstrap'
import movies_shows from '../movies_shows'
import  Content  from '../components/Content'

function HomeScreen() {
  return (
    <div>
        <h1>Popular Movies</h1>
        <Row>
            {movies_shows.map (content =>(
                <Col key= {content.id} sm={12} md={6} lg={4} xl={3} >
                
                    <Content content={content} />

                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen