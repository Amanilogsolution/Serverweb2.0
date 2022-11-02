import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddLocationapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddLocation() {
    const [numcount, setNumcount] = useState();
    const [pincount, setPincount] = useState();

    const handleaddinsert = async (e) => {
        e.preventDefault();
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

        if (!company || !locationcode || !locationname || !address1 || !address2 || !city || !state || !pincode || !gstno || !contactpersonname || !email || !contNum || !latitude || !longitude) {
            alert("All field are mandatory...")
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
            }
        }

    }
    return (
        <>
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
                                    <div className="col-md-6">
                                        <label htmlFor='company'>Select Company </label>
                                        <input type="text" className="form-control" id='company' />
                                        {/* <select className="form-control" id='company'>
                                            <option>Select the Company</option>
                                        </select> */}
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='locationname'>Location Name</label>
                                        <input type="text" className="form-control" id='locationname' />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4" >
                                        <label htmlFor='address1'>Address Line 1</label>
                                        <input type="text" className="form-control" id='address1' />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='address2'>Address Line 2</label>
                                        <input type="text" className="form-control" id='address2' />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='city'>City</label>
                                        <input type="text" className="form-control" id='city' max={10} />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-4" >
                                        <label htmlFor='state'>State</label>
                                        <input type="text" className="form-control" id='state' />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='pincode'>Pincode</label>
                                        <input type="number" className="form-control" id='pincode'
                                            value={pincount}
                                            onChange={(e) => { if (e.target.value.length === 11) return false; else { setPincount(e.target.value) } }}
                                        />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='gstno'>GST No</label>
                                        <input type="text" className="form-control" id='gstno' />
                                    </div>

                                </div>
                                <div className="row mt-3">

                                    <div className="col-md-4" >
                                        <label htmlFor='contactpersonname'>Contact Person Name</label>
                                        <input type="text" className="form-control" id='contactpersonname' />
                                    </div>

                                    <div className="col-md-4" >
                                        <label htmlFor='email'>Contact Email</label>
                                        <input type="email" className="form-control" id='email' />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='contNum'>Contact Number</label>
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

export default AddLocation;