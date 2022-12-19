import React,{useState} from 'react'
import './Playlist.css'

function Playlist() {
    const[value,setvalue]=useState(null)

    const Handlevalue=(e)=>{
     setvalue(e.target.value)
    }
  return (
    <div className='input-div'>
    <input className='input' type='text' value={value} onChange={Handlevalue} placeholder="Enter a song name" />
    <button>Add</button>
    <div>
     <button>Submit</button>
    </div>
      </div>
  )
}

export default Playlist