import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddAssetTypeapi } from '../../../../api'
// import './Addemployee.css'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddAssetType() {

    const handleaddinsert = async (e) => {
        e.preventDefault();

        document.getElementById('subnitbtn').disabled = true;
        const asset_type = document.getElementById('asset_type').value;
        const assettype_id = asset_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const asset_type_desc = document.getElementById('asset_type_desc').value;

        const username = sessionStorage.getItem('UserId');

        if (!asset_type) {
            alert("All field are mandatory...")
            document.getElementById('subnitbtn').disabled = false;
        }
        else {
            const result = await AddAssetTypeapi(assettype_id, asset_type, asset_type_desc, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalAssetType'
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
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Asset Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Asset Type</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="row">
                                    {/* <div className="col-md-6">
                                            <label htmlFor='typeid'>Asset Type ID </label>
                                            <input type="text" className="form-control" id='assettype_id' />
                                        </div> */}
                                    <div className="col" >
                                        <label htmlFor='seriesid'>Asset Type </label>
                                        <input type="text" className="form-control" id='asset_type' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="email" className="form-control" id='asset_type_desc' />
                                    </div>

                                </div>



                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Submit</button>
                                    <button type="reset" className="btn btn-secondary ml-2 mb-4 mt-3" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddAssetType;