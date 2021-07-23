import React from 'react';
import './App.css';
import logo1 from './map.PNG' ;
import logo2 from './ju.PNG' ;
function Location(){
    return(
        <div>
            <div className='c'>Location</div>
        <div class='wrap'>
         <a href='https://www.google.com/maps/place/Jadavpur+University/@22.4988682,88.370205,17z/data=!4m5!3m4!1s0x3a0271237f28abe9:0xd047bab0c8bfb11c!8m2!3d22.4988822!4d88.3714123'><img src={logo1} className='sizer' /></a>
         <a href='https://en.wikipedia.org/wiki/Jadavpur_University'><img src={logo2} className='sizer' /></a>
        </div>
        </div>
    )
}
export default Location ;