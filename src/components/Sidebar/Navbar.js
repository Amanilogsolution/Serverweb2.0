import React from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { RiNotification2Fill } from 'react-icons/ri'
import DrizzleLogo from '../../image/drizzle_logo.jpg'
import {Link} from 'react-router-dom'
const Navbar = (propes) => {

    const navheight = {
        height: "60px",
        width:"100%",
        padding: "5px 0px 0px 15px ",
        boxShadow:"3px 3px 10px gray",
        borderRadius: "10px 0px 0px 10px",
        position:"relative",
        fontFamily: 'Roboto'
    }
    const profile = {
       position:"absolute",
       right:"5%",
        fontSize: "47px",
        color:"rgb(96,58,233)",
        cursor:"pointer",
        marginTop:"-13px"
    }

    const handleLogout=()=>{
      sessionStorage.clear()
      window.location.href='/'
    }
    return (
        <>
            <div className="navbarcontainer bg-white mb-3 d-flex " style={navheight} >
            {propes.isOpen?
                <h5 style={{ color: "#603AE9",margin:"7px" }}>Drizzle
                </h5>:<img src={DrizzleLogo} style={{height:"80%"}} alt='Drizzle Landing Page'/>}

                <div className=" dropdown show w-100">
                    
                    <RiNotification2Fill style={{position:"absolute",right:"11%",marginTop:"12px",fontSize:"25px",color:"rgb(96,58,233)",cursor:"pointer"}}/>
                   <a className=" " href="/rofile" role="button" id="dropdownMenuLink" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={profile}>
                         <FaUserCircle/>
                   </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/Profile">Profile</a>
                       <Link className="dropdown-item" to="/ChangePassword">Change Password </Link>
                       <a className="dropdown-item border-top text-danger" href="#" onClick={handleLogout}>Logout <IoMdLogOut/></a>
                   </div>
               </div>

            </div>
        </>
    )
}

export default Navbar;