import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import { getdevicetaskcomp } from '../../../../api'
import { ActiveServiceCompliance, Updatedevicetaskcomp } from '../../../../api/index'

function EditDeviceComp() {
    // const [device,setDevice]=useState([]);
    // const [services,setServices]= useState([]);
    // const [compliances,setCompliances]= useState([]);
    // const [task,setTask]= useState([]);

    const [data, setData] = useState({});
    const [activecompliance, setActiveCompliance] = useState([]);


    useEffect(() => {
        const fetch = async () => {
            const getdata = await getdevicetaskcomp(sessionStorage.getItem('devicecompSno'))
            setData(getdata);

            // const devicename = await Activedevice()
            // setActiveDeviceName(devicename)
            // console.log(devicename)
            // const result = await ActiveDeviceService()
            // setActiveService(result)
            const compliance = await ActiveServiceCompliance()
            setActiveCompliance(compliance)

        }
        fetch()
    }, [])


    const handlechangeremark = (e) => {
        setData({ ...data, remark: e.target.value })
    }

    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const compliances = document.getElementById('compliances').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('devicecompSno')

        const result = await Updatedevicetaskcomp(sno, devicename, services, compliances, remark, username);
        if (result === 'Updated') {
            alert("Data Updated");
            sessionStorage.removeItem('devicetaskcompSno');
            window.location.href = './TotalDeviceComp'
        }
        else {
            alert("Server Error");
        }

    }


    return (
        <>
            <Sidebar>
                <div className='main_container' >
                    <div className="card card-div" >
                        <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Edit Device Compliance</h4>
                        </header>
                        <article className="card-body" >
                            <form style={{ margin: "0px 20px 0px 15px" }}>
                                <div className="form-group">
                                    <label htmlFor='devicename'>Device Name </label>
                                    <input type="text" className="form-control" disabled value={data.device_name} id="devicename" />
                                </div>

                                <div className="form-group " >
                                    <label htmlFor='services'>Select Services </label>
                                    <input type="text" className="form-control" disabled value={data.services} id="services" />

                                </div>
                                <div className="form-group " >
                                    <label htmlFor='compliances'> Compliance </label>
                                    <select
                                        id="compliances"
                                        className="form-control col-md-12"
                                    >
                                        <option value={data.add_compliance} hidden >{data.add_compliance}</option>
                                        {
                                            activecompliance.map((data, index) => (
                                                <option key={index} value={data.services_compliance}>{data.services_compliance}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks</label>
                                    <textarea className="form-control" placeholder="Comments" id='remark' rows="3" value={data.remark} onChange={handlechangeremark} />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                    {/* <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button> */}
                                    <button type="button" onClick={() => { sessionStorage.removeItem('devicetaskcompSno'); window.location.href = '/TotalDeviceComp' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditDeviceComp;