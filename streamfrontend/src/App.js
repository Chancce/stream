import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'


function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <h1>Watch the Latest Movies!!!</h1>
          <HomeScreen />
        </Container>
        
        
        </main>
      <Footer />


    </div>
  );
}

export default App;