import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

function Content({content}) {
  const formatTitle = (name) => {
    return name ? name.replace(/ /g, '_') : '';
  }




  return (
    <Card className="my-3 rounded" >
    <Link to={`/${content.uuid}/${formatTitle(content.name)}`}>
    
    <Card.Img src={content.poster} />

    </Link>
    <Card.Body>
    <Link to={`/${content.uuid}/${formatTitle(content.name)}`}>
    <Card.Title as="div" />
    <strong>{content.name}</strong>
    </Link>
    <Card.Text>IMDB Rating: {content.rating}</Card.Text>
    </Card.Body>
    </Card>
  )
}

export default Content