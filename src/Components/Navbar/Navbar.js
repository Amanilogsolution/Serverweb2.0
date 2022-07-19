import Logo from '../../img/awl2.png';
import React,{useState,useEffect} from 'react';
import './navbar.css'
function Navbar() {
    const [masterToogle,setMasterToogle] = useState(false)
    useEffect(() => {
            if(sessionStorage.getItem('Permission')==='allow'){
                setMasterToogle(true)
            }
    },[])

    const handlelogout = () => {
        sessionStorage.clear();
        window.location.href = '/'
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="nav-logo " src={Logo} />
                <a className="navbar-brand org-title" href="/Dashboard">IPERISCOPE </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link nav-url" href="/Dashboard">Home </a>
                        </li>
                    {masterToogle?
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle nav-url" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Master
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item nav-url2" href="/Device-Type">Device Type</a>
                                <a className="dropdown-item nav-url2" href="ShowDeviceservices">Device Services</a>
                                <a className="dropdown-item nav-url2" href="./ShowDevicetask">Device Task </a>
                                <a className="dropdown-item nav-url2" href="./ShowAgent">Agent master </a>
                                <a className="dropdown-item nav-url2" href="/Showdevicegroup">Device Group</a>
                                <a className="dropdown-item nav-url2" href="/showoperatingsystem">Operating System</a>
                                <a className="dropdown-item nav-url2" href="/showservicecompliance">Service Compliance</a>
                                <a className="dropdown-item nav-url2" href="/Totalseries">Series</a>
                            </div>
                        </li>:null
}

                        <li className="nav-item active">
                            <a className="nav-link nav-url" href="/AddDevice">Add Device</a>
                        </li>

                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle nav-url" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Device Task & Comp 
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item nav-url2" href="/DeviceTask&Compliances">Device Task & Comp </a>
                                <a className="dropdown-item nav-url2" href="/UpdateDeviceTask&Compliances">Action</a>
 
                            </div>
                        </li>

                    </ul>
                    <button className="btn btn-outline-info logout-btn mr-5" type="submit" onClick={handlelogout}>
                        Log Out
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;