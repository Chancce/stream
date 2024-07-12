import React , {useState,useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import  Content  from '../components/Content'

function HomeScreen() {
  const [movies_shows,setMoviesShows] = useState([])

  useEffect(()=>{
    async function fetchMoviesShows(){
      const {data}= await axios.get('/api/contents/')
      setMoviesShows( data)
    }

  fetchMoviesShows()
    


  },[])
  return (
    <div>
        Popular Movies
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