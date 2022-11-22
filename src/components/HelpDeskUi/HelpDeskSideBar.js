import React, { useState } from 'react';
import { FaLocationArrow,FaFileContract,FaFileInvoiceDollar } from 'react-icons/fa';
import { RiUserFill } from 'react-icons/ri';
import { MdOutlineDoubleArrow,MdPayment } from 'react-icons/md';
import { BsWindows } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Footer from '../Sidebar/Footer/Footer';
import Navbar from '../Sidebar/Navbar.js';
// import '../Sidebar/Sidebar.css'
import '../Sidebar/Sidebar'
import logo from '../../image/drizzle_logo.jpg'
import './HelpDeskSideBar.css'


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const icononstyle = {
        transform: "rotate(-180deg)",
        marginLeft: "40%"
    }
    const iconoffstyle = {
        marginLeft: "0%"
    }

    return (
        <div className="HelpDeskSideBar">
            <div className={isOpen ? 'sidebaropen' : 'sidebar'} >
                <div className="top_section">
                    <img style={{ width: "110px", display: isOpen ? "block" : "none" }} src={logo} />
                    <div style={isOpen ? icononstyle : iconoffstyle} className="bars">
                        <MdOutlineDoubleArrow onClick={toggle} />
                    </div>
                </div>
                <div className='internalsidebar'>
                    <ul>
                        <li>
                            <NavLink to='/HelpLocation' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Location</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpEmployee' className="link navlink" title='Dashboard' >
                                <div className="icon"><RiUserFill  style={{fontSize:"22px"}}/></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Employee</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpSoftware' className="link navlink" title='Dashboard' >
                                <div className="icon"><BsWindows /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Software</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpVendorCode' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Code</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpVendorContract' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaFileContract /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Contract</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpInvoice' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaFileInvoiceDollar /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Invoice</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpVendorPayment' className="link navlink" title='Dashboard' >
                                <div className="icon"><MdPayment /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Payment</div>
                            </NavLink>
                        </li>

                    </ul>

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