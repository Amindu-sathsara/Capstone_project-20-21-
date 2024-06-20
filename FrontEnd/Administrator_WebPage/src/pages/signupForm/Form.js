import React from 'react'
import Signup from '../../components/create/Signup'
import "../../components/create/signup.css"
import Upside from '../../components/upside/Upside'

export default function Form() {

  
  return (
    <div>

      <div>
        <Upside title='Create New Accounts for Users'/>
      </div>

    <div className='third'>
    <br/>
    <div className='sign'><Signup/>
    </div>          
    </div>
   </div>
  )
}
