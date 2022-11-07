import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetVendSubCate, UpdateVendSubCate,ActiveVendorCategory } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditVendorSubCategory() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    const [vendorcatlist, setVendorcatlist] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetVendSubCate(sessionStorage.getItem('vendsubcatesno'))
            setData(result[0]);
            const vendorCategory = await ActiveVendorCategory()
            setVendorcatlist(vendorCategory)
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_sub_category = document.getElementById('vendor_sub_category').value;
        const remark = document.getElementById('remark').value;
        const UserId = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('vendsubcatesno')

        if (!vendor_category || !vendor_sub_category) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await UpdateVendSubCate(sno, vendor_category, vendor_sub_category, remark, UserId);

            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('vendsubcatesno');
                window.location.href = './TotalVendSubCate'
            }
            else {
                alert("Server Error");
                setLoading(true)

            }
        }

    }

    const handleChangeVendCate = (e) => {
        setData({ ...data, vendor_category: e.target.value })
    }
    const handleChangeVendSubCate = (e) => {
        setData({ ...data, vendor_sub_category: e.target.value })
    }
    const handleChangeRemark = (e) => {
        setData({ ...data, vendor_sub_category_description: e.target.value })
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h3><span style={{ color: "rgb(123,108,200)" }}>Vendor Sub Category</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Edit Vendor Sub Category</span> </h3>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('vendsubcatesno'); window.location.href = '/TotalVendSubCate' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor='vendor_category'> Select Vendor Category <small className='text-danger'>*</small></label>
                                                <select type="text" className="form-select" id='vendor_category' onChange={handleChangeVendCate}>
                                                    <option value={data.vendor_category} hidden>{data.vendor_category} </option>
                                                    {
                                                        vendorcatlist.map((item, index) =>
                                                            <option key={index} value={item.vendor_category}>{item.vendor_category}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6" >
                                                <label htmlFor='vendor_sub_category'> Vendor Sub Category <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='vendor_sub_category' value={data.vendor_sub_category} onChange={handleChangeVendSubCate} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea  className="form-control" id='remark' rows='3' value={data.vendor_sub_category_description} onChange={handleChangeRemark} />
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

export default EditVendorSubCategory;