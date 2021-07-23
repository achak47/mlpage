import React from 'react';
import './App.css';
import logo from './ieeeju.PNG';
function Navbar(){
    return(
    <div className='indexing'>
    <div className='navl'style={{position:'fixed',right:0,top:0,left:0}}>
        <ul class="nav justify-content-end" >
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">SPEAKERS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">EVENTS</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">CONTACT</a>
  </li>
</ul>
    </div>
    <img src={logo} style={{position:'fixed',left:0,top:0 }} />
    </div>)
}
export default Navbar ;