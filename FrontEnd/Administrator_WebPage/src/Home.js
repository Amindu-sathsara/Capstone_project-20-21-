import React from 'react'
import "./home.css"
import Signup from './Signup'



export default function Home() {

  
  return (

    <div className='upside'>
  
       <h1 id='title'>KidsCare Account Management</h1>
       
        <button id='create' >Create Account</button>
        <button id='change'>Change Permission</button>

        <div className='upsidecenter'>
          <img src="\webpage healthcare.jpg" alt='upimage' className='img'/>
        </div>
       
     <div className='second'>
       <h1 id='h1'>Creating New User Account</h1>
       <img src="\TR_Healthcare-Medical-Trends_Feature.webp" alt='secondimage' className='new'/>
       <h3 id='h3'>Create account for</h3>
         
       <button id='parent' >Parent</button>
    
      
       <button id='health' >HealthCare Professional</button>
    
     </div>

     <div className='third'>
     <br/>
     <div className='sign'><Signup/></div>          
    </div>
  </div>
 
  );
}
