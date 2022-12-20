import React,{useState} from 'react'
import './Playlist.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlistres from './Playlistres';

function Playlist() {
    const[value,setvalue]=useState(null)
    const[list,setitemlist]=useState([])

    const Handlevalue=(e)=>{
     setvalue(e.target.value)
    }

    const handleadd=()=>{
     setitemlist([...list,value])
    }
  return (
    
    <div className='input-div'>
        <div className='input-add'>
    <input className='input' type='text' value={value} onChange={Handlevalue} placeholder="Enter a song name" />
    <button className='add-button' onClick={handleadd}>Add</button>
    <div className='added'>
    <Playlistres items={list} />
    </div>
    
    </div>
    <div className='submit-button-div'>
     <button className='submit-button' >Submit</button>
    </div>
      </div>
  )
}

export default Playlist