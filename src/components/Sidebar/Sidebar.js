import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    // FaTasks,
    // FaThList, FaFileContract,
    FaElementor,
    FaTicketAlt,
    FaFileMedicalAlt
} from "react-icons/fa";

import { IoIosArrowDown } from 'react-icons/io'
import { AiFillTag } from 'react-icons/ai'
import {
    MdOutlineDoubleArrow,
    //  MdDevicesOther,
    MdHelp,
    // MdAttachMoney, 
    MdPrecisionManufacturing,
    // MdOutlineMiscellaneousServices,
    //  MdOutlineDevicesOther,
    //   MdAddTask,
    MdLocationPin, MdOutlineExitToApp
} from 'react-icons/md'
import {
    // BsJournalCode,
    BsInboxesFill, BsTriangleHalf, BsArrowUpRightCircleFill, BsFillLaptopFill, BsFileBarGraphFill
} from 'react-icons/bs'
import { BiCategory, BiCategoryAlt, BiDevices } from 'react-icons/bi'

import { HiOutlineTicket, HiDuplicate } from 'react-icons/hi'
import { GrStatusGood, GrServices, GrCompliance } from 'react-icons/gr'
import { GoIssueOpened } from 'react-icons/go'
import { GiContract } from 'react-icons/gi'
import { RiArrowUpDownFill, RiBillFill, RiServiceFill, RiMoneyEuroCircleFill } from 'react-icons/ri'

