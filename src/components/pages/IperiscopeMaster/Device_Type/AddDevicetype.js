import Sidebar from '../../../Sidebar/Sidebar';
import { AddDevicetypeapi, ActiveSeries, TotalCount } from '../../../../api'
import React, { useEffect, useState } from 'react'

function AddDevicetype() {
    const [deviceid, setDeviceId] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            const series = await ActiveSeries()
            if (!series) {
                alert('Please add/active  the Series')
            }
            const ser = series.type_id
            const count = await TotalCount('tbl_device_type')
            let countincrement = count.count + 1;
            let countnum = '' + countincrement
            setDeviceId(ser + countnum)
        }
        fetchdata()

    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        // document.getElementById('subnitbtn').disabled = true;
        const devicetype = document.getElementById('devicetype').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!devicetype) {
            alert("Please enter Mandatory field")
        }
        else {

            const result = await AddDevicetypeapi(deviceid, devicetype, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                window.location.href = './TotalDeviceType'
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
                    <div className="card card-div" >
                        <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Add Device Type</h4>
                        </header>
                        <article className="card-body" >
                            <form style={{ margin: "0px 20px 0px 15px" }}>
                                <div className="form-group">
                                    <label htmlFor='devicetypeid'>Device ID </label>
                                    <input type="text" className="form-control" id='devicetypeid' value={deviceid} disabled />
                                </div>
                                <div className="form-group " >
                                    <label htmlFor='devicetype'>Device Type </label>
                                    <input type="text" className="form-control" id='devicetype' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet  mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                    <button type="reset" className="btn btn-secondary  mb-4 mt-3" style={{margin :"0px 5px"}}>Reset</button>
                                    <button type="button" onClick={() => { window.location.href = '/TotalDeviceType' }} className="btn btn-secondary mb-4 mt-3">Cancel</button>

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddDevicetype;