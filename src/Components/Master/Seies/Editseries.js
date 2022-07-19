import Navbar from '../../Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Getseries, Updateseries } from '../../../api'

function Editseries() {
    const [data, setData] = useState({});

    const handleadddevice = async (e) => {
        e.preventDefault();
        const type_id = document.getElementById('typeid').value;
        const services_id = document.getElementById('seriesid').value;
        const task_id = document.getElementById('taskid').value;
        const agent_id = document.getElementById('agentid').value;
        const group_id = document.getElementById('groupid').value;
        const os_id = document.getElementById('osid').value;
        const comp_id = document.getElementById('compid').value;
        const device_id = document.getElementById('deviceid').value;
        const taskandcomp_id = document.getElementById('taskcompid').value;
        const username = sessionStorage.getItem('UserName');
        const sno=sessionStorage.getItem('seriessno')


        const result = await Updateseries(sno,type_id, services_id, task_id, agent_id, group_id, os_id, comp_id, device_id, taskandcomp_id, username);

        if (result === 'Updated') {
            sessionStorage.removeItem('seriessno'); 
            window.location.href = './Totalseries'
        }
        else {
            alert("Server Error");
        }

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
    useEffect(() => {
        const fetchdata = async () => {
            const result = await Getseries(sessionStorage.getItem('seriessno'))
            setData(result);
        }
        fetchdata()
    }, [])
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Edit Series</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label> Type ID </label>
                                            <input type="text" className="form-control" id='typeid' value={data.type_id} onChange={handlechangetypeid} />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label> Service ID </label>
                                            <input type="text" className="form-control" id='seriesid' value={data.services_id} onChange={handlechangeseriesid} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Task ID</label>
                                            <input type="text" className="form-control" id='taskid' value={data.task_id} onChange={handlechangetaskid} />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>Agent ID</label>
                                            <input type="text" className="form-control" id='agentid' max={10} value={data.agent_id} onChange={handlechangeagentid} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Group ID</label>
                                            <input type="text" className="form-control" id='groupid' value={data.group_id} onChange={handlechangegroupid} />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>OS ID</label>
                                            <input type="text" className="form-control" id='osid' max={10} value={data.os_id} onChange={handlechangeosid} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Compliance ID</label>
                                            <input type="text" className="form-control" id='compid' value={data.comp_id} onChange={handlechangecompid} />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>Device ID</label>
                                            <input type="text" className="form-control" id='deviceid' max={10} value={data.device_id} onChange={handlechangedeviceid} />
                                        </div>
                                    </div>
                                    <div className="form-group " >
                                        <label>Task & Compliance ID</label>
                                        <input type="text" className="form-control" id='taskcompid' value={data.taskandcomp_id} onChange={handlechangetaskandcompid} />
                                    </div>

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => {sessionStorage.removeItem('seriessno');  window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default Editseries;