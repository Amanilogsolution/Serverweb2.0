import Navbar from '../Navbar/Navbar';
import React, { useEffect, useState } from 'react'
import {ActiveDeviceService,ActiveDevicetype,ActiveDevicegroup,ActiveOperatingSystem,ActiveAgent,Adddevice,ActiveSeries,TotalCount} from '../../api/index'
import Select from 'react-select';


function AddDevice() {

  const [activeservice,setActiveService] = useState([])
  const [activedevicetype,setActiveDeviceType] = useState([])
  const [activedevicegroup,setActiveDevicegroup] = useState([]);
  const [activeOperatingsystem,setActiveOperatingSystem] = useState([])
  const [activeagent,setActiveAgent] = useState([])

  const [selectService,setSelectedService] = useState([]);

  const [deviceid,setDeviceID] = useState()


    useEffect(() => {
        const fetchdata = async() =>{
            const result = await ActiveDeviceService()
            setActiveService(result)
            const DeviceType = await ActiveDevicetype()
            setActiveDeviceType(DeviceType)
            const Activedevicegroup = await ActiveDevicegroup()
            setActiveDevicegroup(Activedevicegroup)
            const Operatingsystem = await ActiveOperatingSystem()
            setActiveOperatingSystem(Operatingsystem)
            const Agent = await ActiveAgent()
            console.log(Agent)
            setActiveAgent(Agent)   
            
            const series = await ActiveSeries()
            if(!series){
                alert('Active Series')
            }
            console.log(series)
            const ser = series.device_id
            console.log(ser)
            const count = await TotalCount('tbl_devices')
            let countincrement = count.count+1;
            let countnum = ''+countincrement;
            console.log(countnum)
            setDeviceID(ser+countnum)
        }
        fetchdata()
    },[])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const devicename = document.getElementById('devicename').value
        const devicetype = document.getElementById('devicetype').value;
        const devicegroup = document.getElementById('devicegroup').value;
        const deviceipaddr = document.getElementById('deviceipaddr').value;
        const devicehost = document.getElementById('devicehost').value;
        const operatingsystem = document.getElementById('operatingsystem').value;
        const createdate = document.getElementById('createdate').value
        const registerdate = document.getElementById('registerdate').value
        const agent = document.getElementById('agent').value
        const remark = document.getElementById('remark').value
        console.log(devicename,devicetype,devicegroup,deviceipaddr,devicehost,operatingsystem,selectService,createdate,registerdate,agent)

        selectService.forEach(async(datas)=>{
            const deviceservice = datas.value
           const result =  await Adddevice(deviceid,devicename,devicetype,devicegroup,deviceipaddr,devicehost,operatingsystem,deviceservice,createdate,registerdate,agent,remark,sessionStorage.getItem('UserName'))
        })
        window.location.href='/ShowDevice'

    }
    let options = activeservice.map((ele) => {
        return { value: ele.device_services, label: ele.device_services };
    })

    const handleChange = (selectedOption) => {
        setSelectedService(selectedOption)
    }

    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "700px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Add Device</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" disabled value={deviceid}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Device Name </label>
                                        <input type="text" className="form-control" id='devicename' />
                                    </div>
                                    <div className="form-row">
                                    <div className="form-group col-md-6" >
                                        <label>Device Type</label>
                                        <select id="devicetype" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Type</option>
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
                                            <option selected hidden value="India">Choose Group</option>
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
                                        <input type="text" className="form-control" id='deviceipaddr' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Host Master</label>
                                        <input type="text" className="form-control" id='devicehost' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Operating System</label>
                                        <select id="operatingsystem" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Operating System</option>
                                            {
                                                activeOperatingsystem.map((data, index) => (
                                                    <option key={index} value={data.operating_system}>{data.operating_system}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label>Select Services</label>
                                        <Select
                                            options={options}
                                            isMulti={true}
                                            onChange={handleChange}
                                        />


                                        {/* <select id="deviceservice" className="form-control col-md-12" >
                                            <option selected hidden value="India">Choose Service</option>
                                            {
                                                activeservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select> */}
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
                                            <option selected hidden value="India">Choose Agent</option>
                                            {
                                                activeagent.map((data, index) => (
                                                    <option key={index} value={data.agent_name}>{data.agent_name}</option>
                                                ))
                                            }
                                        </select>
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

export default AddDevice;