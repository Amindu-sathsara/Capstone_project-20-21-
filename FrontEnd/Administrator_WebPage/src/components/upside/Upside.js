import React from 'react'
import './upside.css'

export default function Upside(props) {
  return (
    <div className='upside'>
  
    <h1 id='title'>{props.title}</h1>

     <div className='upsidecenter'>
       <img src="\webpage healthcare.jpg" alt='upimage' className='img'/>
     </div>
   </div> 
  )
}
