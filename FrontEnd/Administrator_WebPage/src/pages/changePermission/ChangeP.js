import React from 'react'
import "./changeP.css"
import ChangePBox from '../../components/changepBox/ChangePBox'
import '../home/home.css'
import Upside from '../../components/upside/Upside'


export default function ChangeP() {
  return (

    <div>
      <div>
        <Upside title='Change Permission and Access'/>
      </div>
    <div className='view'>
      <div >
     <ChangePBox title='Update User Account' para1='Update user Account'
      para2='and Edit the details'/>
    </div>

    <div className='getbox'>
      <ChangePBox title='Get Details' para1='Can get user details' para2='and see informations'/>
    </div>

    <div className='deletebox'>
      <ChangePBox title='Delete Account' para1='Delete user Accounts' para2='and change the access'/>
    </div>
    </div> 

    </div>
  )
}
