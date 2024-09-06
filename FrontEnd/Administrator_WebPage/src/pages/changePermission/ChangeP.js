import React from 'react'
import "./changeP.css"
import ChangePBox from '../../components/changepBox/ChangePBox'
import '../home/home.css'
import Upside from '../../components/upside/Upside'
import { useNavigate } from 'react-router-dom'



export default function ChangeP() {

  const navigate = useNavigate ();

  const goToDelete = () =>{
    navigate('/deletion');
  };

  const goToDetails = () =>{
    navigate('/details');
  };

  const goToUpdate = () =>{
    navigate('/update');
  };

  return (

    <div>
      <div>
        <Upside title='Change Permission and Access'/>
      </div>
      <div className="option-boxes-container">
      <div className='box' onClick={goToUpdate}>
     <ChangePBox title='Update User Account' para1='Update user Account'
      para2='and Edit the details'/>
    </div>

    <div className='box' onClick={goToDetails}>
      <ChangePBox title='Get Details' para1='Can get user details' para2='and see informations'/>
    </div>

    <div className='box' onClick={goToDelete}>
      <ChangePBox title='Delete Account' para1='Delete user Accounts' para2='and change the access'/>
    </div>
    </div> 
    
    </div>
  )
}
