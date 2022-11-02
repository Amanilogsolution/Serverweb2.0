import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddBillingFreqapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddBillingFreq() {
    const handleaddinsert = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled = true;
        const billing_freq = document.getElementById('billing_freq').value;
        const billing_freq_id = billing_freq.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const billing_freq_desc = document.getElementById('billing_freq_desc').value;

        const username = sessionStorage.getItem('UserId');

        if ( !billing_freq ) {
            alert("All field are mandatory...")
            document.getElementById('subnitbtn').disabled = false;
        }
        else {
            const result = await AddBillingFreqapi(billing_freq_id, billing_freq, billing_freq_desc, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalBillingFreq'
            }
            else {
                alert("Server Error");
                document.getElementById('subnitbtn').disabled = false;
            }
        }

    }
    return (
        <>
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
                                        <label htmlFor='seriesid'>Billing Frequency  </label>
                                        <input type="text" className="form-control" id='billing_freq' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="email" className="form-control" id='billing_freq_desc' />
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

export default AddBillingFreq;