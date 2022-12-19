import React,{useState} from 'react'
import './Playlist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Playlist() {
    const[value,setvalue]=useState(null)

    const Handlevalue=(e)=>{
     setvalue(e.target.value)
    }
  return (
    <div className='input-div'>
    <input className='input' type='text' value={value} onChange={Handlevalue} placeholder="Enter a song name" />
    <Button >Add</Button>
    <div>
     <Button variant='outline-danger'>Submit</Button>
    </div>
      </div>
  )
}

export default Playlist