import { FaUserCircle } from 'react-icons/fa'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [profileOpen,setProfileOpen] = useState(false);
    
    const navheight = {
        height: "60px",
        padding: "10px 0px 0px 15px ",
        boxShadow:"3px 3px 10px gray",
        borderRadius: "10px 0px 0px 10px",
        position:"relative"
    }
    const profile = {
        position: "absolute",
        right: "5%",
        fontSize: "38px",
        color:"rgb(164,43,122)",
        cursor:"pointer"
    }
    const openProfile = () =>{
        setProfileOpen(!profileOpen)
    }

    const handleLogout=()=>{
      sessionStorage.clear()
      window.location.href='/'
    }
    return (
        <>
            <div className="navbarcontainer bg-white mb-3 d-flex " style={navheight}>
                <h5 style={{ color: "#603AE9",margin:"7px" }}>Drizlle</h5>
                <span onClick={openProfile}>
                <FaUserCircle style={profile} />
                </span>
                {
                  profileOpen && (
                    <div className="menu">
                      <div class="card-body">
                        <h5>Hello</h5>
                        <li>
                          <a>View</a>
                        </li>
                        <li>
                          <a>Update</a>
                        </li>
                        <hr style={{margin:"9px 0 5px 0"}}/>
                        <li>
                          <a onClick={handleLogout}>Logout</a>
                        </li>
                      </div>
                    </div>
                  )
                }
                {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Navbar;


// import './Navbar.css';
// import React from "react";
// import Landingimg from '../../image/landingimg.svg'


// const Navbar = () => {


//     return (
//         <div>


//             <nav className={`main-header navbar navbar-expand bg-light`}>
//                 <ul className='navbar-nav'>
//                     <li className="nav-item">
//                         <a className="nav-link" data-widget="pushmenu" href="#" role="button">
//                             <i className="fas fa-bars"></i>
//                         </a>
//                     </li>
//                     <li className="nav-item d-none d-sm-inline-block">
//                         <a href="/home" className="nav-link">
//                             Home
//                         </a>
//                     </li>
//                 </ul>

//                 <ul className="navbar-nav ml-auto" style={{ position: "relative" }}>
//                     <li className="nav-item dropdown" >
//                         <a className="nav-link" data-toggle="dropdown">
//                             <b> Financial Year <i className="fa fa-angle-down" aria-hidden="true"></i></b>
//                         </a>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right" >
//                             <div className="orgcard card" style={{ width: "50%" }}>
//                                 <ul className="list-group list-group-flush">

//                                 </ul>

//                             </div>

//                         </div>
//                     </li>

//                     {/*########################## All Organisation Start ################################# */}
//                     <li className="nav-item dropdown" >
//                         <a className="nav-link" data-toggle="dropdown">
//                             <b>Org Name <i className="fa fa-angle-down" aria-hidden="true"></i></b>
//                         </a>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right ">
//                             <div className="orgcard card " >
//                                 <div className={`card-body bg-light`}>
//                                     <img className="card-img-top " src={Landingimg}
//                                         alt="Card image cap" style={{ height: "80px", width: "80px", marginLeft: "50%", transform: "translate(-50%)", borderRadius: "50%", border: "1px solid black" }} />
//                                 </div>
//                                 <ul className="list-group list-group-flush">

//                                     <li className={`list-group-item bg-light`}><b >My Orgaisation</b>
//                                         <a href='/org' style={{ float: "right", textDecoration: "underline" }} className='text-primary'> Add Organisation</a>
//                                     </li>
//                                 </ul>

//                             </div>

//                         </div>
//                     </li>
//                     {/*########################## All Organisation Start ################################# */}

//                     {/* ######################## Setting  Start #################################*/}
//                     <li id='setting_all' className="nav-item dropdown" style={{ display: "none" }}>
//                         <a className="nav-link" data-toggle="dropdown" href="#">
//                             <i className="fas fa-cog"></i>
//                         </a>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right ">
//                             <div className={`orgcard card bg-light`}  >
//                                 <div className="card-body" style={{ display: "flex" }}>
//                                     <span style={{ fontSize: "20px" }}>Setting</span>
//                                 </div>
//                                 <ul className="list-group list-group-flush ">
//                                     <a href="/EditOrganisation" id='org_profile' > <li className={`list-group-item bg-light `}><i className={`fa fa-building text-primary`}></i> &nbsp;
//                                         <b>Orgaisation profile</b> </li></a>
//                                     <a href="/ShowFinancialyear" id='fincial_year_view'><li className={`list-group-item bg-light`}><i className={`fa fa-calendar text-primary`} aria-hidden="true"></i>&nbsp;&nbsp;
//                                         <b>Financial Year</b> </li></a>
//                                     <a href="/TotalLocation" id='branchs' > <li className={`list-group-item bg-light`}><i className={`fa fa-map-marker text-primary`} aria-hidden="true"></i>&nbsp;&nbsp;
//                                         <b>Branches</b> </li></a>
//                                     <a href="/ShowPaymentTerm" id='payment_term' > <li className={`list-group-item bg-light`}><i className={`fa fa-university text-primary`} aria-hidden="true"></i>&nbsp;&nbsp;
//                                         <b>Payment Terms</b> </li></a>
//                                     <a href="/ShowCrm" id='crm_data' > <li className={`list-group-item bg-light`}><i className={`fa fa-link text-primary`} aria-hidden="true"></i>&nbsp;&nbsp;
//                                         <b>CRM Master</b> </li></a>
//                                     <a href="/Showcompliances" id='compliances' > <li className={`list-group-item bg-light`}><i className={`fa fa-tasks text-primary`} aria-hidden="true"></i>
//                                         &nbsp;&nbsp;
//                                         <b>Compliances</b> </li></a>
//                                     <a href="/AddRoles" id='roles' > <li className={`list-group-item bg-light`}><i className={`fa fa-users text-primary`} aria-hidden="true"></i>
//                                         &nbsp;&nbsp;
//                                         <b>User Roles</b> </li></a>
//                                 </ul>
//                             </div>
//                         </div>
//                     </li>

//                     {/* ######################## Setting  END #################################*/}


//                     <li className="nav-item dropdown " >
//                         <a className="nav-link" data-toggle="dropdown" href="#">
//                             <i className="far fa-bell"></i>
//                             <span className={`badge badge-primary navbar-badge`}>15</span>
//                         </a>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right ">
//                             <span className="dropdown-item dropdown-header">
//                                 15 Notifications
//                             </span>
//                             <div className="dropdown-divider"></div>
//                             <a href="#" className="dropdown-item">
//                                 <i className="fas fa-envelope mr-2"></i> 4 new messages
//                                 <span className="float-right text-muted text-sm">3 mins</span>
//                             </a>
//                             <div className="dropdown-divider"></div>
//                             <a href="#" className="dropdown-item">
//                                 <i className="fas fa-users mr-2"></i> 8 friend requests
//                                 <span className="float-right text-muted text-sm">12 hours</span>
//                             </a>
//                             <div className="dropdown-divider"></div>
//                             <a href="#" className="dropdown-item">
//                                 <i className="fas fa-file mr-2"></i> 3 new reports
//                                 <span className="float-right text-muted text-sm">2 days</span>
//                             </a>
//                             <div className="dropdown-divider"></div>
//                             <a href="#" className="dropdown-item dropdown-footer">
//                                 See All Notifications
//                             </a>
//                         </div>
//                     </li>
//                     <li className="nav-item" >
//                         <a className="nav-link" data-widget="fullscreen" href="#" role="button">
//                             <i className="fas fa-expand-arrows-alt"></i>
//                         </a>
//                     </li>

//                     <li className="nav-item profilediv dropdown p-0" >
//                         <a className="nav-link p-0" data-toggle="dropdown" href="#" >
//                             <div className="user-panel mr-7 p-0" >
//                                 <div className="image mr-3" style={{ height: "40px", width: "40px", position: "relative", padding: "0%" }}>
//                                     <img src={Landingimg} className="img-circle mr-4 "
//                                         alt="User Image" style={{ border: "2px solid #fff", width: "100%", height: "100%" }} /></div></div>
//                         </a>
//                         <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right ">
//                             <div className={`profilcard card bg-light`} >
//                                 <div className="card-body">
//                                     <img className="card-img-top " src={Landingimg} alt="Card image cap" style={{ height: "80px", width: "80px", marginLeft: "50%", transform: "translate(-50%)", borderRadius: "50%", border: "1px solid #fff" }} />
//                                     <h6 className='text-center font-weight-bold'>{localStorage.getItem('User_name')} </h6>
//                                     <div className='text-center  font-weight-bold'>
//                                         <a href="/LoginDetails">Profile</a> |
//                                         <a href="/ChangePassword" style={{ color: "green" }}> Change Password</a><br />
//                                         <a href="#" style={{ color: "red" }}> Logout</a>
//                                     </div>
//                                     <hr />
//                                     <div className='theme'>Button Color
//                                         <div className='color-option'>
//                                             <button className='colordiv bg-light' value="light"></button>
//                                             <button className='colordiv bg-primary' value="primary"></button>
//                                             <button className='colordiv bg-success' value="success"></button>
//                                             <button className='colordiv bg-dark' value="dark"></button>
//                                             <button className='colordiv bg-info' value="info"></button>
//                                             <button className='colordiv bg-warning' value="warning"></button>
//                                             <button className='colordiv bg-danger' value="danger"></button>
//                                         </div><br />
//                                         <div className='switchdiv'>
//                                             <label>Light</label>
//                                             <label className="switch">

//                                                 <input type="checkbox" id="switchbtn" />

//                                                 <span className="slider round"></span>
//                                             </label>
//                                             <label>Dark</label>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </li>
//                     {/*------ Profile end ---------------*/}
//                 </ul>
//             </nav>

//         </div>
//     );
// };

// export default Navbar;

