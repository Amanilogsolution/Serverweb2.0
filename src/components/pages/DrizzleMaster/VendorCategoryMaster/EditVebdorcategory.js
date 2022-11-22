import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetVendorCategoryapi, UpdateVendorCategoryapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditVendorcategory() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetVendorCategoryapi(sessionStorage.getItem('vendorcatsno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_category_description = document.getElementById('vendor_category_description').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('vendorcatsno')

        if (!vendor_category) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await UpdateVendorCategoryapi(sno, vendor_category, vendor_category_description, username);

            if (result === 'Updated') {
                alert('Vendor Category Updated')
                sessionStorage.removeItem('vendorcatsno');
                window.location.href = './TotalVendorCategory'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, vendor_category: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, vendor_category_description: e.target.value })
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h3><span style={{ color: "rgb(123,108,200)" }}>Vendor Category</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Vendor Category</span> </h3>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('vendorcatsno'); window.location.href = '/TotalVendorCategory' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="form-group col" >
                                                <label htmlFor='vendor_category'>Vendor Category  <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='vendor_category' value={data.vendor_category} onChange={handlechangeassetstatus} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='vendor_category_description'>Remarks</label>
                                            <textarea type="text" className="form-control" id='vendor_category_description' value={data.vendor_category_description} onChange={handlechangeassetstatusdesc} />
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

export default EditVendorcategory;