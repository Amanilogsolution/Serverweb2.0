import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaTasks,
    FaThList, FaFileContract
} from "react-icons/fa";

import { IoIosArrowDown, IoMdLogOut } from 'react-icons/io'
import {
    MdOutlineDoubleArrow, MdDevicesOther, MdLiveHelp,
    MdAttachMoney, MdLowPriority, MdOutlinePrecisionManufacturing,
    MdOutlineMiscellaneousServices, MdOutlineDevicesOther, MdAddTask
} from 'react-icons/md'
import { BsJournalCode, BsBugFill } from 'react-icons/bs'
import { BiPurchaseTag, BiCategory, BiCategoryAlt, BiDevices } from 'react-icons/bi'

import { HiOutlineTicket, HiOutlineRefresh, HiLink } from 'react-icons/hi'
import { GrStatusGood, GrServices, GrCompliance } from 'react-icons/gr'
import { GiContract } from 'react-icons/gi'

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
                                <NavLink to='/Dashboard' className="link navlink" title='Dashboard'>
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
                                    <HiLink style={{ color: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Series</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalDeviceType' className='navlink d-flex' activeclassname="sidebaractive">
                                    <VscTypeHierarchySub style={{ fill: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/Showdevicegroup' className='navlink d-flex' activeclassname="sidebaractive">
                                    <MdOutlineDevicesOther style={{ fill: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Group</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalOperatingSystem' className='navlink d-flex' activeclassname="sidebaractive">
                                    <TiVendorMicrosoft style={{ color: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Operating System</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/ShowDeviceservices ' className='navlink  d-flex' activeclassname="sidebaractive">
                                    <BiDevices style={{ color: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Services</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalServicecompliance' className='navlink d-flex' activeclassname="sidebaractive">
                                    <GrCompliance style={{ color: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Series Compliances</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalDeviceTask' className='navlink d-flex' activeclassname="sidebaractive">
                                    <MdAddTask style={{ color: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Devices Task</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalAgent' className='navlink d-flex' activeclassname="sidebaractive">
                                    <FaUserAlt style={{ color: "#a12e7a" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} >Agent Master</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div> */}


                    {/* Drizzle */}


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
                                    <div className="icon"><FaFileContract /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Assets</div>
                                </NavLink>
                            </li>
                            <li title='Vendor Contract' style={{ listStyle: "none" }}>
                                <NavLink to='/TotalVendorContract' className="link" activeclassname="sidebaractive">
                                    <div className="icon"><FaFileContract /></div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Contract</div>
                                </NavLink>
                            </li>


                            <li onClick={handleinner2toggledrizzle} style={{ listStyle: "none" }}>
                                <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                    <div className="icon" onClick={toggle}><FaUserAlt /></div>
                                    <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp; Master<span className="icon"><IoIosArrowDown /></span> </div>
                                </div>
                            </li>

                            {/* Master list */}
                            <div className="innersubdiv" id="subdrizzleinner" style={{ display: "none" }}>
                                <ul style={{ paddingLeft: "0px", marginBottom: "0px" }}>
                                    <li className='innerlink' >
                                        <NavLink to='/TotalLocations' className='navlink d-flex' activeclassname="sidebaractive">
                                            <VscLocation style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} > Location</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalEmployee' className='navlink d-flex' activeclassname="sidebaractive">
                                            <FaUserAlt style={{ color: "#a12e7a" }} /> &nbsp;
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
                                            <VscTypeHierarchySub style={{ fill: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Asset Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalAssetStatus' className='navlink d-flex' activeclassname="sidebaractive">
                                            <GrStatusGood style={{ fill: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Asset Status</div>
                                        </NavLink>
                                    </li>
                                    {/* <li className='innerlink'>
                                        <NavLink to='/TotalNewAssets' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BiDevices style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} > Assets</div>
                                        </NavLink>
                                    </li> */}
                                    <li className='innerlink'>
                                        <NavLink to='/TotalManufacturer' className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdOutlinePrecisionManufacturing style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Manufacturer</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalSoftware' className='navlink d-flex' activeclassname="sidebaractive">
                                            <TiVendorMicrosoft style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Software</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalIssueType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BsBugFill style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Issue Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalPurchaseType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BiPurchaseTag style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Purchase Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalContractType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <GiContract style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Contract Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalPriority' className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdLowPriority style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Priority</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalTicketStatus' className='navlink d-flex' activeclassname="sidebaractive">
                                            <GrStatusGood style={{ fill: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Ticket Status</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalBillingFreq' className='navlink d-flex' activeclassname="sidebaractive">
                                            <HiOutlineRefresh style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Billing Frequency</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalVendorCategory' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BiCategory style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Vendor Category</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalVendSubCate' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BiCategoryAlt style={{ color: "#a12e7a" }} />
                                            <div style={{ display: isOpen ? "block" : "none", fontSize: "17px" }} >Vendor SubCategory</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalServiceActionType' className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdOutlineMiscellaneousServices style={{ color: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none", fontSize: "17px" }} >Service Action Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink'>
                                        <NavLink to='/TotalServiceGroup' className='navlink d-flex' activeclassname="sidebaractive">
                                            <GrServices style={{ fill: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none", fontSize: "17px" }} >Service Group Type</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink' style={{ borderBottom: "2px solid black" }}>
                                        <NavLink to='/TotalVendorCode' className='navlink d-flex' activeclassname="sidebaractive">
                                            <BsJournalCode style={{ fill: "#a12e7a" }} />&nbsp;
                                            <div style={{ display: isOpen ? "block" : "none" }} >Vendor Master</div>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                            <li onClick={handleinnertoggletransation} style={{ listStyle: "none" }}>
                                <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                    <div className="icon" onClick={toggle}><MdAttachMoney /></div>
                                    <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp; Transaction<span className="icon"><IoIosArrowDown /></span> </div>
                                </div>
                            </li>
                            <div className="innerdiv" id="subtransationinner" style={{ display: "none" }}>
                                <ul style={{ paddingLeft: "0px" }}>
                                    <li className='innerlink' style={{ margingLeft: "0px" }}>
                                        <NavLink to='/TotalVendorInvoice' className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdAttachMoney style={{ fill: "#a12e7a" }} />
                                            <div style={{ display: isOpen ? "block" : "none" }} > Vendor Invoice</div>
                                        </NavLink>
                                    </li>
                                    <li className='innerlink' style={{ borderBottom: "2px solid black" }}>
                                        <NavLink to='/TotalVendorPayment' className='navlink d-flex' activeclassname="sidebaractive">
                                            <MdAttachMoney style={{ fill: "#a12e7a" }} />
                                            <div style={{ display: isOpen ? "block" : "none" }} > Vendor Payment</div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    {/* Transaction */}

                    <div onClick={handleinnertogglehelpdesk} style={{ marginTop: "0px" }}>
                        <div className="link" id='masterdrizelltitlelink' style={{ cursor: "pointer" }}>
                            <div className="icon" onClick={toggle}><MdLiveHelp /></div>
                            <span style={{ display: "flex" }} >
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Help Desk</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                            </span>
                        </div>
                    </div>

                    <div className="innerdiv" id="subhelpdeskinner" style={{ display: "none" }}>
                        <ul style={{ paddingLeft: "20px", marginBottom: "0px" }}>
                            <li className='innerlink' >
                                <NavLink to='/TotalTicket' className='navlink d-flex' activeclassname="sidebaractive">
                                    <HiOutlineTicket style={{ color: "#a12e7a", marginTop: "5px" }} />&nbsp;
                                    <div style={{ display: isOpen ? "block" : "none" }} > Ticket</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer_section" title='Logout' id='footerdivsection'>
                    <a className="link" activeclassname="sidebaractive" style={{ borderTop: "1px solid #333" }}>
                        <div className="icon text-danger" onClick={toggle}><IoMdLogOut /></div>
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