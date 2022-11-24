import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddAssetTypeapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddAssetType() {
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
        
        // const software = document.getElementById('software').checked=== true?true:false;
        const asset_type = document.getElementById('asset_type').value;
        const assettype_id = asset_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const asset_type_desc = document.getElementById('asset_type_desc').value;

        const username = sessionStorage.getItem('UserId');

        // console.log(software)
        if (!asset_type) {
            setLoading(true)

            setDatas({...datas,message:"Please enter the Asset Type",title:"Error",type:"warning",route:"#",toggle:"true"})
            document.getElementById('snackbar').style.display="block"
        }
        else {
        setLoading(true)

            const result = await AddAssetTypeapi(assettype_id, asset_type, asset_type_desc, username);
            console.log(result)
            if (result === 'Added') {
                setDatas({...datas,message:"Asset Type Added",title:"success",type:"success",route:"/TotalAssetStatus",toggle:"true"})
                document.getElementById('snackbar').style.display="block"
             }
            else if(result === 'Already'){
                setDatas({...datas,message:" Asset Type Already Exist",title:"warning",type:"Error"})
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

                         <div id="snackbar" style={{display:"none"}}>
                                <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle}/> 
                            </div>

                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Asset Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Asset Type</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        {/* <div className="col" >
                                            <label htmlFor='software'>Software <span className='text-danger'>*</span></label>&nbsp;&nbsp;
                                            <input type="checkbox"  id='software' style={{height:'20px',width:'20px'}} />
                                        </div> */}
                                        <div className="col mt-2" >
                                            <label htmlFor='asset_type'>Asset Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='asset_type' />
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='asset_type_desc'>Remarks</label>
                                            <textarea className="form-control" id='asset_type_desc' rows='3' />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Asset Type</button>
                                            <button type="reset" className="btn btn-secondary" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddAssetType;