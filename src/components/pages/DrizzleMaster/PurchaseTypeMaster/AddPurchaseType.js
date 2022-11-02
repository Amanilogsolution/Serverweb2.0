import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddPurchaseTypeeapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddPurchaseType() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled = true;

        const purchase_type = document.getElementById('purchase_type').value;
        const purchase_type_id = purchase_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const purchase_type_desc = document.getElementById('purchase_type_desc').value;


        const username = sessionStorage.getItem('UserId');

        if (!purchase_type) {
            alert("All field are mandatory...")
            document.getElementById('subnitbtn').disabled = false;
        }
        else {
            const result = await AddPurchaseTypeeapi(purchase_type_id, purchase_type, purchase_type_desc, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalPurchaseType'
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
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Purchase Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Purchase Type</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalPurchaseType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="row">
                                   
                                    <div className="col" >
                                        <label htmlFor='seriesid'>Purchase Type </label>
                                        <input type="text" className="form-control" id='purchase_type' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="email" className="form-control" id='purchase_type_desc' />
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

export default AddPurchaseType;