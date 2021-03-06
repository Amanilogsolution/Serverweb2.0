import Navbar from '../../Navbar/Navbar';
import { Adddeviceservice, ActiveSeries, TotalCount } from '../../../api'
import React, { useEffect, useState } from 'react'

function AddDeviceservices() {
    const [deviceserviceid, setDeviceServiceID] = useState()

    useEffect(async () => {
        const series = await ActiveSeries()
        if (!series) {
            alert('Please add/active  the Series')
        }
        const ser = series.services_id
        const count = await TotalCount('tbl_device_services')
        let countincrement = count.count + 1;
        let countnum = '' + countincrement;
        setDeviceServiceID(ser + countnum)

    })

    const handleadddevice = async (e) => {
        e.preventDefault();
        const device_service = document.getElementById('deviceservices').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');


        if (!device_service) {
            alert("Please enter Mandatory field")
        }
        else {
            const result = await Adddeviceservice(deviceserviceid, device_service, remark, username);
            if (result === 'Added') {
                alert("Data Added")
                window.location.href = './ShowDeviceservices'
            }
            else if (result === 'Already') {
                alert('This Device Type already Exist');
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
                                <h4 className=" mt-2 text-center" >Add Device Services</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label> ID </label>
                                        <input type="text" className="form-control" disabled value={deviceserviceid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Services<span style={{ color: "red" }}>*</span>  </label>
                                        <input type="text" className="form-control" id='deviceservices' />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/ShowDeviceservices' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default AddDeviceservices;