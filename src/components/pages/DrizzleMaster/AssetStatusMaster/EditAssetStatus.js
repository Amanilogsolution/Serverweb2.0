import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetAssetStatusapi, UpdateAssetStatusapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditAssetStatus() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetAssetStatusapi(sessionStorage.getItem('assetstatussno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const asset_status = document.getElementById('asset_status').value;
        const asset_status_desc = document.getElementById('asset_status_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('assetstatussno')

        if (!asset_status) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await UpdateAssetStatusapi(sno, asset_status, asset_status_desc, username);

            if (result === 'Updated') {
                alert('Asset Status Updated')
                sessionStorage.removeItem('assetstatussno');
                window.location.href = './TotalAssetStatus'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, asset_status: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, asset_status_description: e.target.value })
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Asset Status</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Asset Status</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('assettypesno'); window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">
                                            <div className="form-group col-md-6" >
                                                <label htmlFor='seriesid'> Asset Status <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='asset_status' value={data.asset_status} onChange={handlechangeassetstatus} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="form-group col-md" >
                                                <label htmlFor='taskid'>Description</label>
                                                <textarea type="text" className="form-control" id='asset_status_desc' value={data.asset_status_description} onChange={handlechangeassetstatusdesc} />
                                            </div>

                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleadddevice}>Update</button>
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

export default EditAssetStatus;