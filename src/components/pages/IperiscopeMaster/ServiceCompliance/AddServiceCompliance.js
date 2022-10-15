import { Addservicecompliance, ActiveDeviceService, ActiveSeries, TotalCount } from '../../../../api'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Sidebar/Sidebar';


function AddServiceCompliance() {
    const [deviceservice, setDeviceService] = useState([])
    const [complianceid, setComplianceID] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            const result = await ActiveDeviceService()
            setDeviceService(result)

            const series = await ActiveSeries()
            if (!series) {
                alert('Please add/active  the Series')
            }
            const ser = series.agent_id
            const count = await TotalCount('tbl_agent_master')
            let countincrement = count.count + 1;
            let countnum = '' + countincrement;
            setComplianceID(ser + countnum)
        }
        fetchdata();
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const DeviceService = document.getElementById('DeviceService').value
        const ServiceCompliance = document.getElementById('servicecompliance').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!DeviceService || !ServiceCompliance) {
            alert("Please enter Mandatory field")
        }
        else {
            const result = await Addservicecompliance(complianceid, DeviceService, ServiceCompliance, remark, username);
            if (result === 'Added') {
                alert("Added")
                window.location.href = '/showservicecompliance'
            }
            else if (result === 'Already') {
                alert('This Device Type already Exist');
            }
            else {
                alert("Server Error");
            }
        }
    }
    return (
        <>
            <Sidebar>
                <div className='main_container' >
                    <div className="card card-div" >
                        <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Add Service Compliance</h4>
                        </header>
                        <article className="card-body" >
                            <form style={{ margin: "0px 20px 0px 15px" }}>
                                <div className="form-group">
                                    <label>Service Compliance ID </label>
                                    <input type="text" className="form-control" disabled value={complianceid} />
                                </div>
                                <div className="form-group " >
                                    <label>Device Service <span style={{ color: "red" }}>*</span></label>

                                    <select
                                        id="DeviceService"
                                        className="form-control col-md-12"
                                    >
                                        <option selected hidden value="">Choose Service</option>
                                        {
                                            deviceservice.map((data, index) => (
                                                <option key={index} value={data.device_services}>{data.device_services}</option>
                                            ))

                                        }
                                    </select>
                                </div>
                                <div className="form-group " >
                                    <label> Service Compliance<span style={{ color: "red" }}>*</span></label>
                                    <input type="text" className="form-control" id='servicecompliance' />
                                </div>
                                <div className="form-group">
                                    <label>Remarks</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                    <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                    <button type="button" onClick={() => { window.location.href = '/Device-Type' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddServiceCompliance;