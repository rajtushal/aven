import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./general.css";
import "./login.css";



function Login() {
  const [passClick, setPassclick] = React.useState(false);
  
  const eyeClick=()=>{
    console.log("eyeClick");
    setPassclick(!passClick)

  }
  return <>
  <div className="container">
    <div className="wrapper d-flex">
      <div className="box1">
        <img src="./img/loinimg.png" alt="" />
      </div>
      <div className="box2">
        <div className="col1  ">
          <div className="row1">
            <span>Welcome to the</span>
            <h1> ViewBox of Avendata</h1>
          </div>
          <Form className="row2 from d-flex flex-column t-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Username*</Form.Label>
        <Form.Control className="input" type="email" placeholder="Enter Username " />
      
      </Form.Group>

      <Form.Group className="mb-3 password" controlId="formBasicPassword">
        <Form.Label className="label">Password*</Form.Label>
        <Form.Control className="input" type="password" placeholder="Enter Password" />
        <span onClick={eyeClick}>
       { passClick ? <svg className="eye eyehidden" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.71777 1L18.8519 17.2815" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6069 14.4936C14.1304 15.5786 12.4614 16.06 10.8565 16.0887C8.58833 16.0671 6.76236 15.4133 5.16465 14.1056C3.68818 12.9057 2.4043 11.5262 1.27734 9.98853C0.913576 9.49276 0.906443 9.10476 1.26308 8.61618C2.54696 6.87738 3.95923 5.32539 5.72813 4.06799" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.04102 3.29203C8.35343 2.67411 9.77283 2.437 11.2778 2.53759C13.4961 2.68129 15.3149 3.68721 16.9269 5.17453C18.0539 6.21637 19.081 7.34444 19.9868 8.58028C20.3862 9.11916 20.3862 9.4856 19.9868 10.0317C19.1238 11.1957 18.1822 12.2734 17.1266 13.2434" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.02327 7.38037C8.57391 7.81148 8.29574 8.4294 8.30287 9.1048C8.31713 10.3838 9.3799 11.44 10.6353 11.4256C11.2986 11.4256 11.8977 11.1454 12.3186 10.7071" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
</svg> : <svg className="eye eyevisible" width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6069 14.4936C14.1304 15.5786 12.4614 16.06 10.8565 16.0887C8.58833 16.0671 6.76236 15.4133 5.16465 14.1056C3.68818 12.9057 2.4043 11.5262 1.27734 9.98853C0.913576 9.49276 0.906443 9.10476 1.26308 8.61618C2.54696 6.87738 3.95923 5.32539 5.72813 4.06799" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.04102 3.29203C8.35343 2.67411 9.77283 2.437 11.2778 2.53759C13.4961 2.68129 15.3149 3.68721 16.9269 5.17453C18.0539 6.21637 19.081 7.34444 19.9868 8.58028C20.3862 9.11916 20.3862 9.4856 19.9868 10.0317C19.1238 11.1957 18.1822 12.2734 17.1266 13.2434" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.02327 7.38037C8.57391 7.81148 8.29574 8.4294 8.30287 9.1048C8.31713 10.3838 9.3799 11.44 10.6353 11.4256C11.2986 11.4256 11.8977 11.1454 12.3186 10.7071" stroke="#8C87A6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}

</span>
      </Form.Group>
      <Form.Group className="mb-3 d-flex align-items-center  justify-content-between" controlId="formBasicCheckbox">
        <Form.Check className="checkbox" type="checkbox" label="Remember me" />
        <Form.Text className="fg-text text-muted">
        Forget password?
        </Form.Text>
      </Form.Group>
      <Button className="btn btnlogin " variant="primary" type="submit">
        Login
      </Button>
      <Button className="btn btnReg" variant="primary" type="submit">
      Register
      </Button>
    </Form>
    <div className="row3 d-flex align-items-center  justify-content-around">
      <span></span>
      <h6>Or Login</h6>
      <span></span>
    </div>
    <div className="row4 d-flex align-items-center  justify-content-between">
      <button className="btn">Active Directory</button>
      <button className="btn">JsonToken</button>
    </div>

        </div>
      </div>

    </div>

  </div>
   
  </>;
}

export default Login;
