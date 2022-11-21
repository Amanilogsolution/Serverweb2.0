import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {ActiveDevicetype,ActiveVendorCode} from '../../../../api' 
import LoadingPage from '../../../LoadingPage/LoadingPage';

const AddNewAssets = () => {
    const [loading, setLoading] = useState(false)

    const [devicelist,setDevicelist]= useState([])
    const [vendorlist,setVendorlist]= useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const devices= await ActiveDevicetype();
            console.log(devices)
            setDevicelist(devices)
            const vendor= await ActiveVendorCode()
            console.log(vendor)
            setVendorlist(vendor)
            setLoading(true)
        }
        fetchdata();
    }, [])

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>New Assets</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add New Assets</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalNewAssets' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Add New Assets</div>
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Purchase Type <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Device Type <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                        {
                                                            devicelist.map((item,index)=>(
                                                                <option key={index} value={item.device_type}>{item.device_type}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Description</label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='model'>Model <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Manufacture <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Device Status <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='model'>Serial No. <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Asset Tag <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Purchase Date <span className='text-danger'>*</span></label>
                                                    <input type="date" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='model'>Company <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                    <select className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                        {
                                                            vendorlist.map((item,index)=>(
                                                                <option key={index} value={item.vendor_name}>{item.vendor_name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Invoice No.<span className='text-danger'>*</span></label>
                                                    <input type="date" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='model'>Purchase Price <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Rent Per Month <span className='text-danger'>*</span></label>
                                                    <input type="date" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Latest Inventory <span className='text-danger'>*</span></label>
                                                    <input type="date" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='model'>Location <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Asset Name<span className='text-danger'>*</span></label>
                                                    <input type="date" className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Asset Assign <span className='text-danger'>*</span></label>
                                                    <input type="date" className="form-control" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                                <label htmlFor='model'>Remarks <span className='text-danger'>*</span></label>
                                                <textarea className="form-control" rows='3'></textarea>
                                            </div>

                                            <div className="form-group" >
                                                <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn">Add New Assets</button>
                                            </div>
                                        </form>
                                    </article>
                                </div>


                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default AddNewAssets;
