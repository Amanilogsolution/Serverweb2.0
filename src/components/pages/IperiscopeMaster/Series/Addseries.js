import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { Addseriesapi } from '../../../../api'

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
                alert('Data Added ')
                window.location.href = './Totalseries'
            }
            else {
                alert("Server Error");
            }
        }

    }
    return (
        <>
            <Sidebar >
                <div className='main_container' >
                        <div className="card card-div">
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Add Series</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label htmlFor='typeid'>Device Type ID </label>
                                            <input type="text" className="form-control" id='typeid' />
                                        </div>
                                        <div className="form-group col-md" >
                                            <label htmlFor='seriesid'>Device Services ID </label>
                                            <input type="text" className="form-control" id='seriesid' />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md" >
                                            <label htmlFor='taskid'>Device Task ID</label>
                                            <input type="text" className="form-control" id='taskid' />
                                        </div>
                                        <div className="form-group col-md" >
                                            <label htmlFor='agentid'>Agent ID</label>
                                            <input type="text" className="form-control" id='agentid' max={10} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md" >
                                            <label htmlFor='groupid'>Group ID</label>
                                            <input type="text" className="form-control" id='groupid' />
                                        </div>
                                        <div className="form-group col-md" >
                                            <label htmlFor='osid'>OS ID</label>
                                            <input type="text" className="form-control" id='osid' max={10} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md" >
                                            <label htmlFor='compid'>Compliance ID</label>
                                            <input type="text" className="form-control" id='compid' />
                                        </div>
                                        <div className="form-group col-md" >
                                            <label htmlFor='deviceid'>Device ID</label>
                                            <input type="text" className="form-control" id='deviceid' max={10} />
                                        </div>
                                    </div>
                                    <div className="form-group " >
                                        <label htmlFor='taskcompid'>Task & Compliance ID</label>
                                        <input type="text" className="form-control" id='taskcompid' />
                                    </div>

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Submit</button>
                                        <button type="reset" className="btn btn-secondary ml-2 mb-4 mt-3" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
            </Sidebar>
        </>
    )
}

export default Addseries;