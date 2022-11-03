import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetEmployees, UpdateEmployees, ActiveLocation } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditEmployee() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({});
    const [locationlist, setLocationlist] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetEmployees(sessionStorage.getItem('employeesno'))
            setData(result[0]);
            const tablelocation = await ActiveLocation();
            setLocationlist(tablelocation)
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const employee_name = document.getElementById('employee_name').value;
        const employee_email = document.getElementById('employee_email').value;
        const employee_number = document.getElementById('employee_number').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('employeesno')

        if (!location || !employee_name || !employee_email) {
            alert("Please fill the mandatory field ...")
            setLoading(true)
        }
        else {
            const result = await UpdateEmployees(sno, employee_name, location, employee_email, employee_number, company, username);

            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('employeesno');
                window.location.href = './TotalEmployee'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

    }


    const handlechangeempname = (e) => {
        setData({ ...data, employee_name: e.target.value })
    }
    const handlechangeempemail = (e) => {
        setData({ ...data, employee_email: e.target.value })
    }
    const handlechangeempno = (e) => {
        if (e.target.value.length === 11) return false;
        setData({ ...data, employee_number: e.target.value })
    }
    const handlechangecompany = (e) => {
        setData({ ...data, company: e.target.value })
    }

    const handlechangelocation = (e) => {
        setData({ ...data, location: e.target.value })
    }



    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Employee</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Employee</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('employeesno'); window.location.href = '/TotalEmployee' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">
                                            <div className="form-group col-md-6" >
                                                <label htmlFor='groupid'>Company</label>
                                                <input type="text" className="form-control" id='company' value={data.company} onChange={handlechangecompany} />
                                            </div>

                                            <div className="form-group col-md-6" >
                                                <label htmlFor='osid'>Location <small className='text-danger'>*</small></label>
                                                <select className="form-select" id='location' required onChange={handlechangelocation}>
                                                    <option value={data.location} hidden>{data.location}</option>
                                                    {
                                                        locationlist.map((item, index) =>
                                                            <option key={index}>{item.location_name}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="form-group col-md-6" >
                                                <label htmlFor='seriesid'> Employee Name <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='employee_name' value={data.employee_name} onChange={handlechangeempname} />
                                            </div>
                                            <div className="form-group col-md-6" >
                                                <label htmlFor='taskid'>Employee Email <small className='text-danger'>*</small></label>
                                                <input type="email" className="form-control" id='employee_email' value={data.employee_email} onChange={handlechangeempemail} />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="form-group col-md-6" >
                                                <label htmlFor='agentid'>Employee Number</label>
                                                <input type="number" className="form-control" id='employee_number' value={data.employee_number} onChange={handlechangeempno} />
                                            </div>
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleadddevice}>Update</button>
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

export default EditEmployee;