import React from 'react'
//import second from 'first'
import { Card } from 'react-bootstrap'

function Content({content}) {
  return (
    <Card className="my-3 rounded" >
    <a href={`/${content.name}`}>
    <Card.Img src={content.poster} />

    </a>
    <Card.Body>
    <a href={`/${content.name}`}>
    <Card.Title as="div" />
    <strong>{content.name}</strong>
    </a>
    <Card.Text>IMDB Rating: {content.rating}</Card.Text>
    </Card.Body>
    </Card>
  )
}

export default Content