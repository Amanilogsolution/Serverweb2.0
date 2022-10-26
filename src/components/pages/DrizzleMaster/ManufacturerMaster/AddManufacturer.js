import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { InsertManufacturer } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddManufacturer() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const manufacturer_id='';
        const manufacturername = document.getElementById('manufacturername').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!manufacturername) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await InsertManufacturer(manufacturer_id, manufacturername, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                sessionStorage.removeItem('seriessno');
                window.location.href = './TotalManufacturer'
            }
            else {
                alert("Server Error");
            }
        }
    }

    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Manufacturer</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Manufacturer</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => {window.location.href = '/TotalManufacturer' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div">
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='manufacturername'>Manufacturer Name</label>
                                            <input type="text" className="form-control" id='manufacturername' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='remark'>Remarks (Optional)</label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3"/>
                                        </div>
                                        <div className="form-group" >
                                            <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Add</button>
                                        </div>
                                    </form>
                                </article>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddManufacturer;