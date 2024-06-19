import React from 'react'
import './changepBox.css'

export default function ChangePBox(props) {
  return (
    <div className='updateB'>
    <h1 id='update'>{props.title}</h1>
    <p id='paragraph'>{props.para1}<br/>{props.para2}</p>
    </div>
  )
}
