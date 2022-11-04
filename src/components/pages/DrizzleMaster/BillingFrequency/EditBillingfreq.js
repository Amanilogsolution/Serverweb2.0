import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetBillingFreqapi, UpdateBillingFreqapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditBillingFreq() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetBillingFreqapi(sessionStorage.getItem('billingfreqsno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const billing_freq = document.getElementById('billing_freq').value;
        const billing_freq_desc = document.getElementById('billing_freq_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('billingfreqsno')

        if (!billing_freq) {
            alert('Please Enter the Billing Frequency')
            setLoading(true)

        }
        else {
            const result = await UpdateBillingFreqapi(sno, billing_freq, billing_freq_desc, username);

            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('billingfreqsno');
                window.location.href = './TotalBillingFreq'
            }
            else {
                alert("Server Error");
                setLoading(true)

            }
        }


    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, billing_freq: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, billing_freq_description: e.target.value })
    }



    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Billing Frequency</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Billing Frequency</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('billingfreqsno'); window.location.href = '/TotalBillingFreq' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="form-group col" >
                                                <label htmlFor='billing_freq'>Billing Frequency  <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='billing_freq' value={data.billing_freq} onChange={handlechangeassetstatus} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='billing_freq_desc'>Remarks</label>
                                            <textarea className="form-control" id='billing_freq_desc' rows='3' value={data.billing_freq_description} onChange={handlechangeassetstatusdesc} />
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

export default EditBillingFreq;