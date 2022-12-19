import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Col,Container,Navbar, Row } from 'react-bootstrap';
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import Playlist from './components/Playlist';

function App() {

  return (
    
    <div className="App">
     <Navbar className='nav-bar' bg="dark">
      <Navbar.Brand >
        <div className='brand-logo'>
        <BsFillCaretRightSquareFill className='logo'/>
        <h3 className='brand-name'>𝓛𝓶𝓾𝓼𝓲𝓬</h3>
        </div>
      </Navbar.Brand>
     </Navbar>
     <center>
     <Container className='body-part'>
      <br/><br/>
     <Row >
      <Col>
      <div className='body-inputs'>
      <Playlist />
      </div>
      </Col>
     </Row>
    </Container>
    </center>
    </div>
    
  );
}

export default App;
