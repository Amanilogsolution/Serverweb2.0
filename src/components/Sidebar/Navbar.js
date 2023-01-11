import React, { useState } from 'react'
import './Navbar.css'
import { FaUserCircle, FaTicketAlt, FaElementor } from 'react-icons/fa'
import { MdOutlineExitToApp, MdOutlineArrowDropDown, MdOutlineHelp, MdGroups, MdEmail, MdPermContactCalendar } from 'react-icons/md'
import { BsFillClockFill, BsYoutube, BsFillLaptopFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { RiMoneyEuroCircleFill, RiSettings3Fill } from 'react-icons/ri'
import { IoMdHelp } from 'react-icons/io'
import DrizzleLogo from '../../image/drizzle_logo.jpg'
import { Link } from 'react-router-dom'
import { VscListFilter } from 'react-icons/vsc'
import { HiDocumentText } from 'react-icons/hi'
import { TiVendorMicrosoft } from 'react-icons/ti'
import { CgOrganisation } from 'react-icons/cg'
import { GrUserExpert } from 'react-icons/gr'
import { FiUserPlus } from 'react-icons/fi'
import img from '../../image/modelimg.png'


const Navbar = (propes) => {

    return (
        <>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document" style={{ width: "300px",marginTop:"50px" }}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <img src={img} style={{ width: "140px", margin: "0 70px" }} />
                        </div>
                        <div class="modal-body">
                            <div style={{ textAlign: "center", width: "100%", padding: "0 15px" }}>
                                <h4>Are you sure ? </h4>
                                <p>you want to logout your account</p><br />
                                <div>
                                    <button style={{ borderRadius: "50px" }} className='btn btn-voilet w-100 my-2' onClick={() => {
                                        localStorage.clear()
                                        window.location.href = '/'
                                    }}>Yah, I am sure</button><br />
                                    <button style={{ borderRadius: "50px" }} className=' close btn btn-secondary w-100' data-dismiss="modal" aria-label="Close">Cencel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="innernavbarcontainer bg-white mb-3 d-flex align-items-center "  >
                    {propes.isOpen ?
                        null : <img className='navbar-brand logo-img' src={DrizzleLogo} alt='Drizzle Logo' />}

                    <div className=' setting-main-div d-flex'>
                        <div style={{ width: '130px' }}>
                            <div className='d-flex align-items-center' role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <RiSettings3Fill style={{ fontSize: "23px" }} />
                                <p className='mb-0 mx-1' style={{ fontSize: "18px" }}>Settings</p>
                                <MdOutlineArrowDropDown style={{ fontSize: "25px", margin: "-2px -7px" }} />
                            </div>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                                <Link className="dropdown-item" to="/TotalRoles"><FiUserPlus /> Role</Link>
                                <Link className="dropdown-item" to="/TotalAssignRole"><GrUserExpert /> AssignRole</Link>
                                <Link className="dropdown-item" to="/OrganisationDetails"><CgOrganisation /> Organisation Details</Link>
                                <Link className="dropdown-item" to="#"><TiVendorMicrosoft /> Appliction</Link>
                            </div>
                        </div>
                        <Link className='d-flex align-items-center  cursor-pointer' to="/reports" style={{ textDecoration: "none", color: "#212529" }}>

                            <HiDocumentText style={{ fontSize: "23px" }} />
                            <p className='mb-0' style={{ fontSize: "18px" }}>Reports</p>

                        </Link>
                    </div>


                    <div className='navcontainer-second position-absolute d-flex align-items-center justify-content-between'>
                        <div className='navcontainer-innersecond'>
                            <div className='d-flex'>
                                <div role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <VscListFilter style={{ fontSize: "21px" }} />
                                    <BsFillClockFill style={{ fontSize: "20px" }} />
                                    <MdOutlineArrowDropDown style={{ fontSize: "23px", margin: "-2px -2px" }} />
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
                                    <MdOutlineHelp style={{ fontSize: "25px" }} />
                                    <MdOutlineArrowDropDown style={{ fontSize: "23px", margin: "-2px -2px" }} />
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
                                <BsBellFill style={{ fontSize: "20px", marginTop: "3px" }} />
                            </div>
                        </div>
<<<<<<< HEAD
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                            <Link className="dropdown-item" to="/Profile">Profile</Link>
                            <Link className="dropdown-item" to="/ChangePassword">Change Password</Link>
                            <a className="dropdown-item border-top text-danger" href="#" data-toggle="modal" data-target="#exampleModal">Logout <MdOutlineExitToApp style={{ fontSize: "20px" }} /></a>
=======
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
>>>>>>> d7ff2d1ef86a84c2050078a97a83ef92546794b1
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Navbar;