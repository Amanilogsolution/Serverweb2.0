import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddEmployees } from '../../../../api'
import './Addemployee.css'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'


function AddEmployee() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const employee_id = document.getElementById('employee_id').value;
        const employee_name = document.getElementById('employee_name').value;
        const employee_email = document.getElementById('employee_email').value;
        const employee_number = document.getElementById('employee_number').value;
        const company = document.getElementById('company').value;
        const location=document.getElementById('location').value;

        const username = sessionStorage.getItem('UserName');

        if (!employee_id || !employee_name || !employee_email) {
            alert("All field are mandatory...")
        }
        else {
            const result = await AddEmployees(employee_id,employee_name,location,employee_email,employee_number,company,username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalEmployee'
            }
            else {
                alert("Server Error");
            }
        }

    }
    return (
        <>
            <Sidebar >
             <div className='add_series_container' id="main" >
                <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Series</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Add Employee</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/Totalseries'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                        <div className="card add-card-div">
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor='typeid'>Employee ID </label>
                                            <input type="text" className="form-control" id='employee_id' />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='seriesid'>Employee Name </label>
                                            <input type="text" className="form-control" id='employee_name' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6" >
                                            <label htmlFor='taskid'>Employee Email</label>
                                            <input type="email" className="form-control" id='employee_email' />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='groupid'>Employee Number</label>
                                            <input type="number" className="form-control" id='employee_number' />
                                        </div>
                                       
                                    </div>
                                
                                    <div className="row">
                                        <div className="col-md-6" >
                                            <label htmlFor='compid'>Company</label>
                                            <input type="text" className="form-control" id='company' />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='deviceid'>Location</label>
                                            <input type="text" className="form-control" id='location'/>
                                        </div>
                                   
                                    </div>
                                    

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Submit</button>
                                        <button type="reset" className="btn btn-secondary ml-2 mb-4 mt-3" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                        {/* <button type="button" onClick={() => { window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button> */}

                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
            </Sidebar>
        </>
    )
}

export default AddEmployee;