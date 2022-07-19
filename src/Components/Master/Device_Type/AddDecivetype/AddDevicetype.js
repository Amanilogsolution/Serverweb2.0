import './add_devicetype.css';
import Navbar from '../../../Navbar/Navbar';
import {AddDevicetypeapi,ActiveSeries,TotalCount} from '../../../../api'
import React,{useEffect,useState} from 'react'

function AddDevicetype() {
    const [deviceid,setDeviceId] = useState()

    useEffect (async()=>{
        const series = await ActiveSeries()
        if(!series){
            alert('Active Series')
        }
        const ser = series.type_id
        console.log(ser)
        const count = await TotalCount('tbl_device_type')
        let countincrement = count.count+1;
        let countnum = ''+countincrement
        setDeviceId(ser+countnum)

    })

    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicetype = document.getElementById('devicetype').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');


        const result = await AddDevicetypeapi(deviceid, devicetype, remark, username);
        if (result === 'Added') {
            window.location.href = './Device-type'
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
                                <h4 className=" mt-2 text-center" >Add Device Type</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" value={deviceid} disabled />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Type </label>
                                        <input type="text" className="form-control" id='devicetype' />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/Device-Type' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default AddDevicetype;