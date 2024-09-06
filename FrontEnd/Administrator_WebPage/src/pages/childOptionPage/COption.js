import React from 'react'
import Upside from '../../components/upside/Upside'
import ChangePBox from '../../components/changepBox/ChangePBox'
import { useNavigate } from 'react-router-dom';

export default function COption() {

    const navigate = useNavigate ();

  const goToDelete = () =>{
    navigate('/cDelete');
  };

  const goToUpdate = () =>{
    navigate('/cUpdate');
  };

  const goToGetDetails = () =>{
    navigate('/cGetDetails');
  };

  return (

    <div>
    <div>
        <Upside title='Other Options in Child Profiles' upside='blue'/>
    </div>
<div className="option-boxes-container">
<div className='box' onClick={goToUpdate}>
<ChangePBox title='Update Child Profile' para1='Update information in Child Profile'
para2='and Edit the details'/>
</div>

<div className='box' onClick={goToGetDetails}>
<ChangePBox title='Get Child Details' para1='Can get user details' para2='and see informations'/>
</div>

<div className='box' onClick={goToDelete}>
<ChangePBox title='Delete Child Profile' para1='Delete user Accounts' para2='and change the access'/>
</div>
</div> 

</div>
  )
}