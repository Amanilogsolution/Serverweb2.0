import React,{useState} from "react";
import Awllogo from "../../img/awl2.png";
import "./Login.css";
import { UserLogin } from '../../api'

export default function Login() {
  const [error,setError] =useState(false);


  const handlelogin = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(!username|| !password){
      setError(true)
    }
    else{
      console.log(username,password)
      const result = await UserLogin(username, password);
      if(!result){
        // console.log("result",result)
      }
      else{
        // console.log("result",result)
        sessionStorage.setItem('UserName',result.user_name)
        sessionStorage.setItem('UserId',result.user_id);
        window.location.href='./Dashboard'
      }
      
    }

   

  }


  return (
    <>
      <div className="formmaindiv">
        <div className="formcontainer" >
          <div className="login">
            <img className="p-0" id="img" src={Awllogo} alt="awl india" />
            <h4 className="text-center heading-title" >AWL India Serversite</h4>
            <div className="control">
              <input type="text" id="username" placeholder="Username" ></input>
              <input type="password" id="password" placeholder="Password" ></input>
              {
                error?<p>Please Enter Userid & Password ...</p>:null
              }
              <button className="btn btn-primary mt-2 psw-btn" value="Login" onClick={handlelogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
