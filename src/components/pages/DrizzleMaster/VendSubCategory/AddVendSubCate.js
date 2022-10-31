import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { InsertVendSubCate, ActiveVendorCategory } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddVendorSubCategory() {
    const [vendorcatlist, setVendorcatlist] = useState([])



    useEffect(() => {
        const fetchdata = async () => {
            const vendorCategory = await ActiveVendorCategory()
            setVendorcatlist(vendorCategory)

        }
        fetchdata();
    }, [])

    const handleinsertdata = async (e) => {
        e.preventDefault();
        const vend_sub_cate_id = '';
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_sub_category = document.getElementById('vendor_sub_category').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');

        if (!vendor_category || !vendor_sub_category) {
            alert("All field are mandatory...")
        }
        else {
            const result = await InsertVendSubCate(vend_sub_cate_id, vendor_category, vendor_sub_category, remark, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalVendSubCate'
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
                        <h3><span style={{ color: "rgb(123,108,200)" }}>Vendor Sub Category</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Add Vendor Sub Category</span> </h3>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendSubCate' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor='vendor_category'> Vendor Category </label>
                                        <select type="text" className="form-select" id='vendor_category' >
                                            <option value='' hidden>Select Vendor Category</option>
                                            {
                                                vendorcatlist.map((item, index) =>
                                                    <option key={index} value={item.vendor_category}>{item.vendor_category}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='vendor_sub_category'>Vendor Sub Category </label>
                                        <input type="text" className="form-control" id='vendor_sub_category' />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md" >
                                        <label htmlFor='remark'>Description</label>
                                        <textarea className="form-control" id='remark' rows='3' />
                                    </div>
                                </div>

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleinsertdata}>Submit</button>
                                    <button type="reset" className="btn btn-secondary ml-2 mb-4 mt-3" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddVendorSubCategory;