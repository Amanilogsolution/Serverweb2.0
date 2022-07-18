import Logo from '../../img/awl2.png';
import React from 'react';
import './navbar.css'
function Navbar() {
    const handlelogout = () => {
        sessionStorage.clear();
        window.location.href = '/'
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="nav-logo " src={Logo} />
                <a className="navbar-brand" href="/Dashboard">IPERISCOPE </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link nav-url" href="/Dashboard">Home </a>
                        </li>
                    
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle nav-url" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Master
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item nav-url2" href="/Device-Type">Device Type</a>
                                <a className="dropdown-item nav-url2" href="#">Device Group</a>
                                <a className="dropdown-item nav-url2" href="ShowDeviceservices">Device Services</a>
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-outline-info logout-btn" type="submit" onClick={handlelogout}>
                        Log Out
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar;