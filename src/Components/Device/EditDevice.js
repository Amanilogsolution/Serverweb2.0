import Navbar from '../Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import { ActiveDeviceService, ActiveDevicetype, ActiveDevicegroup, ActiveOperatingSystem, ActiveAgent, Adddevice, ActiveSeries, TotalCount, Getdevice ,Updatedevice} from '../../api/index'
import Select from 'react-select';


function EditDevice() {
    const [data, setData] = useState({});
    const [activeservice, setActiveService] = useState([])
    const [activedevicetype, setActiveDeviceType] = useState([])
    const [activedevicegroup, setActiveDevicegroup] = useState([]);
    const [activeOperatingsystem, setActiveOperatingSystem] = useState([])
    const [activeagent, setActiveAgent] = useState([])

    // const [selectService, setSelectedService] = useState([]);

    // const [deviceid, setDeviceID] = useState()


    useEffect(() => {
        const fetchdata = async () => {
            const result = await ActiveDeviceService()
            setActiveService(result)
            const DeviceType = await ActiveDevicetype()
            setActiveDeviceType(DeviceType)
            const Activedevicegroup = await ActiveDevicegroup()
            setActiveDevicegroup(Activedevicegroup)
            const Operatingsystem = await ActiveOperatingSystem()
            setActiveOperatingSystem(Operatingsystem)
            const Agent = await ActiveAgent()
            setActiveAgent(Agent)

            const getdata = await Getdevice(sessionStorage.getItem('deviceSno'))
            console.log(getdata)
            setData(getdata);

            // const series = await ActiveSeries()
            // if(!series){
            //     alert('Active Series')
            // }
            // console.log(series)
            // const ser = series.device_id
            // console.log(ser)
            // const count = await TotalCount('tbl_devices')
            // let countincrement = count.count+1;
            // let countnum = ''+countincrement;
            // console.log(countnum)
            // setDeviceID(ser+countnum)
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const sno= sessionStorage.getItem('deviceSno');
        const deviceid= document.getElementById('deviceid').value;
        const devicename = document.getElementById('devicename').value
        const devicetype = document.getElementById('devicetype').value;
        const devicegroup = document.getElementById('devicegroup').value;
        const deviceipaddr = document.getElementById('deviceipaddr').value;
        const devicehost = document.getElementById('devicehost').value;
        const operatingsystem = document.getElementById('operatingsystem').value;
        const services = document.getElementById('deviceservice').value;
        const createdate = document.getElementById('createdate').value
        const registerdate = document.getElementById('registerdate').value
        const agent = document.getElementById('agent').value
        const remark = document.getElementById('remark').value
        const username= sessionStorage.getItem('UserName')

        // console.log('api',sno,deviceid,devicename,devicetype,devicegroup,deviceipaddr,devicehost,operatingsystem,services,createdate,registerdate,agent,remark,username)

            const result = await Updatedevice(sno,deviceid,devicename,devicetype,devicegroup,deviceipaddr,devicehost,operatingsystem,services,createdate,registerdate,agent,remark,username)
            console.log(result)
     
            if(result==='Updated'){
                alert('Data Updated')
   sessionStorage.removeItem('deviceSno');
        window.location.href = '/ShowDevice'
            }
            else{
                alert("Server not response...")
            }
     

    }


     const handlechangedevicename=(e)=>{
        e.preventDefault();
        setData({device_name:e.target.value})
     }
     const handlechangeipadd=(e)=>{
        e.preventDefault();
        setData({device_ip_address:e.target.value})
     }
     const handlechangehost=(e)=>{
        e.preventDefault();
        setData({device_host_master:e.target.value})
     }
     const handlechangeremark=(e)=>{
        e.preventDefault();
        setData({remark:e.target.value})
     }
    // let options = activeservice.map((ele) => {
    //     return { value: ele.device_services, label: ele.device_services };
    // })

    // const handleChange = (selectedOption) => {
    //     setSelectedService(selectedOption)
    // }

    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "700px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Edit Device</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" id="deviceid" className="form-control" disabled value={data.device_id} />
                                    </div>
                                    <div className="form-group">
                                        <label>Device Name </label>
                                        <input type="text" className="form-control" id='devicename' value={data.device_name} onChange={handlechangedevicename}/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6" >
                                            <label>Device Type</label>
                                            <select id="devicetype" className="form-control col-md-12" >
                                                <option selected hidden>{data.device_type}</option>

                                                {
                                                    activedevicetype.map((data, index) => (
                                                        <option key={index} value={data.device_type}>{data.device_type}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>Device Group</label>

                                            <select
                                                id="devicegroup"
                                                className="form-control col-md-12"
                                            >
                                                <option selected hidden >{data.device_group}</option>
                                                {
                                                    activedevicegroup.map((data, index) => (
                                                        <option key={index} value={data.device_group}>{data.device_group}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group " >
                                        <label>Device IP Address</label>
                                        <input type="text" className="form-control" id='deviceipaddr' value={data.device_ip_address} onChange={handlechangeipadd}/>
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Host Master</label>
                                        <input type="text" className="form-control" id='devicehost' value={data.device_host_master} onChange={handlechangehost}/>
                                    </div>
                                    <div className="form-group " >
                                        <label>Operating System</label>
                                        <select id="operatingsystem" className="form-control col-md-12" >
                                            <option selected hidden >{data.device_os}</option>
                                            {
                                                activeOperatingsystem.map((data, index) => (
                                                    <option key={index} value={data.operating_system}>{data.operating_system}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label>Select Services</label>
                                        {/* <input id="services" className="form-control col-md-12" value={data.services} /> */}
                                        {/* <Select
                                            options={options}
                                            isMulti={true}
                                            onChange={handleChange}
                                            
                                        /> */}


                                        <select id="deviceservice" className="form-control col-md-12" >
                                            <option selected hidden >{data.services}</option>
                                            {
                                                activeservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-row">

                                        <div className="form-group col-md-6" >
                                            <label>Device Creation Date</label>
                                            <input type="date" className="form-control" id='createdate' />
                                        </div>
                                        <div className="form-group col-md-6" >
                                            <label>Device Registration Date</label>
                                            <input type="date" className="form-control" id='registerdate' />
                                        </div>
                                    </div>

                                    <div className="form-group " >
                                        <label>Agent</label>
                                        <select id="agent" className="form-control col-md-12" >
                                            <option selected hidden >{data.agent}</option>
                                            {
                                                activeagent.map((data, index) => (
                                                    <option key={index} value={data.agent_name}>{data.agent_name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.remark} onChange={handlechangeremark}/>
                                    </div>

                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('deviceSno'); window.location.href = '/Device-Type' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default EditDevice;