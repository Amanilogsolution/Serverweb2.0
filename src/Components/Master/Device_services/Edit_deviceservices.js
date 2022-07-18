import Navbar from '../../Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Getdeviceservicesdata,Updatedeviceservice } from '../../../api'

function EditDevicetype() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const snodata = sessionStorage.getItem('deviceservicesSno');
            const getdata = await Getdeviceservicesdata(snodata);
            setData(getdata)
        }
        fetchdata();

    }, [])


    const handlechangedeviceid = (e) => {
        setData({ ...data, id: e.target.value })
    }

    const handlechangedeviceservices = (e) => {
        setData({ ...data, device_services: e.target.value })
    }
    const handlechangedeviceremark = (e) => {
        setData({ ...data, remark: e.target.value })
    }

    const handlesubmitdata = async (e) => {
        e.preventDefault();
        const sno = sessionStorage.getItem('deviceservicesSno');
        const deviceserviceid = document.getElementById('id').value;
        const device_service = document.getElementById('deviceservices').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if(!deviceserviceid || !device_service){
            alert("Please Enter the ID and Services")
        }
        else{
            const updataresult = await Updatedeviceservice(sno,deviceserviceid,device_service,remark,username);
            if (updataresult === 'Updated') {
                alert("Data updated")
                sessionStorage.removeItem('deviceservicesSno');
                window.location.href = './ShowDeviceservices';
            }
            else{
                alert("Server not Response!...")
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
                                <h4 className=" mt-2 text-center" >Edit Device Services</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label> ID </label>
                                        <input type="text" className="form-control" id='id' value={data.id} onChange={handlechangedeviceid}/>
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Services </label>
                                        <input type="text" className="form-control" id='deviceservices' value={data.device_services} onChange={handlechangedeviceservices}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3"  value={data.remark} onChange={handlechangedeviceremark}/>
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handlesubmitdata}>Submit</button>
                                        <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('deviceservicesSno'); window.location.href = '/ShowDeviceservices' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
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

export default EditDevicetype;