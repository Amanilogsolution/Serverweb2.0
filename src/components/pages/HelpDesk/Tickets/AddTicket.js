import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { InsertVendorContract, ActiveLocation, ActiveContractType, ActiveVendorCategory, ActiveVendorCode, ActiveVendSubCate } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import './vendorcontract.css'

export default function AddTicket() {
    return (
        <>
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
                                            <label htmlFor='company'>Asset Type</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor='location'>Location</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4" >
                                            <label htmlFor='company_city'>Date<span className='text-danger'>*</span></label>
                                            <input type="date" className="form-control" required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='company_state'>Assign Ticket<span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor='comp_pincode'>Type of Issue<span className='text-danger'>*</span></label>
                                            <input type="number" className="form-control" id='comp_pincode' />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
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
                                    <div className="row pt-2">
                                        <div className="col">
                                            <label htmlFor='comp_addr1'>Ticket Subject <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='comp_addr1' required />
                                        </div>
                                        <div className="col">
                                            <label htmlFor='comp_addr2'>Priority</label>
                                            <input type="text" className="form-control" id='comp_addr2' />
                                        </div>

                                    </div>
                                    <div className="row pt-2">
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
        </>
    )
}
