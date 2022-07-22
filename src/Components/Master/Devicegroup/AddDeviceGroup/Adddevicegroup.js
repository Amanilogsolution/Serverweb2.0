import React, { useEffect, useState } from 'react'
import Navbar from '../../../Navbar/Navbar';
import { Adddevicegroup, ActiveSeries, TotalCount } from '../../../../api'

function AddDevicegroup() {
    const [agentgroupid, setAgentGroupID] = useState()

    useEffect(async () => {
        const series = await ActiveSeries()
        if (!series) {
            alert('Please add/active  the Series')
        }
        const ser = series.group_id
        const count = await TotalCount('tbl_device_group')
        let countincrement = count.count + 1;
        let countnum = '' + countincrement;
        setAgentGroupID(ser + countnum)

    })

    const handleadddevice = async (e) => {
        e.preventDefault();
        // document.getElementById('subnitbtn').disabled=true;
        const devicegroup = document.getElementById('devicegroup').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!devicegroup) {
            alert('Please enter the mandatory field')
        }
        else {
            const result = await Adddevicegroup(agentgroupid, devicegroup, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                window.location.href = 'Showdevicegroup'
            }
            else if (result === 'Already') {
                alert('Device Group already Exist');
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
                                <h4 className=" mt-2 text-center" >Add Device Group</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" disabled value={agentgroupid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Group <span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control" id='devicegroup' />
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
                </div>
            </div>
        </>
    )
}

export default AddDevicegroup;