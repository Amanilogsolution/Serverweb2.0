import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetLocation, UpdateLocation } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditLocation() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetLocation(sessionStorage.getItem('locationsno'))
            setData(result);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateLocation = async (e) => {
        e.preventDefault();
        setLoading(false)
        const company = document.getElementById('company').value;
        const locationcode = document.getElementById('locationcode').value;
        const locationname = document.getElementById('locationname').value;
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
        const sno = sessionStorage.getItem('locationsno')
        setLoading(true)

        if (!company || !locationcode || !locationname || !address1 || !city || !state || !pincode || !contactpersonname || !email || !contNum) {
            setDatas({ ...datas, message: "Please enter all mandatory fields", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateLocation(sno, company, locationcode, locationname, address1, address2, city, state, pincode, gstno,
                contactpersonname, email, contNum, latitude, longitude, username);

            if (result === 'Updated') {
                sessionStorage.removeItem('locationsno');
                setDatas({ ...datas, message: "Location Updated", title: "success", type: "success", route: "/TotalLocation", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Location Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditLocation", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }


    const handlechangeCompany = (e) => {
        setData({ ...data, company_name: e.target.value })
    }
    const handleChnagelocationCode = (e) => {
        setData({ ...data, location_code: e.target.value })
    }
    const handlechangeLocationName = (e) => {
        setData({ ...data, location_name: e.target.value })
    }
    const handlechangeAddress1 = (e) => {
        setData({ ...data, location_address_line1: e.target.value })
    }
    const handlechangeAddress2 = (e) => {
        setData({ ...data, location_address_line2: e.target.value })
    }

    const handlechangeCity = (e) => {
        setData({ ...data, location_city: e.target.value })
    }
    const handlechangeState = (e) => {
        setData({ ...data, location_state: e.target.value })
    }
    const handlechangePincode = (e) => {
        if (e.target.value.length === 7) return false;
        setData({ ...data, location_pin_code: e.target.value })
    }
    const handlechangeGst = (e) => {
        setData({ ...data, location_gst: e.target.value })
    }

    const handlechangeContactname = (e) => {
        setData({ ...data, contact_person: e.target.value })
    }
    const handlechangeContactemail = (e) => {
        setData({ ...data, contact_person_email: e.target.value })
    }
    const handlechangeContactnumber = (e) => {
        if (e.target.value.length === 11) return false;
        setData({ ...data, contact_person_number: e.target.value })
    }
    const handlechangeContactLatitude = (e) => {
        setData({ ...data, location_latitude: e.target.value })
    }
    const handlechangeContactLongitude = (e) => {
        setData({ ...data, location_longitude: e.target.value })
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Location</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Location</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('locationsno'); window.location.href = '/TotalLocations' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "90%" }}>
                                <div className='card-header'>Edit Location:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor='company'> Company <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='company' value={data.company_name} onChange={handlechangeCompany} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='locationcode'>Location Code <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='locationcode' value={data.location_code} onChange={handleChnagelocationCode} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='locationname'>Location Name <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='locationname' value={data.location_name} onChange={handlechangeLocationName} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4" >
                                                <label htmlFor='address1'>Address Line 1 <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='address1' value={data.location_address_line1} onChange={handlechangeAddress1} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='address2'>Address Line 2</label>
                                                <input type="text" className="form-control" id='address2' value={data.location_address_line2} onChange={handlechangeAddress2} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='city'>City <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='city' value={data.location_city} onChange={handlechangeCity} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4" >
                                                <label htmlFor='state'>State <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='state' value={data.location_state} onChange={handlechangeState} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='pincode'>Pincode <span className='text-danger'>*</span></label>
                                                <input type="number" className="form-control" id='pincode' value={data.location_pin_code} onChange={handlechangePincode} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='gstno'>GST No</label>
                                                <input type="text" className="form-control" id='gstno' value={data.location_gst} onChange={handlechangeGst} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4" >
                                                <label htmlFor='contactpersonname'>Contact Person Name <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='contactpersonname' value={data.contact_person} onChange={handlechangeContactname} />
                                            </div>

                                            <div className="col-md-4" >
                                                <label htmlFor='email'>Contact Email <span className='text-danger'>*</span></label>
                                                <input type="email" className="form-control" id='email' value={data.contact_person_email} onChange={handlechangeContactemail} />
                                            </div>
                                            <div className="col-md-4" >
                                                <label htmlFor='contNum'>Contact Number <span className='text-danger'>*</span></label>
                                                <input type="number" className="form-control" id='contNum' value={data.contact_person_number} onChange={handlechangeContactnumber} />
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-md-6" >
                                                <label htmlFor='latitude'>Latitude</label>
                                                <input type="text" className="form-control" id='latitude' value={data.location_latitude} onChange={handlechangeContactLatitude} />
                                            </div>
                                            <div className="col-md-6" >
                                                <label htmlFor='longitude'>Longitude</label>
                                                <input type="number" className="form-control" id='longitude' value={data.location_longitude} onChange={handlechangeContactLongitude} />
                                            </div>
                                        </div>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleUpdateLocation}>Update</button>
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

export default EditLocation;