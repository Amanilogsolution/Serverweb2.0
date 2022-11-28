import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddAssetStatusapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddAssetStatus() {
    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle:"true",
    })


    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const asset_status = document.getElementById('asset_status').value;
        const assetstatus_id = asset_status.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const asset_status_desc = document.getElementById('asset_status_desc').value;

        const username = sessionStorage.getItem('UserId');
        setLoading(true)

        if (!asset_status) {
            setDatas({...datas,message:"Please enter the Asset Status",title:"Error",type:"warning",route:"#",toggle:"true"})
            document.getElementById('snackbar').style.display="block"

        }
        else {
            setLoading(true)
            const org = sessionStorage.getItem('Database')
            const result = await AddAssetStatusapi(org,assetstatus_id, asset_status, asset_status_desc, username);
            if (result === 'Added') {
               setDatas({...datas,message:"Asset Status Added",title:"success",type:"success",route:"/TotalAssetStatus",toggle:"true"})
               document.getElementById('snackbar').style.display="block"
            }
            else if(result === 'Already'){
                setDatas({...datas,message:" Asset Status Already Exist",title:"warning",type:"Error",toggle:"true"})
                document.getElementById('snackbar').style.display="block" 
            }
            else {
                setDatas({...datas,message:"Server Error",title:"Error",type:"danger",route:"/AddAssetStatus",toggle:"true"})
                document.getElementById('snackbar').style.display="block"  
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle}/>
                        </div>

                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Asset Status</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Asset Status</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetStatus' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="col" >
                                            <label htmlFor='asset_status'>Asset Status  <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='asset_status' />
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='asset_status_desc'>Remarks</label>
                                            <textarea className="form-control" id='asset_status_desc' rows='3' />
                                        </div>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Status</button>&nbsp;
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

export default AddAssetStatus;