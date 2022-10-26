import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddAssetStatusapi } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'


function AddAssetStatus() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const assetstatus_id = document.getElementById('assetstatus_id').value;
        const asset_status = document.getElementById('asset_status').value;
        const asset_status_desc = document.getElementById('asset_status_desc').value;

        const username = sessionStorage.getItem('UserId');

        if (!assetstatus_id || !asset_status || !asset_status_desc) {
            alert("All field are mandatory...")
        }
        else {
            const result = await AddAssetStatusapi(assetstatus_id,asset_status,asset_status_desc,username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalAssetStatus'
            }
            else {
                alert("Server Error");
            }
        }

    }
    return (
        <>
            <Sidebar >
             <div className='main_container pb-2' >
                <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Asset Status</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Add Asset Status</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetStatus'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                        <div className="card card-div" style={{width:"50%"}}>
                            <article className="card-body" >
                                <form className='px-3'  autoComplete='off'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor='typeid'>Asset Status ID </label>
                                            <input type="text" className="form-control" id='assetstatus_id' />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='seriesid'>Asset Status </label>
                                            <input type="text" className="form-control" id='asset_status' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md" >
                                            <label htmlFor='taskid'>Description</label>
                                            <textarea type="email" className="form-control" id='asset_status_desc' />
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

export default AddAssetStatus;