import React from "react";
import { NavLink } from "react-router-dom";
import './sidebar2.css'
import { FiUserPlus } from 'react-icons/fi'
import { GrUserExpert } from 'react-icons/gr'
import { CgOrganisation } from 'react-icons/cg'
import { TiVendorMicrosoft } from 'react-icons/ti'

const Sidebar2 = (props) => {
    return (
        <>
            <aside className={props.sidebar2toggle ? 'sidebar2open sidebarcontainer2' : 'sidebar2close sidebarcontainer2'}>
                <div className="d-flex justify-content-between mt-3 mx-4 "  >
                    <h5 className="sidebar-head mt-2 mb-0">Setting</h5>
                    <span className="cursor-pointer " style={{ fontSize: '25px' }} onClick={props.togglesidebar2}>
                        &#215;</span>
                </div>
                <section className="px-2 mt-3">
                    <div className='sidebar2-navdiv d-flex px-2 align-items-center'>
                        <span className="sidebar2-icons px-3 ft-20"><FiUserPlus /></span>
                        <span> New Role</span>
                    </div>
                    <div className='sidebar2-navdiv d-flex px-2 align-items-center'>
                        <span className="sidebar2-icons px-3 ft-20"><GrUserExpert /></span>
                        <span> Assign Role</span>
                    </div>
                    <div className='sidebar2-navdiv d-flex px-2 align-items-center'>
                        <span className="sidebar2-icons px-3 ft-20"><CgOrganisation /></span>
                        <span>  Organisation Details</span>
                    </div>
                    <div className='sidebar2-navdiv d-flex px-2 align-items-center'>
                        <span className="sidebar2-icons px-3 ft-20"><TiVendorMicrosoft /></span>
                        <span>  Appliction</span>
                    </div>
                </section>
                <section className="sidebar2-themesec mt-2 px-4 ">
                    <h5>Theme</h5>
                    <div className='sidebar2-themediv px-2'>
                        <span>  Sidebar Color</span>
                        <div className="color-sec"><span className="bg-primary"></span></div>
                    </div>
                </section>

            </aside>
        </>
    )
}

export default Sidebar2;