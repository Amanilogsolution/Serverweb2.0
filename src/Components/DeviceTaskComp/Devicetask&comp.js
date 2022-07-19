import Navbar from '../Navbar/Navbar';
import React, { useEffect,useState } from 'react';
// import {Adddevicetask} from '../../../api'

function AddDeviceTaskComp() {
const [device,setDevice]=useState([]);
const [services,setServices]= useState([]);
const [compliances,setCompliances]= useState([]);
const [task,setTask]= useState([]);



    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const compliances = document.getElementById('compliances').value;
        const task = document.getElementById('task').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

 

        // console.log(deviceid,devicetask,devicetaskfreq,remark,username)
        // console.log(deviceid,devicetask,devicetaskfreq,remark,username)
        // const result = await Adddevicetask(deviceid,devicetask,devicetaskfreq,remark,username);
        // if (result === 'Added') {
        //     window.location.href = './ShowDevicetask'
        // }
        // else {
        //     alert("Server Error");
        // }

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
                                        <select  className="form-control" id='devicename'>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Quaterly</option>
                                            <option>Year</option>
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label>Select Services </label>
                                        <select  className="form-control" id='services'>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Quaterly</option>
                                            <option>Year</option>
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label> Compliance </label>
                                        <select  className="form-control" id='compliances'>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Quaterly</option>
                                            <option>Year</option>
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label> Task </label>
                                        <select  className="form-control" id='task'>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Quaterly</option>
                                            <option>Year</option>
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