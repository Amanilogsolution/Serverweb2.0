import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";

import { IoIosArrowDown, IoMdLogOut } from 'react-icons/io'
import { MdOutlineDoubleArrow } from 'react-icons/md'
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
            document.getElementById('mastersubdiv').style.display = "none"
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
        if (!submasterOpen) {
            document.getElementById('mastersubdiv').style.display = "block"
            document.getElementById('mastertitlelink').style.background = "#603AE9"
            document.getElementById('mastertitlelink').style.color = "#fff"

        }
        else {
            document.getElementById('mastersubdiv').style.display = "none"
            document.getElementById('mastertitlelink').style.background = "#fff"
            document.getElementById('mastertitlelink').style.color = "#000"

        }
        setSubmasterOpen(!submasterOpen)
    }
    const handlesubdrizell = () => {
        if (!subdrizelmaster) {
            document.getElementById('masterdrizellsubdiv').style.display = "block"
            document.getElementById('masterdrizelltitlelink').style.background = "#603AE9"
            document.getElementById('masterdrizelltitlelink').style.color = "#fff"

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
                        <div className="link" id='masterdrizelltitlelink' style={{ cursor: "pointer" }}>
                            <div className="icon" onClick={toggle}><FaUserAlt /></div>
                            <span style={{ display: "flex" }} onClick={handlesubdrizell}>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text ">Drizell Master</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="icon"><IoIosArrowDown /></div>
                            </span>
                        </div>

                        <ul id='masterdrizellsubdiv' className='inneruldiv'>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Master</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Master</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Master</div>
                                </NavLink>
                            </li>
                            <li className='innerlink'>
                                <NavLink to='/about' className='navlink' activeclassname="sidebaractive">
                                    <div style={{ display: isOpen ? "block" : "none" }} >Master</div>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li title='Analytics'>
                        <NavLink to='/analytics' className="link navlink"  >
                            <div className="icon"><FaRegChartBar /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Device</div>
                        </NavLink>
                    </li>

                    <li title='Comment'>
                        <NavLink to='/comment' className="link navlink" activeclassname="sidebaractive">
                            <div className="icon"><FaCommentAlt /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Comment</div>
                        </NavLink>
                    </li>
                    <li title='Product'>
                        <NavLink to='/product' className="link" activeclassname="sidebaractive">
                            <div className="icon"><FaShoppingBag /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Product</div>
                        </NavLink>
                    </li>
                    <li title='Product List'>
                        <NavLink to='/productList' className="link navlink" activeclassname="sidebaractive">
                            <div className="icon"><FaThList /></div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Product List</div>
                        </NavLink>
                    </li>

                </ul>
                <div className="footer_section" title='Logout' >
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