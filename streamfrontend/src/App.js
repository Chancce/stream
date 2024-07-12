import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ContentDetailScreen from './screens/ContentDetailScreen'


function App() {
  return (
    <Router className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>Watch the Latest Movies!!!</h1>
          <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          ::TODO add_category_for_routing
          <Route path="/:id/:name" element={<ContentDetailScreen />} exact />
          </Routes>
          
        </Container>
        
        
        </main>
      <Footer />


    </Router>
  );
}

export default App;
