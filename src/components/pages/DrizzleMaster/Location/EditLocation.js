import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetLocation, UpdateLocation } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'
import './EditLocation.css'

function EditLocation() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetLocation(sessionStorage.getItem('locationsno'))
            console.log(result)
            setData(result);
        }
        fetchdata()
    }, [])

    const handleUpdateLocation = async (e) => {
        e.preventDefault();
        // const type_id = document.getElementById('typeid').value;
        // const services_id = document.getElementById('seriesid').value;
        // const task_id = document.getElementById('taskid').value;
        // const agent_id = document.getElementById('agentid').value;
        // const group_id = document.getElementById('groupid').value;
        // const os_id = document.getElementById('osid').value;
        // const comp_id = document.getElementById('compid').value;
        // const device_id = document.getElementById('deviceid').value;
        // const taskandcomp_id = document.getElementById('taskcompid').value;
        // const username = sessionStorage.getItem('UserName');
        // const sno = sessionStorage.getItem('seriessno')

        // const result = await Updateseries(sno, type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username);

        // if (result === 'Updated') {
        //     alert('Data Updated')
        //     sessionStorage.removeItem('seriessno');
        //     window.location.href = './Totalseries'
        // }
        // else {
        //     alert("Server Error");
        // }

    }


    const handlechangetypeid = (e) => {
        setData({ ...data, type_id: e.target.value })
    }
    const handlechangeseriesid = (e) => {
        setData({ ...data, services_id: e.target.value })
    }
    const handlechangetaskid = (e) => {
        setData({ ...data, task_id: e.target.value })
    }
    const handlechangeagentid = (e) => {
        setData({ ...data, agent_id: e.target.value })
    }
    const handlechangegroupid = (e) => {
        setData({ ...data, group_id: e.target.value })
    }

    const handlechangeosid = (e) => {
        setData({ ...data, os_id: e.target.value })
    }
    const handlechangecompid = (e) => {
        setData({ ...data, comp_id: e.target.value })
    }
    const handlechangedeviceid = (e) => {
        setData({ ...data, device_id: e.target.value })
    }
    const handlechangetaskandcompid = (e) => {
        setData({ ...data, taskandcomp_id: e.target.value })
    }


    return (
        <>
            <Sidebar >
                <div className='main_container' id="main">
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Location</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Edit Location</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/TotalLocations'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                    <div className="card " style={{width:"80%",margin:"auto"}}>
                        {/* <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Edit Series</h4>
                        </header> */}
                        <article className="card-body" id="card_body">
                            
                            <form style={{ margin: "0px 20px 0px 15px" }} autoComplete='off'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor='company'>Select Company </label>
                                        <input type="text" className="form-control" id='company' value={data.company_name}/>
                                        {/* <select className="form-control" id='company'>
                                            <option>Select the Company</option>
                                        </select> */}
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='locationcode'>Location Code </label>
                                        <input type="text" className="form-control" id='locationcode' value={data.location_code}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6" >
                                        <label htmlFor='locationname'>Location Name</label>
                                        <input type="text" className="form-control" id='locationname' value={data.location_name}/>
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='address1'>Address Line 1</label>
                                        <input type="text" className="form-control" id='address1' value={data.location_address_line1}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6" >
                                        <label htmlFor='address2'>Address Line 2</label>
                                        <input type="text" className="form-control" id='address2' value={data.location_address_line2} />
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='city'>City</label>
                                        <input type="text" className="form-control" id='city' value={data.location_city} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6" >
                                        <label htmlFor='state'>State</label>
                                        <input type="text" className="form-control" id='state' value={data.location_state} />
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='pincode'>Pincode</label>
                                        <input type="number" className="form-control" id='pincode' value={data.location_pin_code} />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-6" >
                                        <label htmlFor='gstno'>GST No</label>
                                        <input type="text" className="form-control" id='gstno' value={data.location_gst}/>
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='contactpersonname'>Contact Person Name</label>
                                        <input type="text" className="form-control" id='contactpersonname' value={data.contact_person} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6" >
                                        <label htmlFor='email'>Contact Email</label>
                                        <input type="email" className="form-control" id='email' value={data.contact_person_email} />
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='contNum'>Contact Number</label>
                                        <input type="number" className="form-control" id='contNum'  value={data.contact_person_number}/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6" >
                                        <label htmlFor='latitude'>Latitude</label>
                                        <input type="text" className="form-control" id='latitude' value={data.location_latitude} />
                                    </div>
                                    <div className="col-md-6" >
                                        <label htmlFor='longitude'>Longitude</label>
                                        <input type="number" className="form-control" id='longitude' value={data.location_longitude} />
                                    </div>

                                </div>


                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleUpdateLocation}>Submit</button>
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

export default EditLocation;