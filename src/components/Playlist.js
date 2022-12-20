import React,{useState} from 'react'
import './Playlist.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Playlist() {
    const[value,setvalue]=useState(null)

    const Handlevalue=(e)=>{
     setvalue(e.target.value)
    }
  return (
    
    <div className='input-div'>
    <input className='input' type='text' value={value} onChange={Handlevalue} placeholder="Enter a song name" />
    <button className='add-button'>Add</button>
    <div className='submit-button-div'>
     <button className='submit-button'>Submit</button>
    </div>
      </div>
  )
}

export default Playlist