import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetPurchaseTypeapi, UpdatePurchaseapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditPurchaseType() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetPurchaseTypeapi(sessionStorage.getItem('purchasesno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const purchase_type = document.getElementById('purchase_type').value;
        const purchase_type_desc = document.getElementById('purchase_type_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('purchasesno')

        if (!purchase_type) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await UpdatePurchaseapi(sno, purchase_type, purchase_type_desc, username);
            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('purchasesno');
                window.location.href = './TotalPurchaseType'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

    }

    const handlechangeassetstatus = (e) => {
        setData({ ...data, purchase_type: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, purchase_description: e.target.value })
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>PurchaseType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Purchase Type</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('purchasesno'); window.location.href = '/TotalPurchaseType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="form-group col" >
                                                <label htmlFor='purchase_type'>Purchase Type <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='purchase_type' value={data.purchase_type} onChange={handlechangeassetstatus} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="form-group col-md" >
                                                <label htmlFor='purchase_type_desc'>Description</label>
                                                <textarea type="text" className="form-control" id='purchase_type_desc' value={data.purchase_description} onChange={handlechangeassetstatusdesc} />
                                            </div>

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

export default EditPurchaseType;