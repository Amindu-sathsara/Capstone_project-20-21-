import React from 'react'
import "../../components/create/signup.css"
import Upside from '../../components/upside/Upside'
import CCreateForm from '../../components/childProfiles/createChildForm/CCreateForm'

export default function Form() {

  
  return (
    <div>

      <div>
        <Upside title='Create New Child Profile Here...'/>
      </div>

    <div className='third'>
    <br/> 
    <div><CCreateForm/></div>       
    </div>
   </div>
  )
}
