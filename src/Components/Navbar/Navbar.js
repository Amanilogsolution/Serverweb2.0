import Logo from '../../img/awl2.png';
import React,{useState,useEffect} from 'react';
import './navbar.css'
function Navbar() {
    const [show,setShow] =useState(false);
    const handlelogout = () => {
        sessionStorage.clear();
        window.location.href = '/'
    }
    useEffect(() =>{
      if(sessionStorage.getItem('Permission')=== 'allow'){
        setShow(true)
      }  
    } )
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="nav-logo " src={Logo} />
                <a className="navbar-brand org-title ml-3" href="/Dashboard">IPERISCOPE </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link nav-url" href="/Dashboard">Home </a>
                        </li>
                        {show?
                    
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle nav-url" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Master
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item nav-url2" href="/Totalseries">Series</a>

                                <a className="dropdown-item nav-url2" href="/Device-Type">Device Type</a>
                                <a className="dropdown-item nav-url2" href="/Showdevicegroup">Device Group</a>
                                <a className="dropdown-item nav-url2" href="/showoperatingsystem">Operating System</a>
                                <a className="dropdown-item nav-url2" href="ShowDeviceservices">Device Services</a>

                                <a className="dropdown-item nav-url2" href="/showservicecompliance">Service Compliance</a>
                                <a className="dropdown-item nav-url2" href="./ShowDevicetask">Device Task </a>
                                <a className="dropdown-item nav-url2" href="./ShowAgent">Agent master </a>
                             
                              
                            </div>
                        </li>:null}

                        <li className="nav-item active">
                            <a className="nav-link nav-url" href="/ShowDevice">Device</a>
                        </li>

                        <li className="nav-item dropdown active">
                            {/* <a className="nav-link nav-url" href="/DeviceTask&Compliances">Device Task & Comp </a> */}
                            <a className="nav-link dropdown-toggle nav-url" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Device Task & Comp 
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item nav-url2" href="/UpdateDeviceTask&Compliances">Show Device Comp</a>
                            <a className="dropdown-item nav-url2" href="/Showdevicetaskes">Show Device Task</a>

                                <a className="dropdown-item nav-url2" href="/DeviceTask&Compliances">Add Device Task & Comp </a>
 
                            </div>
                        </li>

                    </ul>
                    <h5 className='mr-4'>Welcome {sessionStorage.getItem('UserName')}</h5>
                    <button className="btn btn-outline-danger logout-btn mr-5" type="submit" onClick={handlelogout}>
                        Log Out
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;