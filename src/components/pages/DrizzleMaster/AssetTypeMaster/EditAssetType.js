import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetAssetTypeapi, UpdateAssettypeapi } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'
// import './Editemployee.css'

function EditAssetType() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetAssetTypeapi(sessionStorage.getItem('assettypesno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const asset_type = document.getElementById('asset_type').value;
        const asset_type_desc = document.getElementById('asset_type_desc').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('assettypesno')

        const result = await UpdateAssettypeapi(sno,asset_type,asset_type_desc,username);

        if (result === 'Updated') {
            alert('Data Updated')
            sessionStorage.removeItem('assettypesno');
            window.location.href = './TotalAssetType'
        }
        else {
            alert("Server Error");
        }

    }


    const handlechangeassettype = (e) => {
        setData({ ...data, asset_type: e.target.value })
    }
    const handlechangeassettypedesc = (e) => {
        setData({ ...data, asset_description: e.target.value })
    }
   
 


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Series</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Edit Asset Type</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('assettypesno'); window.location.href = '/TotalAssetType'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                    <div className="card card-div" style={{width:"50%"}}>
                       
                        <article className="card-body" >
                            <form className='px-3'  autoComplete='off'>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor='typeid'> Asset Type ID </label>
                                        <input type="text" className="form-control" id='assettype_id' disabled value={data.asset_type_id} />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label htmlFor='seriesid'> Asset Type </label>
                                        <input type="text" className="form-control" id='asset_type' value={data.asset_type} onChange={handlechangeassettype} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="text" className="form-control" id='asset_type_desc' value={data.asset_description} onChange={handlechangeassettypedesc} />
                                    </div>
                                   
                                </div>
                           
                             
                               

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                    {/* <button type="button" onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button> */}

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditAssetType;