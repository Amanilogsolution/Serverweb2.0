import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaTasks,
    FaThList
} from "react-icons/fa";

import { IoIosArrowDown, IoMdLogOut } from 'react-icons/io'
import { MdOutlineDoubleArrow, MdDevicesOther } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar.js';
import './Sidebar.css'


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [submasterOpen, setSubmasterOpen] = useState(false);
    const [subdrizelmaster, setSubdrizelmaster] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
        if (isOpen) {
            document.getElementById('mastersubdiv').style.display = "none";
            document.getElementById('masterdrizellsubdiv').style.display = "none"
        }
    };

    const icononstyle = {
        transform: "rotate(-180deg)",
        marginLeft: "60%"
    }
    const iconoffstyle = {
        marginLeft: "0%"
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
        if (!subdrizelmaster  && isOpen) {
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
    return (
        <div className="sidebarcontainer">
            <div className={isOpen ? 'sidebaropen' : 'sidebar'}>
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo </h1>
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
                            <div style={{ display: isOpen ? "block" : "none", marginLeft: "-10px" }} className="link_text ">Iperiscope Master<span className="icon"><IoIosArrowDown /></span> </div>
                            {/* <div style={{ display: isOpen ? "block" : "none" }} className="icon"></div> */}
                        </div>

                        <ul id='mastersubdiv' className='inneruldiv' >
                            <li className='innerlink'>
                                <NavLink to='/Totalseries' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Series</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalDeviceType' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/Showdevicegroup' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Group</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/Showoperatingsystem' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Operating System</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/ShowDeviceservices ' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Device Services</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalServicecompliance' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Series Compliances</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalDeviceTask' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Devices Task</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalAgent' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Agent Master</div>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li title='Drizell Master'>
                        <div className="link" id='masterdrizelltitlelink' style={{ cursor: "pointer" }} onClick={handlesubdrizell}>
                            <div className="icon" onClick={toggle}><FaUserAlt /></div>
                            <span style={{ display: "flex" }} >
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Drizell Master</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                            </span>
                        </div>

                        <ul id='masterdrizellsubdiv' className='inneruldiv'>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Location</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/TotalEmployee' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Employee</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Agent</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Asset Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Asset Status</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Manufacturer</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Software</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Issue Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Purchase Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Contract Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Priority</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Ticket Status</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Billing Frequency</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Vendor Category</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Vendor Sub Category</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Service Action Type</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
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

                    <li title='Comment'>
                        <NavLink to='/TotalDeviceComp' className="link navlink" activeclassname="sidebaractive">
                            <div className="icon"><FaThList /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device Compliances</div>
                        </NavLink>
                    </li>
                    <li title='Product'>
                        <NavLink to='/TotalDeviceServiceTask' className="link" activeclassname="sidebaractive">
                            <div className="icon"><FaTasks /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device Task</div>
                        </NavLink>
                    </li>
                    <li title='Product List'>
                        <NavLink to='/productList' className="link navlink" activeclassname="sidebaractive">
                            <div className="icon"><FaThList /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Product List</div>
                        </NavLink>
                    </li>

                </ul>
                </div>
                <div className="footer_section" title='Logout' id='footerdivsection'>
                    <a className="link" activeclassname="sidebaractive" style={{ borderTop: "1px solid #333" }}>
                        <div className="icon" onClick={toggle}><IoMdLogOut /></div>
                        <div style={{ display: isOpen ? "block" : "none", cursor: "pointer" }} className="link_text">Logout</div>
                    </a>
                </div>
            </div>

            <div className={isOpen ? "mainopen" : "main"}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Sidebar;