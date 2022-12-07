import React from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { MdOutlineExitToApp, MdOutlineArrowDropDown } from 'react-icons/md'
import { BsFillClockFill } from 'react-icons/bs'
import { RiNotification4Fill, RiServiceFill } from 'react-icons/ri'
import DrizzleLogo from '../../image/drizzle_logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = (propes) => {
    const navheight = {
        height: "60px",
        width: "100%",
        padding: "5px 0px 0px 15px ",
        boxShadow: "3px 3px 10px gray",
        borderRadius: "10px 0px 0px 10px",
        position: "relative",
        fontFamily: 'Roboto'
    }
    const profile = {
        position: "absolute",
        right: "5%",
        color: "rgb(95,33,73)",
        cursor: "pointer",
        marginTop: "10px",
    }

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.href = '/'
    }
    return (
        <>
            <div className="navbarcontainer bg-white mb-3 d-flex " style={navheight} >
                {propes.isOpen ?
                    <h5></h5> : <img src={DrizzleLogo} style={{ height: "80%" }} alt='Drizzle Landing Page' />}
                <div className='nav_icon'>
                    <RiNotification4Fill style={{ fontSize: "23px" }} />
                    <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-3px -5px "}}/>
                </div>
                <div className='nav_icon2'>
                    <BsFillClockFill style={{ fontSize: "23px" }}/>
                    <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-3px -5px "}} />
                </div>

                <div className=" dropdown show w-100">

                    <div style={profile} className=" " href="/rofile" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        <div style={{ display: "flex" }}>
                            <FaUserCircle style={{ fontSize: "30px", margin: "-2px 5px 0 5px" }} />
                            <p>{sessionStorage.getItem('UserName')}</p>
                            <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-4px 0"}} />
                        </div>
                    </div>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <a className="dropdown-item" href="/Profile">Profile</a>
                        <Link className="dropdown-item" to="/ChangePassword">Change Password</Link>
                        <a className="dropdown-item border-top text-danger" href="#" onClick={handleLogout}>Logout <MdOutlineExitToApp style={{ fontSize: "20px" }} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;