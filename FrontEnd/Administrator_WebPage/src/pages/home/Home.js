import React from 'react'
import "../home/home.css"
import Upside from '../../components/upside/Upside';

export default function Home() {

  return (

    <div>

    <div>
    
        <button id='create'>Create Account</button>
        <button id='change'>Change Permission</button>
        <Upside title='KidsCare Account Management'/>
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
