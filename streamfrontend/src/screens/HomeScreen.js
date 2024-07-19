import React , {useState,useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import  Content  from '../components/Content'

function HomeScreen() {
  const [all_shows,setAllShows] = useState([])

  useEffect(()=>{
    async function fetchMoviesShows(){
      const {data}= await axios.get('/api/shows/')
      setAllShows( data)
    }

  fetchMoviesShows()
    


  },[])
  return (
    <div>
        Popular Movies
        <Row>
            {all_shows.map (shows =>(
                <Col key= {shows.uuid} sm={12} md={6} lg={4} xl={3} >
                
                    <Content shows={shows} />

                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen