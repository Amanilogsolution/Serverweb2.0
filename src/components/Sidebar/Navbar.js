import React, { useState } from 'react'
import './Navbar.css'
import { FaUserCircle,FaTicketAlt,FaElementor } from 'react-icons/fa'
import { MdOutlineExitToApp, MdOutlineArrowDropDown, MdOutlineHelp, MdGroups, MdEmail, MdPermContactCalendar } from 'react-icons/md'
import { BsFillClockFill, BsYoutube,BsFillLaptopFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { RiMoneyEuroCircleFill } from 'react-icons/ri'
import { IoMdHelp } from 'react-icons/io'
import DrizzleLogo from '../../image/drizzle_logo.jpg'
import { Link } from 'react-router-dom'
import { VscListFilter, VscSettings } from 'react-icons/vsc'
import { HiDocumentText } from 'react-icons/hi'


const Navbar = (propes) => {

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = '/'
    }
    return (
        <>
            <div className="innernavbarcontainer bg-white mb-3 d-flex align-items-center position-relative"  >
                {propes.isOpen ?
                    null : <img className='navbar-brand logo-img' src={DrizzleLogo}  alt='Drizzle Logo' />}
                <div className=' setting-main-div d-flex'>
                    <div style={{ width: '130px'}}>
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
                    <div className='d-flex align-items-center  cursor-pointer  '>
                        <HiDocumentText style={{ fontSize: "25px" }} />
                        <p className='mb-0' style={{ fontSize: "22px" }}>Reports</p>
                    </div>
                </div>


                <div className='navcontainer-second position-absolute d-flex align-items-center justify-content-between'>
                    <div className='navcontainer-innersecond'>
                        <div className='d-flex'>
                            <div role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <VscListFilter style={{ fontSize: "22px" }} />
                                <BsFillClockFill style={{ fontSize: "25px" }} />
                                <MdOutlineArrowDropDown style={{ fontSize: "30px", margin: "-2px 0" }} />
                            </div>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                                <a className="dropdown-item" href="/AddNewAssets"><BsFillLaptopFill style={{ color: "rgb(66, 4, 69)" }} /> Enroll New Asset</a>
                                <Link className="dropdown-item" to="/AddTickets"><FaTicketAlt style={{ color: "rgb(66, 4, 69)" }} /> Create a New Ticket</Link>
                                <Link className="dropdown-item" to="/AddVendorCode"><FaElementor style={{ color: "rgb(66, 4, 69)" }} />&nbsp; Create a New Vendor</Link>
                                <Link className="dropdown-item" to="/AddVendorInvoice"><RiMoneyEuroCircleFill style={{ color: "rgb(66, 4, 69)" }} /> New Vendor Invoice</Link>
                                <Link className="dropdown-item" to="/AddVendorPayment"><RiMoneyEuroCircleFill style={{ color: "rgb(66, 4, 69)" }} /> Add Vendor Payment</Link>
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
                        <div className='d-flex  cursor-pointer'>
                            <BsBellFill style={{ fontSize: "25px" }} />
                        </div>
                    </div>
                    <div className='d-flex' >
                        <div className='d-flex align-items-center' role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <FaUserCircle className='' style={{ fontSize: "30px", marginRight: '3px' }} />
                            <p className=' mb-0 name-text' style={{ fontSize: '18px' }}>{localStorage.getItem('UserName')}</p>
                            <MdOutlineArrowDropDown style={{ fontSize: "30px" }} />
                        </div>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                            <Link className="dropdown-item" to="/Profile">Profile</Link>
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