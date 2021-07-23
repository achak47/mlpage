import React from 'react';
import './App.css';

function Register(){
    return(
        <div>
            <h2 style={{color:'white'}}>Registration</h2>
        <div class="row g-3" style={{background:'rgba(31, 30, 30, 0.7)',color:'white',padding:5,margin:5,fontSize:15}}>
            <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" /> 
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
<option>Andhra Pradesh </option>
<option>Arunachal  </option>
<option>Assam  </option>
<option>Bihar  </option>
<option>Chhattisgarh  </option>
<option>Goa </option>
<option>Gujarat</option>
<option>Haryana</option>
<option>Himacha</option>
<option> Jammu and Kashmir  </option>
<option> Jharkhand  </option>
<option> Karnataka </option>
<option> Kerala </option>apuram
<option> Madhya </option>
<option> Maharashtra </option>
<option> Manipur  </option>
<option> Meghalaya  </option>
<option> Mizoram  </option>
<option> Nagaland  </option>
<option> Odisha  </option>
<option> Punjab  </option>
<option> Rajasthan  </option>
<option> Sikkim  </option>
<option> Tamil Nadu  </option>
<option> Telangana  </option>
<option> Tripura  </option>
<option> Uttar Pradesh  </option>
<option> Uttarakhand  </option>
<option> West Bengal  </option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Pin Code</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck" style={{float:'left'}}>
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
        </div>
        </div>
    )
}
export default Register;