import Navbar from '../Navbar/Navbar';
import React, { useEffect,useState } from 'react';
import {getdevicetaskcomp} from '../../api'
import {ActiveDeviceService,ActiveServiceCompliance,Activedevicetask,Activedevice,Updatedevicetaskcomp} from '../../api/index'

function EditDeviceTaskComp() {
// const [device,setDevice]=useState([]);
// const [services,setServices]= useState([]);
// const [compliances,setCompliances]= useState([]);
// const [task,setTask]= useState([]);

const [data,setData] =useState({});

const [activeservice,setActiveService] = useState([])
const[activecompliance,setActiveCompliance] = useState([]);
const [activedevicetask,setActiveDeviceTask] = useState([]);
const[activedevicename,setActiveDeviceName] = useState([]);

useEffect(()=>{
    const fetch = async () => {
         const getdata= await getdevicetaskcomp(sessionStorage.getItem('devicetaskcompSno'))
        console.log(getdata)
        setData(getdata);

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


const handlechangeremark =(e)=>{
    setData({...data,remark: e.target.value})
}

    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const compliances = document.getElementById('compliances').value;
        const task = document.getElementById('task').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('devicetaskcompSno')

 

        console.log(devicename,services,compliances,task,remark,username)

        // 
        // console.log(deviceid,devicetask,devicetaskfreq,remark,username)
        const result = await Updatedevicetaskcomp(sno,devicename,services,compliances,task,remark,username);
        console.log(result)
        if (result === 'Updated') {
            alert("Data Updated");
            sessionStorage.removeItem('devicetaskcompSno');
            window.location.href = './UpdateDeviceTask&Compliances'
        }
        else {
            alert("Server Error");
        }

    }

  
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Edit Device Task & Compliances</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device Name </label>
                                        <select
                                            id="devicename"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden >{data.device_name}</option>
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
                                            <option selected hidden>{data.services}</option>
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
                                            <option selected hidden >{data.add_compliance}</option>
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
                                            <option selected hidden >{data.add_tasks}</option>
                                            {
                                                activedevicetask.map((data, index) => (
                                                    <option key={index} value={data.device_tasks}>{data.device_tasks}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.remark} onChange={handlechangeremark}/>
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => {sessionStorage.removeItem('devicetaskcompSno'); window.location.href = '/Dashboard' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default EditDeviceTaskComp;