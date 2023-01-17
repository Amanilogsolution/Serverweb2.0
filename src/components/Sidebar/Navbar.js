import React from 'react'
import './Navbar.css'
import { FaUserCircle, FaTicketAlt, FaElementor } from 'react-icons/fa'
import { MdOutlineExitToApp, MdOutlineArrowDropDown, MdOutlineHelp, MdGroups, MdEmail, MdPermContactCalendar } from 'react-icons/md'
import { BsFillClockFill, BsYoutube, BsFillLaptopFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { RiMoneyEuroCircleFill, RiSettings3Fill,RiUserFill } from 'react-icons/ri'
import { IoMdHelp } from 'react-icons/io'
import DrizzleLogo from '../../image/drizzle_logo.png'
import { Link } from 'react-router-dom'
import { VscListFilter } from 'react-icons/vsc'
import { HiDocumentText } from 'react-icons/hi'
import { TiVendorMicrosoft } from 'react-icons/ti'
import { CgOrganisation } from 'react-icons/cg'
import { GrUserExpert } from 'react-icons/gr'
import { FiUserPlus } from 'react-icons/fi'

const Navbar = (props) => {
    console.log(props)
    return (
        <>
            <div className="innernavbarcontainer bg-white mb-3 d-flex align-items-center " >
                {props.isOpen ?
                    null : <img className='navbar-brand logo-img' src={DrizzleLogo} alt='Drizzle Logo' />}

                <div className='reports d-flex mx-4'>
                    <Link className=' d-flex align-items-center  cursor-pointer' to="/reports" style={{ textDecoration: "none", color: "#212529" }}>
                        <HiDocumentText style={{ fontSize: "28px",color:"gray" }} />
                        <p className='mb-0' style={{ fontSize: "17px" }}>Reports</p>
                       
                    </Link>
                    <span class="tooltiptext ">Reports</span>
                </div>


                <div className='navcontainer-second position-absolute d-flex align-items-center justify-content-end '>
                    <div className='navcontainer-innersecond mx-4'>
                        <div className='d-flex mx-1 clock'>
                        
                            <div role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <VscListFilter style={{fontSize:"18px",color:"#404040"}}/>
                                <BsFillClockFill style={{fontSize:"18px",color:"#404040"}} />
                                <MdOutlineArrowDropDown style={{ fontSize: "21px",color:"#404040" }} />
                            </div>
                            <span class="tooltiptext">Shortcut</span>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px silver',margin:"0 -2px" }}>
                                <a className="dropdown-item" href="/AddNewAssets"><BsFillLaptopFill style={{ color: "rgb(66, 4, 69)" }} /> Enroll New Asset</a>
                                <Link className="dropdown-item" to="/AddTickets"><FaTicketAlt style={{ color: "rgb(66, 4, 69)" }} /> Create a New Ticket</Link>
                                <Link className="dropdown-item" to="/AddVendorCode"><FaElementor style={{ color: "rgb(66, 4, 69)" }} />&nbsp; Create a New Vendor</Link>
                                <Link className="dropdown-item" to="/AddVendorInvoice"><RiMoneyEuroCircleFill style={{ color: "rgb(66, 4, 69)" }} /> New Vendor Invoice</Link>
                                <Link className="dropdown-item" to="/AddVendorPayment"><RiMoneyEuroCircleFill style={{ color: "rgb(66, 4, 69)" }} /> Add Vendor Payment</Link>
                            </div>
                        </div>
                        <div className='help d-flex mx-1 '>
                        <span class="tooltiptext">Help</span>
                            <div role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <MdOutlineHelp style={{ fontSize: "21px",color:"#404040" }} />
                                <MdOutlineArrowDropDown style={{ fontSize: "23px", margin: "0 -3px",color:"#404040" }} />
                            </div>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                                <Link className="dropdown-item" to="#"><BsYoutube /> Quick Start Video</Link>
                                <Link className="dropdown-item" to="#"> <MdOutlineHelp /> Getting Started Guide</Link>
                                <Link className="dropdown-item" to="#"><MdGroups style={{ fontSize: '25px' }} /> Free Onbording Session</Link>
                                <Link className="dropdown-item" target="_blank" to="/HelpDescription"><IoMdHelp className='ft-20' /> Help Guides</Link>
                                <a className="dropdown-item" href="mailto:drizzle.ilog@gmail.com"><MdEmail /> Send Email to Support</a>
                                <Link className="dropdown-item" to="/Contactus"><MdPermContactCalendar /> Contact us</Link>
                            </div>
                        </div>
                        <div className='notifications d-flex  cursor-pointer mx-1'>
                            <BsBellFill className='mt-1' style={{ fontSize: "18px",color:"#404040" }} />
                            <span class="tooltiptext">Notify</span>
                        </div>
                     
                    </div>
                    <div className='settings d-flex  cursor-pointer mx-3' onClick={props.togglesidebar2}>
                        <RiSettings3Fill style={{ fontSize: "30px",margin:"0 8px 0 0",color:"gray"}} />
                        <span class="tooltiptext">Settings</span>
                    </div>
                    
                    <div className='d-flex profileicon'>
                    <span class="tooltiptext">Profile</span>
                        <div className='d-flex align-items-center' role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            <RiUserFill className='' style={{ fontSize: "30px", marginRight: '6px',background:"#cf821d",color:"white",padding:"6px",borderRadius:"5px"}} />
                            <p className=' mb-0 name-text' style={{ fontSize: '18px' }}>{localStorage.getItem('UserName')}</p>
                            <MdOutlineArrowDropDown style={{ fontSize: "30px" }} />
                        </div>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ boxShadow: '1px 1px 3px gray' }}>
                            <Link className="dropdown-item" to="/Profile">Profile</Link>
                            <Link className="dropdown-item" to="/ChangePassword">Change Password</Link>
                            <a className="dropdown-item border-top text-danger" data-toggle="modal" data-target="#exampleModal" >Logout <MdOutlineExitToApp className='ft-20' /></a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Navbar;