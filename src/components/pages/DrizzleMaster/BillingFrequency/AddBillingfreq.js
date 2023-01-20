import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddBillingFreqapi } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { RiArrowGoBackFill } from 'react-icons/ri'


function AddBillingFreq() {
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
        document.getElementById('subnitbtn').disabled = 'true'
        const billing_freq = document.getElementById('billing_freq').value;
        const billing_freq_id = billing_freq.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const billing_freq_desc = document.getElementById('billing_freq_desc').value;
        const org = localStorage.getItem('Database')

        const username = localStorage.getItem('UserId');
        setLoading(true)

        if (!billing_freq) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Billing frequency", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {

            setLoading(true)

            const result = await AddBillingFreqapi(org, billing_freq_id, billing_freq, billing_freq_desc, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Billing frequency Added", title: "success", type: "success", route: "/TotalBillingFreq", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Billing frequency Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddBillingFreq", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ######################### Sanckbar Start ##################################### */}

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container' >
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Billing Frequency <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Add Billing Frequency</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalBillingFreq' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <div className='card-header'>Add Billing Frequency :</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="col-md-5" >
                                            <label htmlFor='billing_freq'>Billing Frequency  <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='billing_freq' />
                                        </div>
                                        <div className="col-md-7 mt-3" >
                                            <label htmlFor='billing_freq_desc'>Remarks</label>
                                            <textarea className="form-control" id='billing_freq_desc' rows='3' placeholder='Comments' />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Frequency</button>
                                            <button type="reset" className="btn btn-secondary mx-3">Reset</button>
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