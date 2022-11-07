import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddLocationapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function AddLocation() {
    const [loading, setLoading] = useState(true)
    const [numcount, setNumcount] = useState();
    const [pincount, setPincount] = useState();

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const company = document.getElementById('company').value;
        const locationcode = document.getElementById('locationcode').value;
        const locationname = document.getElementById('locationname').value;
        const location_id = locationname.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const address1 = document.getElementById('address1').value;
        const address2 = document.getElementById('address2').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const pincode = document.getElementById('pincode').value;
        const gstno = document.getElementById('gstno').value;

        const contactpersonname = document.getElementById('contactpersonname').value;
        const email = document.getElementById('email').value;
        const contNum = document.getElementById('contNum').value;
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;

        const username = sessionStorage.getItem('UserId');

        if (!company || !locationcode || !locationname || !address1 || !city || !state || !pincode || !contactpersonname || !email || !contNum) {
            alert("Please fill the  mandatory Fields...")
            setLoading(true)
        }
        else {
            const result = await AddLocationapi(location_id, company, locationcode, locationname, address1, address2, city, state,
                pincode, gstno, contactpersonname, email, contNum, latitude, longitude, username);

            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalLocations'
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
                    <div className='main_container pb-3'>
                        <div className=' d-flex justify-content-between mx-5 pt-4 '>
                            <h2><span style={{ color: "rgb(123,108,200)" }}>Locations</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Location</span> </h2>
                            <button className='btn btn-secondary btn ' onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/TotalLocations' }} >Back <MdOutlineArrowForward /></button>
                        </div>
                        <div className="card card-div" style={{ width: "90%" }}>
                            <div className='card-header'>Add Location:</div>
                            <article className="card-body" >
                                <form className='px-3' autoComplete='off'>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor='company'> Company <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='company' />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='locationcode'>Location Code <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='locationcode' />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='locationname'>Location Name <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='locationname' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4" >
                                            <label htmlFor='address1'>Address Line 1 <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='address1' />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='address2'>Address Line 2</label>
                                            <input type="text" className="form-control" id='address2' />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='city'>City <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='city' max={10} />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-4" >
                                            <label htmlFor='state'>State <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='state' />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='pincode'>Pincode <span className='text-danger'>*</span></label>
                                            <input type="number" className="form-control" id='pincode'
                                                value={pincount}
                                                onChange={(e) => { if (e.target.value.length === 7) return false; else { setPincount(e.target.value) } }}
                                            />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='gstno'>GST No</label>
                                            <input type="text" className="form-control" id='gstno' />
                                        </div>

                                    </div>
                                    <div className="row mt-3">

                                        <div className="col-md-4" >
                                            <label htmlFor='contactpersonname'>Contact Person Name <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='contactpersonname' />
                                        </div>

                                        <div className="col-md-4" >
                                            <label htmlFor='email'>Contact Email <span className='text-danger'>*</span></label>
                                            <input type="email" className="form-control" id='email' />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='contNum'>Contact Number <span className='text-danger'>*</span></label>
                                            <input type="number" className="form-control" id='contNum'
                                                value={numcount}
                                                onChange={(e) => { if (e.target.value.length === 11) return false; else { setNumcount(e.target.value) } }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6" >
                                            <label htmlFor='latitude'>Latitude</label>
                                            <input type="text" className="form-control" id='latitude' />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='longitude'>Longitude</label>
                                            <input type="number" className="form-control" id='longitude' />
                                        </div>

                                    </div>
                                    <div className="form-group mt-3" >
                                        <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}> Add Location</button>
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

export default AddLocation;