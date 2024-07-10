import React from 'react'
import {Container,Nav,Navbar,NavDropdown,Form, Row,Col,Button} from 'react-bootstrap'

function Header() {
  return (
    

    <Navbar expand="lg" bg="dark" className="bg-body-tertiary justify-content-between" >
      <Container>
        <Navbar.Brand href="#home">LocalStreamz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/series">TV Shows</Nav.Link>

        <NavDropdown title="Genres" id="basic-nav-dropdown">
            <NavDropdown.Item href="/action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/comedy">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="/crime">Crime</NavDropdown.Item>
            <NavDropdown.Item href="/drama">Drama</NavDropdown.Item>
            <NavDropdown.Item href="/horror">Horror</NavDropdown.Item>
            <NavDropdown.Item href="/romance">Romanace</NavDropdown.Item>
            <NavDropdown.Item href="/thriller">Thriller</NavDropdown.Item>
        </NavDropdown>
    
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-6"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    


  )
}

export default Header