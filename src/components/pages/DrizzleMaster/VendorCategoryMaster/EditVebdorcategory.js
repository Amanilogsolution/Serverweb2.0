import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetVendorCategoryapi, UpdateVendorCategoryapi } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'
// import './Editemployee.css'

function EditVendorcategory() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetVendorCategoryapi(sessionStorage.getItem('vendorcatsno'))
            console.log(result)
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const vendor_category = document.getElementById('vendor_category').value;
        const vendor_category_description = document.getElementById('vendor_category_description').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('vendorcatsno')


    

        const result = await UpdateVendorCategoryapi(sno,vendor_category,vendor_category_description,username);

        if (result === 'Updated') {
            alert('Data Updated')
            sessionStorage.removeItem('vendorcatsno');
            window.location.href = './TotalVendorCategory'
        }
        else {
            alert("Server Error");
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
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Series</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Edit Priority Type</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('assettypesno'); window.location.href = '/TotalPurchaseType'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                    <div className="card card-div" style={{width:"50%"}}>
                       
                        <article className="card-body" >
                            <form className='px-3'  autoComplete='off'>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor='typeid'>Vendor Category ID </label>
                                        <input type="text" className="form-control" id='billing_freq_id' disabled value={data.vendor_category_id} />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label htmlFor='seriesid'>Vendor Category  </label>
                                        <input type="text" className="form-control" id='vendor_category' value={data.vendor_category} onChange={handlechangeassetstatus} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="text" className="form-control" id='vendor_category_description' value={data.vendor_category_description} onChange={handlechangeassetstatusdesc} />
                                    </div>
                                   
                                </div>
                           
                             
                               

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                    {/* <button type="button" onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button> */}

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditVendorcategory;