import React from 'react'
import './playlistres.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";



function Playlistres(props) {
  return (
    <div className='result'> 
    {props.items.map(all=>{
         return <div className='result-min'>
            <div className='itms'><p>{all.item}</p></div>

         <div className='buttons'>
        <div className='check'> <BsFillCheckCircleFill size="1.5em" color=" orangered" /></div>
         <div className='update'><FiEdit  size="1.5em"/></div>
         <div className='delete'><AiFillDelete  size="1.5em"/></div>
         
         </div>
            </div>
    })
    }</div>
  )
}

export default Playlistres