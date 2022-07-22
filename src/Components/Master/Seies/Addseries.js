import Navbar from '../../Navbar/Navbar';
import React from 'react';
import { Addseriesapi } from '../../../api'

function Addseries() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const typeid = document.getElementById('typeid').value;
        const seriesid = document.getElementById('seriesid').value;
        const taskid = document.getElementById('taskid').value;
        const agentid = document.getElementById('agentid').value;
        const groupid = document.getElementById('groupid').value;
        const osid = document.getElementById('osid').value;
        const compid = document.getElementById('compid').value;
        const deviceid = document.getElementById('deviceid').value;
        const taskcompid = document.getElementById('taskcompid').value;
        const username = sessionStorage.getItem('UserName');

        if (!typeid || !seriesid || !taskid || !agentid || !groupid || !osid || !compid || !deviceid || !taskcompid) {
            alert("All field are mandatory...")
        }
        else {
            const result = await Addseriesapi(typeid, seriesid, taskid, agentid, groupid, osid, compid, deviceid, taskcompid, username);
            if (result === 'Added') {
                window.location.href = './Totalseries'
            }
            else {
                alert("Server Error");
            }
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
                                <h4 className=" mt-2 text-center" >Add Series</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Device Type ID </label>
                                            <input type="text" className="form-control" id='typeid' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                        <label>Device Services ID </label>
                                            <input type="text" className="form-control" id='seriesid' />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Device Task ID</label>
                                            <input type="text" className="form-control" id='taskid' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>Agent ID</label>
                                            <input type="text" className="form-control" id='agentid' max={10} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Group ID</label>
                                            <input type="text" className="form-control" id='groupid' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>OS ID</label>
                                            <input type="text" className="form-control" id='osid' max={10} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Compliance ID</label>
                                            <input type="text" className="form-control" id='compid' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>Device ID</label>
                                            <input type="text" className="form-control" id='deviceid' max={10} />
                                        </div>
                                    </div>
                                    <div className="form-group " >
                                        <label>Task & Compliance ID</label>
                                        <input type="text" className="form-control" id='taskcompid' />
                                    </div>

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default Addseries;