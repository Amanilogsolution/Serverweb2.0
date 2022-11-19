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
    const [submasterOpen, setSubmasterOpen] = useState(false);
    const [subdrizelmaster, setSubdrizelmaster] = useState(false);
    const [helpdeskmaster, setHelpdeskmaster] = useState(false);
    const [transactionmaster, setTransactionmaster] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            document.getElementById('mastersubdiv').style.display = "none";
            document.getElementById('masterdrizellsubdiv').style.display = "none"
            document.getElementById('masterhelpdesk').style.display = "none"
            document.getElementById('mastertransaction').style.display = "none"
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

    const handlesubmaster = () => {
        if (!submasterOpen && isOpen) {
            document.getElementById('mastersubdiv').style.display = "block"
            document.getElementById('mastertitlelink').style.background = "#603AE9"
            document.getElementById('mastertitlelink').style.color = "#fff"
            document.getElementById('footerdivsection').style.background = "#fff"

        }
        else {
            document.getElementById('mastersubdiv').style.display = "none"
            document.getElementById('mastertitlelink').style.background = "#fff"
            document.getElementById('mastertitlelink').style.color = "#000"

        }
        setSubmasterOpen(!submasterOpen)
    }
    const handlesubdrizell = () => {
        if (!subdrizelmaster && isOpen) {
            document.getElementById('masterdrizellsubdiv').style.display = "block"
            document.getElementById('masterdrizelltitlelink').style.background = "#603AE9"
            document.getElementById('masterdrizelltitlelink').style.color = "#fff"
            document.getElementById('footerdivsection').style.background = "#fff"

        }
        else {
            document.getElementById('masterdrizellsubdiv').style.display = "none"
            document.getElementById('masterdrizelltitlelink').style.background = "#fff"
            document.getElementById('masterdrizelltitlelink').style.color = "#000"

        }
        setSubdrizelmaster(!subdrizelmaster)
    }
    const handleHelpDesk = () => {
        if (!helpdeskmaster && isOpen) {
            document.getElementById('masterhelpdesk').style.display = "block"
            document.getElementById('helpdesktitlelink').style.background = "#603AE9"
            document.getElementById('helpdesktitlelink').style.color = "#fff"
            document.getElementById('footerdivsection').style.background = "#fff"

        }
        else {
            document.getElementById('masterhelpdesk').style.display = "none"
            document.getElementById('helpdesktitlelink').style.background = "#fff"
            document.getElementById('helpdesktitlelink').style.color = "#000"

        }
        setHelpdeskmaster(!helpdeskmaster)
    }

    const handleTransaction = () => {
        if (!transactionmaster && isOpen) {
            document.getElementById('mastertransaction').style.display = "block"
            document.getElementById('transactiontitlelink').style.background = "#603AE9"
            document.getElementById('transactiontitlelink').style.color = "#fff"
            document.getElementById('footerdivsection').style.background = "#fff"

        }
        else {
            document.getElementById('mastertransaction').style.display = "none"
            document.getElementById('transactiontitlelink').style.background = "#fff"
            document.getElementById('transactiontitlelink').style.color = "#000"

        }
        setTransactionmaster(!transactionmaster)
    }

    return (
        <div className="sidebarcontainer">
            <div className={isOpen ? 'sidebaropen' : 'sidebar'} onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={toggle}>
                <div className="top_section">
                    <img style={{ width: "110px", display: isOpen ? "block" : "none" }} src={logo} />
                    <div style={isOpen ? icononstyle : iconoffstyle} className="bars">
                        <MdOutlineDoubleArrow onClick={toggle} />
                    </div>
                </div>
                <div className='internalsidebar'>
                    <ul>
                        <li >
                            <NavLink to='/Dashboard' className="link navlink" title='Dashboard'>
                                <div className="icon"><FaTh /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Dashboard</div>
                            </NavLink>
                        </li>

                        <li onClick={handlesubmaster} title='Iperiscope Master' style={{ paddingRight: "0px" }}>
                            <div className="link" id='mastertitlelink' style={{ cursor: "pointer", paddingRight: "0px" }}>
                                <div className="icon" onClick={toggle}><FaUserAlt /></div>
                                <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text "> &nbsp;Iperiscope Master<span className="icon"><IoIosArrowDown /></span> </div>
                            </div>

                            <ul id='mastersubdiv' className='inneruldiv' >
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
                        </li>
                        <li title='Drizell Master'>
                            <div className="link" id='masterdrizelltitlelink' style={{ cursor: "pointer" }} onClick={handlesubdrizell}>
                                <div className="icon" onClick={toggle}><FaUserAlt /></div>
                                <span style={{ display: "flex" }} >
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Drizzle Master</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                                </span>
                            </div>

                            <ul id='masterdrizellsubdiv' className='inneruldiv'>
                                <li className='innerlink'>
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
                                        <div style={{ display: isOpen ? "block" : "none" }} >Vendor SubCategory</div>
                                    </NavLink>
                                </li>
                                <li className='innerlink'>
                                    <NavLink to='/TotalServiceActionType' className='navlink d-flex' activeclassname="sidebaractive">
                                        <MdOutlineMiscellaneousServices style={{ color: "#a12e7a" }} />&nbsp;
                                        <div style={{ display: isOpen ? "block" : "none" }} >Service Action Type</div>
                                    </NavLink>
                                </li>
                                <li className='innerlink'>
                                    <NavLink to='/TotalServiceGroup' className='navlink d-flex' activeclassname="sidebaractive">
                                        <GrServices style={{ fill: "#a12e7a" }} />&nbsp;
                                        <div style={{ display: isOpen ? "block" : "none" }} >Service Group Type</div>
                                    </NavLink>
                                </li>

                            </ul>
                        </li>
                        <li title='Device'>
                            <NavLink to='/TotalDevice' className="link navlink"  >
                                <div className="icon"><MdDevicesOther /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device</div>
                            </NavLink>
                        </li>

                        <li title='Device Compliances'>
                            <NavLink to='/TotalDeviceComp' className="link navlink" activeclassname="sidebaractive">
                                <div className="icon"><FaThList /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device Compliances</div>
                            </NavLink>
                        </li>
                        <li title='Device Task'>
                            <NavLink to='/TotalDeviceServiceTask' className="link" activeclassname="sidebaractive">
                                <div className="icon"><FaTasks /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device Task</div>
                            </NavLink>
                        </li>
                        <li title='Vendor Code'>
                            <NavLink to='/TotalVendorCode' className="link" activeclassname="sidebaractive">
                                <div className="icon"><BsJournalCode /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Code</div>
                            </NavLink>
                        </li>
                        <li title='Vendor Contract'>
                            <NavLink to='/TotalVendorContract' className="link" activeclassname="sidebaractive">
                                <div className="icon"><FaFileContract /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Contract</div>
                            </NavLink>
                        </li>


                        <li title='Help Desk'>
                            <div className="link" id='helpdesktitlelink' style={{ cursor: "pointer" }} onClick={handleHelpDesk}>
                                <div className="icon" onClick={toggle}><MdLiveHelp /></div>
                                <span style={{ display: "flex" }} >
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Help Desk</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                                </span>
                            </div>

                            <ul id='masterhelpdesk' className='inneruldiv'>
                                <li className='innerlink'>
                                    <NavLink to='/TotalTicket' className='navlink d-flex' activeclassname="sidebaractive">
                                        <HiOutlineTicket style={{ color: "#a12e7a" }} />&nbsp;
                                        <div style={{ display: isOpen ? "block" : "none" }} > Ticket</div>
                                    </NavLink>
                                </li>

                                <li className='innerlink'>
                                    <NavLink to='/TotalNewAssets' className='navlink d-flex' activeclassname="sidebaractive">
                                        <BiDevices style={{ color: "#a12e7a" }} />&nbsp;
                                        <div style={{ display: isOpen ? "block" : "none" }} > Assets</div>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li title='Transaction'>
                            <div className="link" id='transactiontitlelink' style={{ cursor: "pointer" }} onClick={handleTransaction}>
                                <div className="icon" onClick={toggle}><MdAttachMoney /></div>
                                <span style={{ display: "flex" }} >
                                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Transaction</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                                </span>
                            </div>

                            <ul id='mastertransaction' className='inneruldiv'>
                                <li className='innerlink'>
                                    <NavLink to='/TotalVendorInvoice' className='navlink d-flex' activeclassname="sidebaractive">
                                        <MdAttachMoney style={{ fill: "#a12e7a" }} />
                                        <div style={{ display: isOpen ? "block" : "none" }} > Vendor Invoice</div>
                                    </NavLink>
                                </li>
                                <li className='innerlink'>
                                    <NavLink to='/TotalVendorPayment' className='navlink d-flex' activeclassname="sidebaractive">
                                        <MdAttachMoney style={{ fill: "#a12e7a" }} />
                                        <div style={{ display: isOpen ? "block" : "none" }} > Vendor Payment</div>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                    </ul>


                </div>
                <div className="footer_section" title='Logout' id='footerdivsection'>
                    <a className="link" activeclassname="sidebaractive" style={{ borderTop: "1px solid #333" }}>
                        <div className="icon" onClick={toggle}><IoMdLogOut /></div>
                        <div style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} className="link_text" onClick={handleLogout}>Logout</div>
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