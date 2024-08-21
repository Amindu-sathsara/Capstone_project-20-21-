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

  const goToCCreate = () =>{
      navigate('/CCreate');
  };

  const goToChildOption = () =>{
    navigate('/cOption');
  };

  return (

    <div>

    <div>
    <Upside title='KidsCare Account Management'/>
        <button id='create' onClick={goToForm}>Create Account</button>
        <button id='change' onClick={goToChangeP}>Change Permission</button>
       
      </div> 
     <div className='second'>
       <h1 id='h1'>Work With Child Profile</h1>
       <img src="\TR_Healthcare-Medical-Trends_Feature.webp" alt='secondimage' className='new'/>
      
         
       <button id='parent' onClick={goToCCreate}>Create</button>
      
       <button id='health' onClick={goToChildOption}>Other Option</button>
    
     </div>

    
  </div>
 
  );
}
