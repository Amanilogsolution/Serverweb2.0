import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import './vendorcontract.css'
import LoadingPage from '../../../LoadingPage/LoadingPage';

export default function AddTicket() {
    const [loading, setLoading] = useState(false)

    const [todatdate, setTodaydate] = useState('')


    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true)
        }
        fetchdata();
        Todaydate()
    }, [])
    const Todaydate = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = year + "-" + month + "-" + day;
        setTodaydate(today)
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Tickets</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Tickets</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorContract' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Tickets Details:</div>
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Employee Name <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='company'>Asset Type <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4" >
                                                    <label htmlFor='company_city'>Date </label>
                                                    <input type="date" className="form-control" defaultValue={todatdate} required />
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='company_state'>Assign Ticket <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='comp_pincode'>Type of Issue</label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4" >
                                                    <label htmlFor='comp_gst'>Email ID</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='comp_website'>Asset Serial</label>
                                                    <input type="url" className="form-control" />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Ticket Status <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor='comp_addr1'>Ticket Subject <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='comp_addr1' required />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor='comp_addr2'>Priority</label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="row mt-3">
                                                <div class="col-md-6 form-group">
                                                    <label for="exampleFormControlTextarea1">Issue Discription</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                                <div class="col-md-6 form-group">
                                                    <label for="exampleFormControlTextarea1">Resolution/Pending Remarks</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            </div>

                                        </form>
                                    </article>
                                </div>

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn">Add Tickets</button>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}
