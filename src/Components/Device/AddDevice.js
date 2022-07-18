import Navbar from '../Navbar/Navbar';
import React, { useEffect, useState } from 'react'

function AddDevice() {
    const [deviceservice, setDeviceService] = useState([])



    const handleadddevice = async (e) => {
        e.preventDefault();
        const servicecomplianceid = document.getElementById('servicecomplianceid').value;
        const DeviceService = document.getElementById('DeviceService').value
        const ServiceCompliance = document.getElementById('servicecompliance').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');


    }
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "700px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Add Device</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" id='servicecomplianceid' />
                                    </div>
                                    <div className="form-group">
                                        <label>Device Name </label>
                                        <input type="text" className="form-control" id='servicecomplianceid' />
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-6" >
                                        <label>Device Type</label>
                                        <select id="DeviceService" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Country</option>
                                            {
                                                deviceservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label>Device Group</label>

                                        <select
                                            id="DeviceService"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Country</option>
                                            {
                                                deviceservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    </div>
                                    <div className="form-group " >
                                        <label>Device IP Address</label>
                                        <input type="text" className="form-control" id='servicecompliance' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Host Master</label>
                                        <input type="text" className="form-control" id='servicecompliance' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Operating System</label>
                                        <select id="DeviceService" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Country</option>
                                            {
                                                deviceservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label>Select Services</label>
                                        <select id="DeviceService" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Country</option>
                                            {
                                                deviceservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-row">

                                    <div className="form-group col-md-6" >
                                        <label>Device Creation Date</label>
                                        <input type="date" className="form-control" id='servicecompliance' />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label>Device Registration Date</label>
                                        <input type="date" className="form-control" id='servicecompliance' />
                                    </div>
                                    </div>

                                    <div className="form-group " >
                                        <label>Agent</label>
                                        <select id="DeviceService" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Country</option>
                                            {
                                                deviceservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                 
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/Device-Type' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default AddDevice;