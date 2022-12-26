import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetBillingFreqapi, UpdateBillingFreqapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditBillingFreq() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const result = await GetBillingFreqapi(org, localStorage.getItem('billingfreqsno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'

        const billing_freq = document.getElementById('billing_freq').value;
        const billing_freq_desc = document.getElementById('billing_freq_desc').value;
        const username = localStorage.getItem('UserId');
        const sno = localStorage.getItem('billingfreqsno')
        const org = localStorage.getItem('Database')

        setLoading(true)

        if (!billing_freq) {
            document.getElementById('subnitbtn').disabled = false

            setDatas({ ...datas, message: "Please enter Billing frequency", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"

        }
        else {
            setLoading(true)
            const result = await UpdateBillingFreqapi(org, sno, billing_freq, billing_freq_desc, username);

            if (result === 'Updated') {
                localStorage.removeItem('billingfreqsno');
                setDatas({ ...datas, message: "Billing Frequency Updated", title: "success", type: "success", route: "/TotalBillingFreq", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false

                setDatas({ ...datas, message: "Billing Frequency Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false

                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditBillingFreq", toggle: "true" })
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

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Billing Frequency <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Billing Frequency</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('billingfreqsno'); window.location.href = '/TotalBillingFreq' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Edit Billing Frequency:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">
                                            <div className="form-group col" >
                                                <label htmlFor='billing_freq'>Billing Frequency  <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='billing_freq' defaultValue={data.billing_freq} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='billing_freq_desc'>Remarks</label>
                                            <textarea className="form-control" id='billing_freq_desc' rows='3' defaultValue={data.billing_freq_description} />
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