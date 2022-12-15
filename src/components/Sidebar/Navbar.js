import React, { useState } from 'react'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineExitToApp, MdOutlineArrowDropDown, MdOutlineHelp, MdGroups, MdEmail, MdPermContactCalendar } from 'react-icons/md'
import { BsFillClockFill, BsYoutube } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { IoMdHelp } from 'react-icons/io'
import DrizzleLogo from '../../image/drizzle_logo.jpg'
import { Link } from 'react-router-dom'
import { VscListFilter, VscSettings } from 'react-icons/vsc'
import { HiDocumentText } from 'react-icons/hi'


const Navbar = (propes) => {

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.href = '/'
    }
    return (
        <>
            <div className="innernavbarcontainer bg-white mb-3 d-flex align-items-center position-relative"  >
                {propes.isOpen ?
                    null : <img className='navbar-brand' src={DrizzleLogo} style={{ height: "80%" }} alt='Drizzle Landing Page' />}
                <div className='mx-2 d-flex'>
                    <div className={propes.isOpen ? 'd-flex  ' : 'd-flex'} style={{ width: '150px', marginLeft: '30px' }}>
                        <div className='d-flex align-items-center' role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <VscSettings style={{ fontSize: "25px" }} />
                            <p className='mb-0 mx-1' style={{ fontSize: "22px" }}>Setting</p>
                            <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-2px 0" }} />
                        </div>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                            <Link className="dropdown-item" to="/TotalRoles">Role</Link>
                            <Link className="dropdown-item" to="/OrganisationDetails">Organisation Details</Link>
                            <Link className="dropdown-item" to="#">Appliction</Link>
                        </div>
                    </div>
                    <div className='d-flex align-items-center  curser-pointer '>
                        <HiDocumentText style={{ fontSize: "25px" }} />
                        <p className='mb-0' style={{ fontSize: "22px" }}>Reports</p>
                    </div>
                </div>


                <div className='navcontainer-second position-absolute d-flex align-items-center justify-content-between'>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <div role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <VscListFilter style={{ fontSize: "22px" }} />
                                <BsFillClockFill style={{ fontSize: "25px" }} />
                                <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-2px 0" }} />
                            </div>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                                <a className="dropdown-item" href="/AddNewAssets">Enroll New Asset</a>
                                <Link className="dropdown-item" to="/AddTickets">Create a New Ticket</Link>
                                <Link className="dropdown-item" to="/AddVendorCode">Create a New Vendor</Link>
                            </div>
                        </div>
                        <div className='d-flex  mx-3 '>
                            <div role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <MdOutlineHelp style={{ fontSize: "27px" }} />
                                <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-2px 0" }} />
                            </div>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                                <Link className="dropdown-item" to="#"><BsYoutube /> Quick Start Video</Link>
                                <Link className="dropdown-item" to="#"> <MdOutlineHelp /> Getting Started Guide</Link>
                                <Link className="dropdown-item" to="#"><MdGroups style={{ fontSize: '25px' }} /> Free Onbording Session</Link>
                                <Link className="dropdown-item" target="_blank" to="/HelpDescription"><IoMdHelp style={{ fontSize: '20px' }} /> Help Guides</Link>
                                <a className="dropdown-item" href="mailto:drizzle.ilog@gmail.com"><MdEmail /> Send Email to Support</a>
                                <Link className="dropdown-item" to="/Contactus"><MdPermContactCalendar /> Contact us</Link>
                            </div>
                        </div>
                        <div className='d-flex  curser-pointer'>
                            <BsBellFill style={{ fontSize: "25px" }} />
                        </div>
                    </div>
                    <div className='d-flex' >
                        <div className='d-flex align-items-center' role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <FaUserCircle className='' style={{ fontSize: "30px", marginRight: '3px' }} />
                            <p className=' mb-0 name-text' style={{ fontSize: '18px' }}>{sessionStorage.getItem('UserName')}</p>
                            <MdOutlineArrowDropDown style={{ fontSize: "30px" }} />
                        </div>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
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