import { VscLocation, VscTypeHierarchySub } from 'react-icons/vsc'
import { TiVendorMicrosoft } from 'react-icons/ti'
import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar.js';
import './Sidebar.css'
import logo from '../../image/drizzle_logo.jpg'


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [togglemain, setTogglemain] = useState(false);
    const [toggleinnermain, setToggleinnermain] = useState(false);
    const [toggleinnerdrizzle, setToggleinnerdrizzle] = useState(false);
    const [togglesubdrizzle, setTogglesubdrizzle] = useState(false);
    const [togglesubtickets, setTogglesubtickets] = useState(false);
    const [toggletickets, setToggletickets] = useState(false);
    const [togglesubtransation, setTogglesubtransation] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            // document.getElementById('inner').style.display = "none";
            // document.getElementById('subinner').style.display = "none"
            document.getElementById('innerdrizzle').style.display = "none"
            document.getElementById('subdrizzleinner').style.display = "none"
            document.getElementById('subhelpdeskinner').style.display = "none"
            document.getElementById('subtransationinner').style.display = "none"

        }
    };


    const icononstyle = {
        transform: "rotate(-180deg)",
        marginLeft: "40%"
    }
    const iconoffstyle = {
        marginLeft: "0%"
    }
    const handleLogout = () => {
        sessionStorage.clear()
        window.location.href = '/'
    }

    const handleinnertoggle = () => {
        if (!togglemain) {
            document.getElementById("inner").style.display = "block";
            document.getElementById("innerdrizzle").style.display = "none";
            document.getElementById("subhelpdeskinner").style.display = "none";
            document.getElementById("subtransationinner").style.display = "none";
        } else {
            // document.getElementById("inner").style.display = "none";
            // document.getElementById("subinner").style.display = "none";

        }
        setTogglemain(!togglemain);
    };

    const handleinner2toggle = () => {
        if (!toggleinnermain) {
            document.getElementById("subinner").style.display = "block";
        } else {
            document.getElementById("subinner").style.display = "none";
        }
        setToggleinnermain(!toggleinnermain);
    };
    const handleinnertoggledrizzle = () => {
        setIsOpen(true)
        if (!toggleinnerdrizzle) {
            document.getElementById("innerdrizzle").style.display = "block";
            document.getElementById("subhelpdeskinner").style.display = "none";
            document.getElementById("subtransationinner").style.display = "none";
            // document.getElementById("inner").style.display = "none";
            // document.getElementById("subinner").style.display = "none";
        } else {
            document.getElementById("innerdrizzle").style.display = "none";
            document.getElementById("subdrizzleinner").style.display = "none";
        }
        setToggleinnerdrizzle(!toggleinnerdrizzle);
    };

    const handleinner2toggledrizzle = () => {
        if (!togglesubdrizzle) {
            document.getElementById("subdrizzleinner").style.display = "block";
            document.getElementById("subtransationinner").style.display = "none";
        } else {
            document.getElementById("subdrizzleinner").style.display = "none";
        }
        setTogglesubdrizzle(!togglesubdrizzle);
    };


    const handleinnertogglehelpdesk = () => {
        setIsOpen(true)
        if (!togglesubtickets) {
            document.getElementById("subhelpdeskinner").style.display = "block";
            document.getElementById("innerdrizzle").style.display = "none";
            document.getElementById("subtransationinner").style.display = "none";
            // document.getElementById("inner").style.display = "none";
            // document.getElementById("subinner").style.display = "none";
            document.getElementById("subdrizzleinner").style.display = "none";
        } else {
            document.getElementById("subhelpdeskinner").style.display = "none";
        }
        setTogglesubtickets(!togglesubtickets);
    };

    const handleinnertoggTickets = () => {
        setIsOpen(true)
        if (!toggletickets) {
            document.getElementById("subticketsinner").style.display = "block";
            document.getElementById("innerdrizzle").style.display = "none";
            document.getElementById("subtransationinner").style.display = "none";
            // document.getElementById("inner").style.display = "none";
            // document.getElementById("subinner").style.display = "none";
            document.getElementById("subdrizzleinner").style.display = "none";
        } else {
            document.getElementById("subticketsinner").style.display = "none";
        }
        setToggletickets(!toggletickets);
    };

    const handleinnertoggletransation = () => {
        if (!togglesubtransation) {
            document.getElementById("subtransationinner").style.display = "block";
            document.getElementById("subhelpdeskinner").style.display = "none";
            // document.getElementById("innerdrizzle").style.display = "none";
            // document.getElementById("inner").style.display = "none";
            // document.getElementById("subinner").style.display = "none";
            document.getElementById("subdrizzleinner").style.display = "none";
        } else {
            document.getElementById("subtransationinner").style.display = "none";
        }
        setTogglesubtransation(!togglesubtransation);
    };



    return (
        <div className="sidebarcontainer">
            <div className={isOpen ? 'sidebaropen' : 'sidebar'}
            // onClick={toggle}
            //  onMouseEnter={() => setIsOpen(true)}
            //     onMouseLeave={toggle}
            >
                <div className="top_section">
                    <img style={{ width: "110px", display: isOpen ? "block" : "none" }} src={logo} />
                    <div style={isOpen ? icononstyle : iconoffstyle} className="bars">
                        <MdOutlineDoubleArrow onClick={toggle} />
                    </div>
                </div>

                <div className='sidebarinerabc'>
                    <span className='internalsidebar'>
                        <span className='ul'>
                            <span className='li'>
                                <NavLink to='/Dashboard' className="link" title='Dashboard'>
                                    <div className="icon"><FaTh /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Dashboard</div>
                                </NavLink>
                            </span>
                        </span>
                    </span>

                    {/* Iperiscope */}
                    {/* <div onClick={handleinnertoggle} >
                        <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                            <div className="icon" onClick={toggle}><FaUserAlt /></div>
                            <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp;Iperiscope <span className="icon"><IoIosArrowDown /></span> </div>
                        </div>
                    </div>


                    <div className="innerdiv" id="inner" style={{ display: "none" }}>
                        <ul style={{ marginBottom: "0px" }}>
                            <li title='Device' style={{ listStyle: "none" }}>
                                <NavLink to='/TotalDevice' className="link navlink"  >
                                    <div className="icon"><MdDevicesOther /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device</div>
                                </NavLink>
                            </li>
                            <li title='Device Compliances' style={{ listStyle: "none" }}>
                                <NavLink to='/TotalDeviceComp' className="link navlink" activeclassname="sidebaractive">
                                    <div className="icon"><FaThList /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text"> Compliances</div>
                                </NavLink>
                            </li>
                            <li title='Device Task' style={{ listStyle: "none" }}>
                                <NavLink to='/TotalDeviceServiceTask' className="link" activeclassname="sidebaractive">
                                    <div className="icon"><FaTasks /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device Task</div>
                                </NavLink>
                            </li>
                            <li onClick={handleinner2toggle} style={{ listStyle: "none" }}>
                                <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                    <div className="icon" onClick={toggle}><FaUserAlt /></div>
                                    <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp; Master<span className="icon"><IoIosArrowDown /></span> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="innersubdiv" id="subinner" style={{ display: "none" }}>
                        <ul style={{ paddingLeft: "0px", marginBottom: "0px" }}>
                            <li className='innerlink'>
                                <NavLink to='/Totalseries' className='navlink d-flex' activeclassname="sidebaractive">
                                    <HiLink style={{ color: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Series</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalDeviceType' className='navlink d-flex' activeclassname="sidebaractive">
                                    <VscTypeHierarchySub style={{ fill: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/Showdevicegroup' className='navlink d-flex' activeclassname="sidebaractive">
                                    <MdOutlineDevicesOther style={{ fill: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Group</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalOperatingSystem' className='navlink d-flex' activeclassname="sidebaractive">
                                    <TiVendorMicrosoft style={{ color: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Operating System</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/ShowDeviceservices ' className='navlink  d-flex' activeclassname="sidebaractive">
                                    <BiDevices style={{ color: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Services</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalServicecompliance' className='navlink d-flex' activeclassname="sidebaractive">
                                    <GrCompliance style={{ color: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Series Compliances</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalDeviceTask' className='navlink d-flex' activeclassname="sidebaractive">
                                    <MdAddTask style={{ color: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Devices Task</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalAgent' className='navlink d-flex' activeclassname="sidebaractive">
                                    <FaUserAlt style={{ color: "rgb(66, 4, 69)" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Agent Master</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div> */}


                    {/* ############################# Drizzle  ##############################*/}


                    <div onClick={handleinnertoggledrizzle}>
                        <div className="link" id='masterdrizelltitlelink' style={{ cursor: "pointer" }}>
                            <div className="icon" onClick={toggle}><FaUserAlt /></div>
                            <span style={{ display: "flex" }} >
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Drizzle </div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                            </span>
                        </div>
                    </div>
                    <div className="innerdiv" id="innerdrizzle" style={{ display: "none" }}>
                        <ul style={{ marginBottom: "0px" }}>
                            <li title='Assets' style={{ listStyle: "none" }}>
                                <NavLink to='/TotalNewAssets' className="link" activeclassname="sidebaractive">
                                    <div className="icon"><BsFillLaptopFill style={{ fontSize: "18px" }} /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Assets</div>
                                </NavLink>
                            </li>
                            <li title='Vendor Contract' style={{ listStyle: "none" }}>
                                <NavLink to='/TotalVendorContract' className="link" activeclassname="sidebaractive">
                                    <div className="icon"><FaFileMedicalAlt style={{ fontSize: "17px" }} /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Contract</div>
                                </NavLink>
                            </li>
                            <li onClick={handleinner2toggledrizzle} style={{ listStyle: "none" }}>
                                <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                    <div className="icon" onClick={toggle}><FaElementor style={{ fontSize: "17px" }} /></div>
                                    <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp; Master<span className="icon"><IoIosArrowDown /></span> </div>
                                </div>
                            </li>

                            {/*################## Drizzle Master list */}
                            <div className="innersubdiv" id="subdrizzleinner" style={{ display: "none" }}>
                                <ul style={{ paddingLeft: "0px", marginBottom: "0px" }}>
                                    <li className='innerlink' >
                                        <NavLink to='/TotalLocations' style={{ borderTop: "1px solid silver" }} className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdLocationPin style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 7px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} > Location</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalEmployee' className='navlink d-flex' activeclassname="sidebaractive">
                                            <FaUserAlt style={{ color: "rgb(66, 4, 69)", fontSize: "16px", margin: "0 8px" }} /> &nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Employee</div>
                                        </NavLink>
                                    </li>
                                    {/* <li className='innerlink'>
                                    <NavLink to='/TotalAgent' className='navlink' activeclassname="sidebaractive">
                                        <div style={{ display: isOpen ? "block" : "none" }} >Agent</div>
                                    </NavLink>
                                </li> */}
                                    <li className='innerlink'>
                                        <NavLink to='/TotalAssetType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BsInboxesFill style={{ fill: "rgb(66, 4, 69)", fontSize: "16px", margin: "0 8px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Asset Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalAssetStatus' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BsTriangleHalf style={{ fill: "rgb(66, 4, 69)", fontSize: "17px", margin: "0 7px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Asset Status</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalManufacturer' className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdPrecisionManufacturing style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 6px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Manufacturer</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalSoftware' className='navlink d-flex' activeclassname="sidebaractive">
                                            <TiVendorMicrosoft style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 6px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Software</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalIssueType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <GoIssueOpened style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 6px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Issue Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalPurchaseType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <AiFillTag style={{ color: "rgb(66, 4, 69)", fontSize: "19px", margin: "0 5px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Purchase Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalContractType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <RiArrowUpDownFill style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 5px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Contract Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalPriority' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BsArrowUpRightCircleFill style={{ color: "rgb(66, 4, 69)", fontSize: "16px", margin: "0 7px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Priority</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalTicketStatus' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BsTriangleHalf style={{ fill: "rgb(66, 4, 69)", fontSize: "17px", margin: "0 6px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Ticket Status</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalBillingFreq' className='navlink d-flex' activeclassname="sidebaractive">
                                            <RiBillFill style={{ color: "rgb(66, 4, 69)", fontSize: "17px", margin: "0 6px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Billing Frequency</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalVendorCategory' className='navlink d-flex' activeclassname="sidebaractive">
                                            <HiDuplicate style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 4px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Vendor Category</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalVendSubCate' className='navlink d-flex' activeclassname="sidebaractive">
                                            <HiDuplicate style={{ color: "rgb(66, 4, 69)", fontSize: "20px", margin: "0 5px" }} />
                                            <div style={{ display: isOpen ? "block" : "none", fontSize: "14px" }} >Vendor SubCategory</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalServiceActionType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <RiServiceFill style={{ color: "rgb(66, 4, 69)", fontSize: "18px", margin: "0 4px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none", fontSize: "14px" }} >Service Action Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalServiceGroup' className='navlink d-flex' activeclassname="sidebaractive">
                                            <RiServiceFill style={{ color: "rgb(66, 4, 69)", fontSize: "18px", margin: "0 4px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none", fontSize: "14px" }} >Service Group Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink' style={{ borderBottom: "1px solid silver" }}>
                                        <NavLink to='/TotalVendorCode' className='navlink d-flex' activeclassname="sidebaractive">
                                            <FaElementor style={{ color: "rgb(66, 4, 69)", fontSize: "17px", margin: "0 5px" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Vendor Master</div>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                            <li onClick={handleinnertoggletransation} style={{ listStyle: "none" }}>
                                <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                    <div className="icon" onClick={toggle}><RiMoneyEuroCircleFill style={{ fontSize: "22px" }} /></div>
                                    <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp; Transaction<span className="icon"><IoIosArrowDown /></span> </div>
                                </div>
                            </li>
                            <div className="innerdiv" id="subtransationinner" style={{ display: "none" }}>
                                <ul style={{ paddingLeft: "0px" }}>
                                    <li className='innerlink' style={{ margingLeft: "0px" }}>
                                        <NavLink to='/TotalVendorInvoice' className='navlink d-flex' activeclassname="sidebaractive">
                                            <RiMoneyEuroCircleFill style={{ fill: "rgb(66, 4, 69)", fontSize: "17px", margin: "0 7px" }} />
                                            <div style={{ display: isOpen ? "block" : "none" }} > Vendor Invoice</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink' style={{ borderBottom: "1px solid silver" }}>
                                        <NavLink to='/TotalVendorPayment' className='navlink d-flex' activeclassname="sidebaractive">
                                            <RiMoneyEuroCircleFill style={{ fill: "rgb(66, 4, 69)", fontSize: "17px", margin: "0 7px" }} />
                                            <div style={{ display: isOpen ? "block" : "none" }} > Vendor Payment</div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    {/* ####################################### Transaction ############################################### */}

                    <div onClick={handleinnertogglehelpdesk} style={{ marginTop: "0px" }}>
                        <div className="link" id='masterdrizelltitlelink' style={{ cursor: "pointer" }}>
                            <div className="icon" onClick={toggle}><MdHelp style={{ fontSize: "20px", marginLeft: "-3px" }} /></div>
                            <span style={{ display: "flex" }} >
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Help Desk</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                            </span>
                        </div>
                    </div>
                    <div className="innerdiv" id="subhelpdeskinner" style={{ display: "none" }}>
                        <ul style={{ paddingLeft: "20px", marginBottom: "0px" }}>
                            <li
                                onClick={handleinnertoggTickets}
                                style={{ listStyle: "none" }}>
                                <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                    <div className="icon" onClick={toggle}><FaTicketAlt style={{ fontSize: "17px" }} /></div>
                                    <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp; Tickets <span className="icon"><IoIosArrowDown /></span> </div>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="innerdiv" id="subticketsinner" style={{ display: "none" }}>
                        <ul style={{ paddingLeft: "20px", marginBottom: "0px"}}>
                            <li className='innerlink' style={{borderTop:'2px solid #333'}} >
                                <NavLink to='/OpenTotalTickets' className='navlink d-flex' activeclassname="sidebaractive">
                                    <FaTicketAlt style={{ color: "rgb(66, 4, 69)", marginTop: "5px" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} > Open Ticket</div>
                                </NavLink>
                            </li>
                            <li className='innerlink' >
                                <NavLink to='/TotalTicket' className='navlink d-flex' activeclassname="sidebaractive">
                                    <FaTicketAlt style={{ color: "rgb(66, 4, 69)", marginTop: "5px" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} > Close Ticket</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>




                </div>

                <div className="footer_section" title='Logout' id='footerdivsection'>
                    <a className="link" activeclassname="sidebaractive" style={{ background: "rgb(222, 222, 222)", marginTop: "5px" }}>
                        <div className="icon text-danger" onClick={toggle}><MdOutlineExitToApp style={{ fontSize: "20px" }} /></div>
                        <div style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} className="link_text text-danger" onClick={handleLogout}>Logout</div>
                    </a>
                </div>
            </div>

            <div className={isOpen ? "mainopen" : "main"}>
                <Navbar isOpen={isOpen} />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Sidebar;