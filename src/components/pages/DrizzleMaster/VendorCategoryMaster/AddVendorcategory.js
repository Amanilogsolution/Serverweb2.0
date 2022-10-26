import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddVendorCategoryapi } from '../../../../api'
// import './Addemployee.css'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddVendorCategory() {
    const handleaddinsert = async (e) => {
        e.preventDefault();
        const vendor_category_id = document.getElementById('vendor_category_id').value;
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_category_description = document.getElementById('vendor_category_description').value;


        const username = sessionStorage.getItem('UserName');

        if (!vendor_category_id || !vendor_category || !vendor_category_description) {
            alert("All field are mandatory...")
        }
        else {
            const result = await AddVendorCategoryapi(vendor_category_id, vendor_category, vendor_category_description, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalVendorCategory'
            }
            else {
                alert("Server Error");
            }
        }

    }
    return (
        <>
            <Sidebar >
                <div className='main_container pb-2' >
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Asset Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Vendor Category</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor='typeid'>Vendor Category ID </label>
                                        <input type="text" className="form-control" id='vendor_category_id' />
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='seriesid'>Vendor Category  </label>
                                        <input type="text" className="form-control" id='vendor_category' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="email" className="form-control" id='vendor_category_description' />
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

export default AddVendorCategory;