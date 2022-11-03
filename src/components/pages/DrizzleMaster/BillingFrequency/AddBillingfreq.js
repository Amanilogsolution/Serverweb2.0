import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddBillingFreqapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function AddBillingFreq() {
    const [loading, setLoading] = useState(true)

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const billing_freq = document.getElementById('billing_freq').value;
        const billing_freq_id = billing_freq.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const billing_freq_desc = document.getElementById('billing_freq_desc').value;

        const username = sessionStorage.getItem('UserId');

        if (!billing_freq) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await AddBillingFreqapi(billing_freq_id, billing_freq, billing_freq_desc, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalBillingFreq'
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Billing Frequency</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Billing Frequency</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalBillingFreq' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="col" >
                                                <label htmlFor='billing_freq'>Billing Frequency  <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='billing_freq' />
                                            </div>
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='billing_freq_desc'>Description</label>
                                            <textarea type="email" className="form-control" id='billing_freq_desc' placeholder='Comments'/>
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Frequency</button>
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

export default AddBillingFreq;