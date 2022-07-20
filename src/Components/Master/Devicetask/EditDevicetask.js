import Navbar from '../../Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import {Getdevicetask,Updatedevicetask} from '../../../api'

function EditDevicetask() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const snodata = sessionStorage.getItem('devicetaskSno');
            const getdata = await Getdevicetask(snodata);
            console.log(getdata)
            setData(getdata)
        }
        fetchdata();
    }, [])


    const handlechangedeviceid = (e) => {
        setData({ ...data, id: e.target.value })
    }

    const handlechangedevicetask = (e) => {
        setData({ ...data, device_tasks: e.target.value })
    }
    const handlechangedevicetaskfreq = (e) => {
        setData({ ...data, device_tasks_frequency: e.target.value })
    }
    
    const handlechangedeviceremark = (e) => {
        setData({ ...data, remark: e.target.value })
    }

    const handlesubmitdata = async (e) => {
        e.preventDefault();
        const sno = sessionStorage.getItem('devicetaskSno');
        const devicetypeid = document.getElementById('deviceid').value;
        const device_task = document.getElementById('devicetask').value;
        const devicetaskfreq = document.getElementById('devicetaskfreq').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');
        console.log(sno,devicetypeid,device_task,devicetaskfreq,remark,username)

        const updataresult = await Updatedevicetask(sno,devicetypeid,device_task,devicetaskfreq,remark,username);
        if (updataresult === 'Updated') {
            alert("Data updated")
            sessionStorage.removeItem('devicetaskSno'); 
            window.location.href = './ShowDevicetask';
            
        }
        else{
            alert("Server not response ...")
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
                                <h4 className=" mt-2 text-center" >Edit Device Task</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" id='deviceid' disabled value={data.id} onChange={handlechangedeviceid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Task </label>
                                        <input type="text" className="form-control" id='devicetask' value={data.device_tasks} onChange={handlechangedevicetask} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Task Frequency </label>
                                        <input type="text" className="form-control" id='devicetaskfreq' value={data.device_tasks_frequency} onChange={handlechangedevicetaskfreq} />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.remark} onChange={handlechangedeviceremark} />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handlesubmitdata}>Update</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('devicetaskSno'); window.location.href = '/ShowDevicetask' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
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

export default EditDevicetask;