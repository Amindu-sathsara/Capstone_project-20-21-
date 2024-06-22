import React from 'react'
import "../home/home.css"
import Upside from '../../components/upside/Upside';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  const goToForm = () =>{
    navigate('/form');
  };

  const goToChangeP = () =>{
    navigate('/changeP');
  };

  return (

    <div>

    <div>
    <Upside title='KidsCare Account Management'/>
        <button id='create' onClick={goToForm}>Create Account</button>
        <button id='change' onClick={goToChangeP}>Change Permission</button>
       
      </div> 
     <div className='second'>
       <h1 id='h1'>Creating New User Account</h1>
       <img src="\TR_Healthcare-Medical-Trends_Feature.webp" alt='secondimage' className='new'/>
       <h3 id='h3'>Create account for</h3>
         
       <button id='parent' >Parent</button>
      
       <button id='health' >HealthCare Professional</button>
    
     </div>

    
  </div>
 
  );
}
