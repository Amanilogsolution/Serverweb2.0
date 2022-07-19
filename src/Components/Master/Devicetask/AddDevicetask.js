import Navbar from '../../Navbar/Navbar';
import {Adddevicetask,ActiveSeries,TotalCount} from '../../../api';
import React,{useEffect,useState} from 'react'


function AddDevicetask() {
    const [devicetaskid,setDeviceTaskId] = useState()

    useEffect (async()=>{
        const series = await ActiveSeries()
        console.log(series)
        if(!series){
            alert('Active Series')
        }
        const ser = series.task_id
        console.log(ser)
        const count = await TotalCount('tbl_device_tasks')
        let countincrement = count.count+1;
        let countnum = ''+countincrement
        setDeviceTaskId(ser+countnum)

    })

    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicetask = document.getElementById('devicetask').value;
        const devicetaskfreq = document.getElementById('devicetaskfreq').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        const result = await Adddevicetask(devicetaskid,devicetask,devicetaskfreq,remark,username);
        if (result === 'Added') {
            window.location.href = './ShowDevicetask'
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
                                <h4 className=" mt-2 text-center" >Add Device Task</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" disabled value={devicetaskid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Task </label>
                                        <input type="text" className="form-control" id='devicetask' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Task Frequency </label>
                                        <select  className="form-control" id='devicetaskfreq'>
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Quaterly</option>
                                            <option>Year</option>
                                        </select>
                                        {/* <input type="text" className="form-control" id='devicetaskfreq' /> */}
                                    </div>
                                  
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/ShowDevicetask' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default AddDevicetask;