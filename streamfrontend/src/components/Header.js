import React from 'react'
import {Container,Nav,Navbar,NavDropdown,Form, Row,Col,Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    
<header>
    <Navbar expand="lg" bg="dark" className="bg-body-tertiary justify-content-between" >
    <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>LocalStreamz</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/movies'>
                <Nav.Link>Movies</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/series'>
                <Nav.Link>TV Shows</Nav.Link>
              </LinkContainer>

              <NavDropdown title="Genres" id="basic-nav-dropdown">
                <LinkContainer to='/action'>
                  <NavDropdown.Item>Action</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/comedy'>
                  <NavDropdown.Item>Comedy</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/crime'>
                  <NavDropdown.Item>Crime</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/drama'>
                  <NavDropdown.Item>Drama</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/horror'>
                  <NavDropdown.Item>Horror</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/romance'>
                  <NavDropdown.Item>Romance</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/thriller'>
                  <NavDropdown.Item>Thriller</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <Form inline="true">
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="mr-sm-6"
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
  </header>


  )
}

export default Header