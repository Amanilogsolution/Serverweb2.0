import React, { useState } from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Footer from '../Sidebar/Footer/Footer';
import Navbar from '../Sidebar/Navbar.js';
import '../Sidebar/Sidebar.css'
import logo from '../../image/drizzle_logo.jpg'


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
        <div className="HelpDeskSidebar">
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
                        <li>
                            <NavLink to='/HelpLocation' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Location</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpEmployee' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Employee</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpSoftware' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Software</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpVendorCode' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">VendorCode</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpVendorContract' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Vendor Contract</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpInvoice' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Invoice</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/HelpVendorPayment' className="link navlink" title='Dashboard' >
                                <div className="icon"><FaLocationArrow /></div>
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