import React, { useState } from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { MdOutlineExitToApp, MdOutlineArrowDropDown, MdHelp } from 'react-icons/md'
import { BsFillClockFill } from 'react-icons/bs'
import { RiNotification4Fill, RiServiceFill } from 'react-icons/ri'
import DrizzleLogo from '../../image/drizzle_logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = (propes) => {


    const handleLogout = () => {
        sessionStorage.clear()
        window.location.href = '/'
    }
    return (
        <>
            <div className="navbarcontainer bg-white mb-3 d-flex " >
                {propes.isOpen ?
                    <h5></h5> : <img src={DrizzleLogo} style={{ height: "80%" }} alt='Drizzle Landing Page' />}

                <div  className="navbar_content" >

                <div className="dropdown">
                        <div href="/rofile" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <div style={{ display: "flex" }}>
                            <BsFillClockFill style={{ fontSize: "19px",marginTop:"2px"}} />
                            <MdOutlineArrowDropDown style={{ fontSize: "22px", margin: "-1px -4px " }} />
                            </div>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <a className="dropdown-item" href="/Profile">Profile</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div href="/rofile" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <div style={{ display: "flex" }}>
                            <MdHelp style={{ fontSize: "21px",marginTop:"2px" }} />
                            <MdOutlineArrowDropDown style={{ fontSize: "22px", margin: "-1px -5px " }} />
                            </div>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <a className="dropdown-item" href="/Profile">Profile</a>
                        </div>
                    </div>


                    <div className="dropdown">
                        <div href="/rofile" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <div style={{ display: "flex" }}>
                                <RiNotification4Fill style={{ fontSize: "21px",marginTop:"2px"}} />
                                <MdOutlineArrowDropDown style={{ fontSize: "22px", margin: "-1px -5px " }} />
                            </div>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <a className="dropdown-item" href="/Profile">Profile</a>
                        </div>
                    </div>



                    <div className="dropdown" >
                        <div className='Nav_profile' href="/rofile" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <div style={{ display: "flex" }}>
                                <FaUserCircle style={{ fontSize: "30px", margin: "-2px 5px 0 5px" }} />
                                <p className='Nav_Pro_para'>
                                    {sessionStorage.getItem('UserName')}
                                </p>
                                <MdOutlineArrowDropDown style={{ fontSize: "25px", margin: "-2px 0 0 -5px" }} />
                            </div>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <p className='Nav_Pro_para2 '>
                                {sessionStorage.getItem('UserName')}
                            </p>
                            <a className="dropdown-item" href="/Profile">Profile</a>
                            <Link className="dropdown-item" to="/ChangePassword">Change Password</Link>
                            <a className="dropdown-item border-top text-danger" href="#" onClick={handleLogout}>Logout <MdOutlineExitToApp style={{ fontSize: "20px" }} /></a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Navbar;