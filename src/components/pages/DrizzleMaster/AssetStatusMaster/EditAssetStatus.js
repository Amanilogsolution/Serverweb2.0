import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetAssetStatusapi, UpdateAssetStatusapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditAssetStatus() {
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

            const result = await GetAssetStatusapi(org, localStorage.getItem('assetstatussno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const asset_status = document.getElementById('asset_status').value;
        const asset_status_desc = document.getElementById('asset_status_desc').value;
        const username = localStorage.getItem('UserId');
        const sno = localStorage.getItem('assetstatussno')
        setLoading(true)

        if (!asset_status) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter the Asset Status", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = localStorage.getItem('Database')

            const result = await UpdateAssetStatusapi(org, sno, asset_status, asset_status_desc, username);
            if (result === 'Updated') {
                localStorage.removeItem('assetstatussno');
                setDatas({ ...datas, message: "Asset Status Updated", title: "success", type: "success", route: "/TotalAssetStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: " Asset Status Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditAssetStatus", toggle: "true" })
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

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Asset Status <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Asset Status</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('assettypesno'); window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "50%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Edit Asset Status:</div>

                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="row">
                                                <div className="form-group" >
                                                    <label htmlFor='seriesid'> Asset Status <small className='text-danger'>*</small></label>
                                                    <input type="text" className="form-control" id='asset_status' defaultValue={data.asset_status} />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="form-group col-md" >
                                                    <label htmlFor='taskid'>Description</label>
                                                    <textarea type="text" className="form-control" id='asset_status_desc' defaultValue={data.asset_status_description} />
                                                </div>
                                            </div>
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                            </div>
                                        </form>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default EditAssetStatus;