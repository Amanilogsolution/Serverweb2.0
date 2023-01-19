import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { AddEmployees, ActiveLocation, insertUserLogin } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { GrFormClose } from "react-icons/gr"
import {RiArrowGoBackFill} from 'react-icons/ri'


function AddEmployee() {
    const [loading, setLoading] = useState(true)
    const [locationlist, setLocationlist] = useState([])
    const [numcount, setNumcount] = useState()
    const [passwordshow, setPasswordshow] = useState(false);
    const [agentcheck, setAgentcheck] = useState(false)
    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const tablelocation = await ActiveLocation(org);
            setLocationlist(tablelocation)
        }
        fetchdata();

    }, [])

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const employee_name = document.getElementById('employee_name').value;
        const employee_id = employee_name.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const employee_email = document.getElementById('employee_email').value;
        const employee_number = document.getElementById('employee_number').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const username = localStorage.getItem('UserName');
        const user_id = document.getElementById('user_id').value
        const password = document.getElementById('password').value
        setLoading(true)

        if (!location || !employee_name || !employee_email) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please Enter Mandatory Field", title: "Warning", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = localStorage.getItem('Database')
            if (agentcheck == true) {
                const inserLogin = await insertUserLogin(employee_name, user_id, password, org);

                const result = await AddEmployees(org, employee_id, employee_name, location, employee_email, employee_number, company, username);
                if (result === 'Added') {
                    setDatas({ ...datas, message: "Employee Added", title: "success", type: "success", route: "/TotalEmployee", toggle: "true" })
                    document.getElementById('snackbar').style.display = "block"
                }
                else if (result === 'Already') {
                    document.getElementById('subnitbtn').disabled = false
                    setDatas({ ...datas, message: "Employee Already Exist", title: "warning", type: "Error", toggle: "true" })
                    document.getElementById('snackbar').style.display = "block"
                }
                else {
                    document.getElementById('subnitbtn').disabled = false
                    setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddEmployee", toggle: "true" })
                    document.getElementById('snackbar').style.display = "block"
                }
            }
            else {
                const result = await AddEmployees(org, employee_id, employee_name, location, employee_email, employee_number, company, username);
                if (result === 'Added') {
                    setDatas({ ...datas, message: "Employee Added", title: "success", type: "success", route: "/TotalEmployee", toggle: "true" })
                    document.getElementById('snackbar').style.display = "block"
                }
                else if (result === 'Already') {
                    document.getElementById('subnitbtn').disabled = false
                    setDatas({ ...datas, message: "Employee Already Exist", title: "warning", type: "Error", toggle: "true" })
                    document.getElementById('snackbar').style.display = "block"
                }
                else {
                    document.getElementById('subnitbtn').disabled = false
                    setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddEmployee", toggle: "true" })
                    document.getElementById('snackbar').style.display = "block"
                }

            }
        }

    }

    const handletoggleuserid = () => {
        if (agentcheck) {
            document.getElementById('useriddiv').style.display = 'none'
        }
        else {
            document.getElementById('useriddiv').style.display = 'flex'
        }
        setAgentcheck(!agentcheck)
    }
    return (
        <>
            {
                loading ?
                    <Sidebar >

                        {/* ################# Snackbar ##################### */}

                        <div id="snackbar" style={{ display: "none" }}>
                            <div className={`${datas.toggle === "true" ? "received" : ""} notification`}>
                                <div className={`notification__message message--${datas.type}`}>
                                    <h1>{datas.title}</h1>
                                    <p>{datas.message}</p>

                                    <button
                                        onClick={() => {
                                            setDatas({ ...datas, toggle: 'false' });
                                            window.location.href = datas.route

                                        }}
                                    >
                                        <GrFormClose />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* ################# Snackbar ##################### */}

                        <div className='main_container'  >
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Employee <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Add Employee</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalEmployee' }} >Back < RiArrowGoBackFill/></button>
                            </div>
                                <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card py-3">
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="row">

                                                <div className="col-md-6" >
                                                    <label htmlFor='company'>Company</label>
                                                    <input type="text" className="form-control" id='company' />
                                                </div>
                                                <div className="col-md-6" >
                                                    <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                    <select className="form-select" id='location' required >
                                                        <option value='' hidden>Select Location</option>
                                                        {
                                                            locationlist.map((item, index) =>
                                                                <option key={index}>{item.location_name}</option>
                                                            )
                                                        }
                                                    </select>
                                                </div>


                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6" >
                                                    <label htmlFor='employee_name'>Employee Name <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='employee_name' />
                                                </div>
                                                <div className="col-md-6" >
                                                    <label htmlFor='employee_email'>Employee Email <span className='text-danger'>*</span></label>
                                                    <input type="email" className="form-control" id='employee_email' />
                                                </div>
                                            </div>

                                            <div className="row mt-2">
                                                <div className="col-md-6" >
                                                    <label htmlFor='employee_number'>Phone Number </label>
                                                    <input type="number" className="form-control" id='employee_number' value={numcount}
                                                        onChange={(e) => { if (e.target.value.length === 11) return false; else { setNumcount(e.target.value) } }} />
                                                </div>
                                                <div className="col-md-6 d-flex flex-column justify-content-center" >
                                                    <div className="d-flex  align-items-center" >
                                                        <label htmlFor='portal_access' className='col-md-3'>Agent</label>
                                                        <input type="checkbox" className="" id='portal_access' checked={agentcheck ? true : false} style={{ width: "18px", height: "18px" }} onChange={handletoggleuserid} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2" id='useriddiv' style={{ display: "none" }}>
                                                <div className="col-md-6" >
                                                    <label htmlFor='user_id'>User Id <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='user_id' />
                                                </div>

                                                <div className="col-md-6">
                                                    <label htmlFor="password">Password <span className='text-danger'>*</span></label>
                                                    <div className="input-group">
                                                        <input type={passwordshow ? "text" : "password"} className="form-control" placeholder="Enter password" id="password" required />
                                                        <div className="input-group-append" onClick={() => { setPasswordshow(!passwordshow) }}>
                                                            <span className="input-group-text h-100 w-100" >{passwordshow ? <AiFillEye style={{ fontSize: "22px" }} /> : <AiFillEyeInvisible style={{ fontSize: "22px" }} />}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="form-group mt-3 mx-2" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Employee</button>
                                                <button type="reset" className="btn btn-secondary mx-3">Reset</button>
                                            </div>
                                        </form>
                                    </article>
                                </div>
                            </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default AddEmployee;