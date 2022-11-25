import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddVendorCategoryapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddVendorCategory() {
    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_category_id = vendor_category.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const vendor_category_description = document.getElementById('vendor_category_description').value;

        const username = sessionStorage.getItem('UserId');
        setLoading(true)

        if (!vendor_category) {
            setDatas({ ...datas, message: "Please enter Vendor Category", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await AddVendorCategoryapi(vendor_category_id, vendor_category, vendor_category_description, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Vendor Category Added", title: "success", type: "success", route: "/TotalVendorCategory", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Vendor Category Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddVendorCategory", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        
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
                                                <label htmlFor='vendor_category'>Vendor Category  <span className='text-danger'>*</span> </label>
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