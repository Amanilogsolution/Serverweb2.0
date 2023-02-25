import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddAssetStatusapi } from '../../../../api'
import {MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { RiArrowGoBackFill } from 'react-icons/ri'


function AddAssetStatus() {
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
        document.getElementById('subnitbtn').disabled = 'true'
        setLoading(false)
        const asset_status = document.getElementById('asset_status').value;
        const assetstatus_id = asset_status.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const asset_status_desc = document.getElementById('asset_status_desc').value;

        const username = localStorage.getItem('UserId');
        setLoading(true)

        if (!asset_status) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter the Asset Status", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"

        }
        else {
            setLoading(true)
            const org = localStorage.getItem('Database')
            const result = await AddAssetStatusapi(org, assetstatus_id, asset_status, asset_status_desc, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Asset Status Added", title: "success", type: "success", route: "/TotalAssetStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: " Asset Status Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddAssetStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ############################ Snackbar ############################## */}
                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ############################ Snackbar ############################## */}

                        <div className='main_container' >
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Asset Status <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Add Asset Status</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetStatus' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-2 card inner-card pb-3">
                                <div className='card-header'>Add Asset Status:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="col-md-5" >
                                            <label htmlFor='asset_status'>Asset Status  <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='asset_status' />
                                        </div>
                                        <div className="col-md-7 mt-3" >
                                            <label htmlFor='asset_status_desc'>Remarks</label>
                                            <textarea className="form-control" id='asset_status_desc' rows='3' />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Status</button>
                                            <button type="reset" className="btn btn-secondary mx-3" >Reset</button>
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

export default AddAssetStatus;