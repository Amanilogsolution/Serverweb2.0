import React, { useState } from "react";
import Awllogo from "../../img/awl2.png";
import "./Login.css";
import { UserLogin } from '../../api'

export default function Login() {
  const [error, setError] = useState(false);
  const [toggleeye, setToggleeye] = useState(true);

  const handlelogin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
      setError(true)
    }
    else {
      const result = await UserLogin(username, password);
      if (result.status === 'Success') {
        sessionStorage.setItem('UserName', result.name);
        sessionStorage.setItem('UserId', result.user_id);
        sessionStorage.setItem('Token', result.token);
        sessionStorage.setItem('Permission', result.permission)
        window.location.href = './Dashboard'
      }
      else {
        alert(`Invalid Username:-${username} and password:-${password}`);
      }

    }



  }


  const togglefun = () => {
    console.log('click')
    setToggleeye(!toggleeye);
  }

  return (
    <>
      <div className="formmaindiv">
        <div className="formcontainer" >
          <div className="login">
            <img className="p-0" id="img" src={Awllogo} alt="awl india" />
            <h4 className="text-center heading-title mt-2" >AWL India <b>IPERISCOPE</b></h4>
            <div className="control">
              <input type="text" id="username" placeholder="Username" ></input>
              <div className="form-row">

                <input type={toggleeye?'password':'text'} id="password" placeholder="Password" className="form-group col-md-11" ></input>
                {
                  toggleeye ?
                    <span className="material-symbols-outlined form-group col-md-1 mt-2 eyebtn" onClick={togglefun}>
                      visibility_off
                    </span> : <span className="material-symbols-outlined form-group col-md-1 mt-2 eyebtn" onClick={togglefun}>
                      visibility
                    </span>
                }



              </div>
              { 
                error ? <p style={{ color: "red" }}>Please Enter Userid & Password ...</p> : null
              }
              <button className="btn btn-primary mt-2 psw-btn" value="Login" onClick={handlelogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
