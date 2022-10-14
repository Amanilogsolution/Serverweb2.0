import Sidebar from '../../../Sidebar/Sidebar';
import { AddDevicetaskapi, ActiveSeries, TotalCount } from '../../../../api';
import React, { useEffect, useState } from 'react'


function AddDevicetask() {
    const [devicetaskid, setDeviceTaskId] = useState()

    useEffect(() => {

        const fetchdata = async () => {
            const series = await ActiveSeries()
            if (!series) {
                alert('Please enter the mandatory field')
            }
            const ser = series.task_id
            const count = await TotalCount('tbl_device_tasks')
            let countincrement = count.count + 1;
            let countnum = '' + countincrement
            setDeviceTaskId(ser + countnum)
        }
        fetchdata()

    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicetask = document.getElementById('devicetask').value;
        const devicetaskfreq = document.getElementById('devicetaskfreq').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!devicetask || !devicetaskfreq) {
            alert("Please enter the data")
        }
        else {
            const result = await AddDevicetaskapi(devicetaskid, devicetask, devicetaskfreq, remark, username);
            if (result === 'Added') {
                alert("Data Added")
                window.location.href = './TotalDeviceTask'
            }
            else if (result === 'Already') {
                alert('Data already Exist');
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
                    <div className="card card-div">
                        <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Add Device Task</h4>
                        </header>
                        <article className="card-body" >
                            <form style={{ margin: "0px 20px 0px 15px" }}>
                                <div className="form-group">
                                    <label htmlFor='devicetaskid'>Device ID </label>
                                    <input type="text" className="form-control" id='devicetaskid' disabled value={devicetaskid} />
                                </div>
                                <div className="form-group " >
                                    <label htmlFor='devicetask'>Device Task</label>
                                    <input type="text" className="form-control" id='devicetask' />
                                </div>
                                <div className="form-group " >
                                    <label htmlFor='devicetaskfreq'>Device Task Frequency </label>
                                    <select className="form-control" id='devicetaskfreq'>
                                        <option value='Daily'>Daily</option>
                                        <option value='Weekly'>Weekly</option>
                                        <option value='Monthly'>Monthly</option>
                                        <option value='Quaterly'>Quaterly</option>
                                        <option value='Yearly'>Yearly</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" id='remark' rows="3" />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                    <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                    <button type="button" onClick={() => { window.location.href = '/TotalDeviceTask' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddDevicetask;