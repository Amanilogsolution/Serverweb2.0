import Navbar from '../../../Navbar/Navbar';
import { GetServiceCompliance, ActiveDeviceService, Updateservicecompliance } from '../../../../api'
import React, { useEffect, useState } from 'react'

function EditServiceCompliance() {
    const [deviceservice, setDeviceService] = useState([])
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchdata = async () => {
            const result = await ActiveDeviceService()
            setDeviceService(result)

            const result1 = await GetServiceCompliance(sessionStorage.getItem('ServiceComplianceSno'))
            setData(result1)
        }
        fetchdata();
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const servicecomplianceid = document.getElementById('servicecomplianceid').value;
        const DeviceService = document.getElementById('DeviceService').value
        const ServiceCompliance = document.getElementById('servicecompliance').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!DeviceService || !ServiceCompliance) {
            alert('Please enter mandatory field')
        }
        else {

            const result = await Updateservicecompliance(sessionStorage.getItem('ServiceComplianceSno'), servicecomplianceid, DeviceService, ServiceCompliance, remark, username);
            if (result) {
                alert("Update")
                sessionStorage.removeItem('ServiceComplianceSno');
                window.location.href = '/showservicecompliance'
            }
        }
    }
    const handleChangeid = (e) => {
        setData({ ...data, id: e.target.value })
    }

    const handleServiceCompliance = (e) => {
        setData({ ...data, services_compliance: e.target.value })

    }
    const handleChangeremark = (e) => {
        setData({ ...data, remark: e.target.value })
    }
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Edit Service Compliance</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Service Compliance ID </label>
                                        <input type="text" className="form-control" disabled value={data.id} id='servicecomplianceid' onChange={handleChangeid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Service</label>

                                        <select
                                            id="DeviceService"
                                            className="form-control col-md-12">
                                            <option selected hidden value="India">{data.device_services}</option>
                                            {
                                                deviceservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))

                                            }
                                        </select>
                                        {/* </div> */}
                                    </div>
                                    <div className="form-group " >
                                        <label> Service Compliance</label>
                                        <input type="text" className="form-control" id='servicecompliance' value={data.services_compliance} onChange={handleServiceCompliance} />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" onChange={handleChangeremark} value={data.remark} />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('ServiceComplianceSno'); window.location.href = '/showservicecompliance' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default EditServiceCompliance;