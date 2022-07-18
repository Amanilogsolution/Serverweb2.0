import './editdevicetype.css';
import Navbar from '../../../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { Getdevicetype,Updatedevicetype } from '../../../../api'

function EditDevicetype() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const snodata = sessionStorage.getItem('devicetypeSno');
            const getdata = await Getdevicetype(snodata);
            setData(getdata)
        }
        fetchdata();
    }, [])


    const handlechangedeviceid = (e) => {
        setData({ ...data, id: e.target.value })
    }

    const handlechangedevicetype = (e) => {
        setData({ ...data, device_type: e.target.value })
    }
    const handlechangedeviceremark = (e) => {
        setData({ ...data, remark: e.target.value })
    }

    const handlesubmitdata = async (e) => {
        e.preventDefault();
        const sno = sessionStorage.getItem('devicetypeSno');
        const devicetypeid = document.getElementById('deviceid').value;
        const device_type = document.getElementById('devicetype').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        const updataresult = await Updatedevicetype(sno, devicetypeid, device_type, remark, username);
        if (updataresult === 'Updated') {
            alert("Data updated")
            sessionStorage.removeItem('devicetypeSno');
            window.location.href = './Device-Type';
           
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
                                <h4 className=" mt-2 text-center" >Edit Device Type</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" id='deviceid' value={data.id} onChange={handlechangedeviceid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Type </label>
                                        <input type="text" className="form-control" id='devicetype' value={data.device_type} onChange={handlechangedevicetype} />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.remark} onChange={handlechangedeviceremark} />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handlesubmitdata}>Submit</button>
                                        <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('devicetypeSno'); window.location.href = '/Device-Type' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
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

export default EditDevicetype;