import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetBillingFreqapi, UpdateBillingFreqapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditBillingFreq() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetBillingFreqapi(sessionStorage.getItem('billingfreqsno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const billing_freq = document.getElementById('billing_freq').value;
        const billing_freq_desc = document.getElementById('billing_freq_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('billingfreqsno')

        if (!billing_freq) {
            alert('Please Enter the Billing Frequency')
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
                                    <div className="form-group col-md-6">
                                        <label htmlFor='billing_freq_id'>Billing Frequency ID </label>
                                        <input type="text" className="form-control" id='billing_freq_id' disabled value={data.billing_freq_id} />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label htmlFor='billing_freq'>Billing Frequency  </label>
                                        <input type="text" className="form-control" id='billing_freq' value={data.billing_freq} onChange={handlechangeassetstatus} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='billing_freq_desc'>Description</label>
                                        <textarea className="form-control" id='billing_freq_desc' rows='3' value={data.billing_freq_description} onChange={handlechangeassetstatusdesc} />
                                    </div>
                                </div>


                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditBillingFreq;