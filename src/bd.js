import React from 'react';
import './App.css';
const Body = ({onRouteChange})=>{
  return(
   <div className='container'>
       <p class='c1'>IEEE JU Presents</p>
       <p className='c2'>MLAS 2020</p>
       <p className='c3'>(Machine Learning Accelerator Summit)<br/>20 October 2020 , Jadavpur University WB .</p>
       <button type="button" class="btn btn-primary btn-lg" onClick={()=>onRouteChange('Register')}>REGISTER</button>
   </div>
  );
}
export default Body ;