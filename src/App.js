import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from 'react-bootstrap';
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
      <br/>
      <div className='body-part'>
        <br></br>
      <div className='header'> <h3 className='title'>ADD Fav Playlist</h3></div>
      <div className='body-inputs'>
      <Playlist />
      </div>
     </div>
    </center>
    </div>
    
  );
}

export default App;
