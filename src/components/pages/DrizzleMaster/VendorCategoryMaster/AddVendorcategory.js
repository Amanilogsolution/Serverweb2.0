import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddVendorCategoryapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function AddVendorCategory() {
    const [loading, setLoading] = useState(true)

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_category_id = vendor_category.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const vendor_category_description = document.getElementById('vendor_category_description').value;

        const username = sessionStorage.getItem('UserId');

        if (!vendor_category) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await AddVendorCategoryapi(vendor_category_id, vendor_category, vendor_category_description, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalVendorCategory'
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
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h3><span style={{ color: "rgb(123,108,200)" }}>Vendor Category</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Add Vendor Category</span> </h3>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorCategory' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="col" >
                                                <label htmlFor='vendor_category'>Vendor Category  <small className='text-danger'>*</small> </label>
                                                <input type="text" className="form-control" id='vendor_category' />
                                            </div>
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='vendor_category_description'>Remarks</label>
                                            <textarea className="form-control" rows='3' id='vendor_category_description' placeholder='Comments'/>
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Category</button>
                                            <button type="reset" className="btn btn-secondary " style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddVendorCategory;