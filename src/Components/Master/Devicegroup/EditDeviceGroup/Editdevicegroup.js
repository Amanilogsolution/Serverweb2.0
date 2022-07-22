
import Navbar from '../../../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { Getdevicegroup, Updatedevicegroup } from '../../../../api'

function EditDevicegroup() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const getdata = await Getdevicegroup(sessionStorage.getItem('devicegroupSno'));
            setData(getdata)
        }
        fetchdata();
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled = true;
        const deviceid = document.getElementById('deviceid').value;
        const devicegroup = document.getElementById('devicegroup').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');
        if (!devicegroup) {
            alert("Please enter the mandatory field")
        }
        else {
            const result = await Updatedevicegroup(sessionStorage.getItem('devicegroupSno'), deviceid, devicegroup, remark, username);
            if (result) {
                alert('Updated')
                sessionStorage.removeItem('devicegroupSno');
                window.location.href = 'Showdevicegroup'
            }
            else {
                alert("Server Error");
            }
        }

    }

    const handleChangeID = (e) => {
        setData({ ...data, id: e.target.value })
    }

    const handleChangeDeviceGroup = (e) => {
        setData({ ...data, device_group: e.target.value })
    }

    const handleChangeRemark = (e) => {
        setData({ ...data, remark: e.target.value })

    }
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Edit Device Group</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" disabled value={data.id} id='deviceid' onChange={(e) => handleChangeID(e)} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Group<span style={{ color: "red" }}>*</span> </label>
                                        <input type="text" className="form-control" value={data.device_group} id='devicegroup' onChange={(e) => handleChangeDeviceGroup(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" value={data.remark} type="text" id='remark' rows="3" onChange={(e) => handleChangeRemark(e)} />
                                    </div>
                                    <div className="form-group" >
                                        <button type="button" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('devicegroupSno'); window.location.href = '/Showdevicegroup' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
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

export default EditDevicegroup;