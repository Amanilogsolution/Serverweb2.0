import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { AddEmployees, ActiveLocation } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function AddEmployee() {
    const [loading, setLoading] = useState(true)
    const [locationlist, setLocationlist] = useState([])
    const [numcount, setNumcount] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            const tablelocation = await ActiveLocation();
            setLocationlist(tablelocation)
        }
        fetchdata();

    }, [])

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)

        const employee_name = document.getElementById('employee_name').value;
        const employee_id = employee_name.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const employee_email = document.getElementById('employee_email').value;
        const employee_number = document.getElementById('employee_number').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;

        const username = sessionStorage.getItem('UserName');

        if (!location || !employee_name || !employee_email) {
            alert("Please fill the mandatory field ...")
            setLoading(true)
        }
        else {
            const result = await AddEmployees(employee_id, employee_name, location, employee_email, employee_number, company, username);
            if (result === 'Added') {
                alert('Employee Added ')
                window.location.href = './TotalEmployee'
            }
            else {
                alert("Server Error");
                setLoading(true)

            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'  >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Employee</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Employee</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalEmployee' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">
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
                                                    onChange={(e) => { if (e.target.value.length === 11) return false; else { setNumcount(e.target.value) } }}
                                                />
                                            </div>
                                        </div>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Employee</button>&nbsp;
                                            <button type="reset" className="btn btn-secondary ">Reset</button>
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