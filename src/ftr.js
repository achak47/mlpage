import React from 'react';
import './App.css';
import logo from './ieeeju2.PNG' ;
import logo1 from './twt.PNG' ;
import logo2 from './fb.PNG' ;
function Footer(){
    return(
      <div className='fw'>
             <div className="card" style={{width:250}}>
  <img src={logo} className="card-img-top" alt="IEEE JU" />
  <div className="card-body" style={{background: 'rgba(31, 30, 30, 0.7)'}}>
    <p className="card-text" style={{color:'white' , fontSize:15}}>The Jadavpur University IEEE student branch, founded in 2010, belongs to the Kolkata section of Region 10 of the organization. We are a group of enthusiastic students who are promoting innovative ideas both within and outside the campus.</p>
  </div>
</div>
<div class="card" style={{width:250, position:'relative',right:-700,background: 'rgba(31, 30, 30, 0.7)'}}>
  <div class="card-body">
    <h5 class="card-title" style={{color:'white' , fontSize:15}}>CONTACT US</h5>
    <p class="card-text" style={{color:'white' , fontSize:15}}>Jadavpur University
188, Raja S.C. Mallick Rd, Kolkata-700032
India
Phone: +91 98361 05125
Email: jaduniv.ieee@gmail.com</p>
    <a href="https://twitter.com/IeeeJadavpur" class="card-link"><img src={{logo1}} alt='Twitter' /></a>
    <a href="https://www.facebook.com/ieeejusb" class="card-link"><img src={{logo2}} alt='Facebook' /></a>
  </div>
</div>
 <div style={{position:'absolute',left:0,right:0,bottom:0,background:'black',color:'white' , fontSize:20}}>
 Copyright ©2021 All rights reserved | Made by Anurag Chakraborty(achak47)
 </div>
      </div>
    )
}
export default Footer ;