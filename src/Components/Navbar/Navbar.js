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

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img className="nav-logo " src={Logo} />
                <a className="navbar-brand" href="/Dashboard">AWL India </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/Dashboard">Home </a>
                        </li>
                    
                        <li className="nav-item dropdown active">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Master
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/Device-Type">Device Type</a>
                                <a className="dropdown-item" href="#">Device Group</a>
                                {/* <a className="dropdown-item" href="#">Device </a> */}
                            </div>
                        </li>
                    </ul>
                    <button className="btn btn-outline-info " type="submit" onClick={handlelogout}>
                        Log Out
                    </button>
                </div>
            </nav>



            {/* 
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <img
                        className="nav-logo "
                        src={Logo} />
                    <a className="navbar-brand" href="/Dashboard">
                        AWL India
                    </a>

                    <button

                        className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"
                        //  className="navbar-toggler"
                        // type="button"
                        // data-toggle="collapse"
                        // data-target="/navbarSupportedContent"
                        // aria-controls="navbarSupportedContent"
                        // aria-expanded="false"
                        // aria-label="Toggle navigation" 
                    >

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Dashboard">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <button className="btn btn-outline-info " type="submit" onClick={handlelogout}>
                            Log Out
                        </button>

                    </div>
                </div>
            </nav> */}

        </>
    )
}

export default Navbar;