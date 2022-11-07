import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { InsertManufacturer } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function AddManufacturer() {
    const [loading, setLoading] = useState(true)

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const manufacturername = document.getElementById('manufacturername').value;
        const manufacturer_id = manufacturername.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!manufacturername) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
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
                setLoading(true)
            }
        }
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Manufacturer</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Manufacturer</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalManufacturer' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <article className="card-body" >
                                            <form className='px-3' autoComplete='off'>
                                                <div className="form-group">
                                                    <label htmlFor='manufacturername'>Manufacturer Name   <small className='text-danger'>*</small></label>
                                                    <input type="text" className="form-control" id='manufacturername' />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor='remark'>Remarks </label>
                                                    <textarea className="form-control" placeholder="Comments" id='remark' rows="3" />
                                                </div>
                                                <div className="form-group" >
                                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Add Manufacturer</button>
                                                </div>
                                            </form>
                                        </article>
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

export default AddManufacturer;