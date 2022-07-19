import Navbar from '../Navbar/Navbar';
import React, { useEffect,useState } from 'react';
// import {Adddevicetask} from '../../../api'
import {ActiveDeviceService,ActiveServiceCompliance,Activedevicetask,Activedevice,Adddevicetaskcompliance} from '../../api/index'

function AddDeviceTaskComp() {

const [activeservice,setActiveService] = useState([])
const[activecompliance,setActiveCompliance] = useState([]);
const [activedevicetask,setActiveDeviceTask] = useState([]);
const[activedevicename,setActiveDeviceName] = useState([]);

useEffect(()=>{
    const fetch = async () => {
        const devicename = await Activedevice()
        setActiveDeviceName(devicename)
        console.log(devicename)
        const result = await ActiveDeviceService()
        setActiveService(result)
        const compliance = await ActiveServiceCompliance()
        setActiveCompliance(compliance)
        const devicetask = await Activedevicetask()
        setActiveDeviceTask(devicetask)

    }
    fetch()

},[])



    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const compliances = document.getElementById('compliances').value;
        const task = document.getElementById('task').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        console.log(devicename,services,compliances,task ,remark,username)
        const result = await Adddevicetaskcompliance(devicename,services,compliances,task,remark,username);
        if (result === 'Added') {
            window.location.href = './Dashboard'
        }
        else {
            alert("Server Error");
        }
    }

    useEffect(()=>{
       
    },[])
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Add Device Task & Compliances</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device Name </label>
                                        <select
                                            id="devicename"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Device Name</option>
                                            {
                                                activedevicename.map((data, index) => (
                                                    <option key={index} value={data.device_name}>{data.device_name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label>Select Services </label>
                                        <select
                                            id="services"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Service</option>
                                            {
                                                activeservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label> Compliance </label>
                                        <select
                                            id="compliances"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Compliance</option>
                                            {
                                                activecompliance.map((data, index) => (
                                                    <option key={index} value={data.services_compliance}>{data.services_compliance}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label> Task </label>
                                        <select
                                            id="task"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Task</option>
                                            {
                                                activedevicetask.map((data, index) => (
                                                    <option key={index} value={data.device_tasks}>{data.device_tasks}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/Dashboard' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDeviceTaskComp;