import React from 'react'
import './playlistres.css'
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";



function Playlistres(props){


const handledel=key=>{
const newlist=props.items.filter(all=>{
    return all.key !== key;

    
});
props.setitemlistmeto(newlist);
}






  return (
    <div className='result'> 
    {props.items.map(all=>{
         return <div className='result-min'>
            
            <div className='itms'><p>{all.item}</p></div>

         <div className='buttons'>
        <div className='check'> <BsFillCheckCircleFill size="1.5em" color=" orangered" /></div>
         <div className='delete'><AiFillDelete onClick={()=>handledel(all.key)}  size="1.5em"/></div>
         
         </div>
            </div>
    })
    }</div>
  )
}

export default Playlistres