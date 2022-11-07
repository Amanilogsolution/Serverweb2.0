import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { GetVendorCode, UpdateVendorCode } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function EditVendorCode() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await GetVendorCode(sessionStorage.getItem('VendorCodeSno'))
            setData(tabledata[0])

            if (tabledata[0].venodr_portal === 'true') {
                document.getElementById('vendor_portal').checked = true
            }

        }
        fetchdata()
        setLoading(true)
    }, [])


    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const vendor_code = document.getElementById('vendor_code').value;
        const vendor_name = document.getElementById('vendor_name').value;
        const comp_addr1 = document.getElementById('comp_addr1').value;


        const comp_addr2 = document.getElementById('comp_addr2').value;
        const comp_city = document.getElementById('comp_city').value;
        const comp_state = document.getElementById('comp_state').value;

        const comp_pincode = document.getElementById('comp_pincode').value;
        const comp_gst = document.getElementById('comp_gst').value;
        const comp_website = document.getElementById('comp_website').value;
        const comp_email = document.getElementById('comp_email').value;
        const vendor_portal = document.getElementById('vendor_portal').checked ? true : false;

        const user_id = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('VendorCodeSno')

        if (!vendor_code || !vendor_name || !comp_addr1 || !comp_city || !comp_state || !comp_pincode || !comp_email) {
            alert("Please enter Mandatory field")
            setLoading(true)
        }
        else {
            const result = await UpdateVendorCode(sno, vendor_code, vendor_name, comp_addr1, comp_addr2, comp_city, comp_state, comp_pincode, comp_gst, comp_website, comp_email, vendor_portal, user_id);

            if (result === 'Updated') {
                alert('Data Updated ')
                sessionStorage.removeItem('VendorCodeSno');
                window.location.href = './TotalVendorCode'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

    }

    const handleChangeVendorName = (e) => {
        setData({ ...data, vendor_name: e.target.value })
    }


    const handleChangeAddressLine1 = (e) => {
        setData({ ...data, company_address_line1: e.target.value })
    }

    const handleChangeAddressLine2 = (e) => {
        setData({ ...data, company_address_line2: e.target.value })
    }

    const handleChangeCompCity = (e) => {
        setData({ ...data, company_city: e.target.value })
    }
    const handleChangeCompState = (e) => {
        setData({ ...data, company_state: e.target.value })
    }
    const handleChangePinCode = (e) => {
        setData({ ...data, company_pin_code: e.target.value })
    }

    const handleChangeGst = (e) => {
        setData({ ...data, company_gst: e.target.value })
    }

    const handleChangeCompWebsite = (e) => {
        setData({ ...data, company_website: e.target.value })
    }
    const handleChangeCompEmail = (e) => {
        setData({ ...data, company_email: e.target.value })
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Code</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Vendor Code</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { sessionStorage.removeItem('VendorCodeSno');window.location.href = '/TotalVendorCode' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <header className="card-header" >
                                        <h5 >Edit Vendor Code</h5>
                                    </header>
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label htmlFor='vendor_code'>Vendor Code <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='vendor_code' required value={data.vendor_code} />
                                                </div>
                                                <div className="col-md-6" >
                                                    <label htmlFor='vendor_name'>Vendor Name <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='vendor_name' required value={data.vendor_name} onChange={handleChangeVendorName} />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4" >
                                                    <label htmlFor='comp_email'>Company Email Id <span className='text-danger'>*</span></label>
                                                    <input type="email" className="form-control" id='comp_email' required value={data.company_email} onChnage={handleChangeCompEmail} />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='comp_website'>Company website </label>
                                                    <input type="url" className="form-control" id='comp_website' required value={data.company_website} onChange={handleChangeCompWebsite} />
                                                </div>

                                                <div className="col-md-4" >
                                                    <label htmlFor='comp_gst'>Company GST no. </label>
                                                    <input type="text" className="form-control" id='comp_gst' value={data.company_gst} onChange={handleChangeGst} />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='comp_city'>Company City <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='comp_city' required value={data.company_city} onChange={handleChangeCompCity} />
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='comp_state'>Company State <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='comp_state' required value={data.company_state} onChange={handleChangeCompState} />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='comp_pincode'>Company Pincode <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='comp_pincode' required value={data.company_pin_code} onChange={handleChangePinCode} />
                                                </div>
                                            </div>

                                            <div className="col mt-3">
                                                <label htmlFor='comp_addr1'>Company Address Line 1 <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='comp_addr1' required value={data.company_address_line1} onChange={handleChangeAddressLine1} />
                                            </div>

                                            <div className="col mt-3">
                                                <label htmlFor='comp_addr2'>Company Address Line 2</label>
                                                <input type="text" className="form-control" id='comp_addr2' value={data.company_address_line2} onChange={handleChangeAddressLine2} />
                                            </div>


                                            <div className="form-row mt-3 d-flex align-items-center">
                                                <label htmlFor='vendor_portal' className='col-md-3' >Vendor Portal</label>
                                                <input type="checkbox" id='vendor_portal' style={{ height: "20px", width: "20px" }} />
                                            </div>

                                            <div className="form-group" >
                                                <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Update</button>
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

export default EditVendorCode;