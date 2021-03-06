import Navbar from '../Navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { ActiveDeviceService, ActiveServiceCompliance, Activedevicetask, Activedevice, Adddevicetaskcompliance, Adddevicetaskby } from '../../api/index'
import Select from 'react-select';

function AddDeviceTaskComp() {
    // const [device, setDevice] = useState([]);
    // const [services, setServices] = useState([]);
    // const [compliances, setCompliances] = useState([]);

    const [mindate, setMindate] = useState(0)
    const [activeservice, setActiveService] = useState([])
    const [activecompliance, setActiveCompliance] = useState([]);
    const [activedevicetask, setActiveDeviceTask] = useState([]);
    const [activedevicename, setActiveDeviceName] = useState([]);

    const [compliance, setCompliance] = useState([])
    const [task, setTask] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const devicename = await Activedevice()
            setActiveDeviceName(devicename)
            const result = await ActiveDeviceService()
            setActiveService(result)
            const compliance = await ActiveServiceCompliance()
            setActiveCompliance(compliance)
            const devicetask = await Activedevicetask()
            setActiveDeviceTask(devicetask)
        }
        fetch();
        Todaydate()

    }, [])



    const handleadddevice = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled = true;
        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const completion_date = document.getElementById('completion_date').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!devicename || !services || !completion_date) {
            alert('Please enter the mandatory field')
        }
        else {
            const arryresult = [];
            task.map((e) => {
                const taskes = e.value
                const result = Adddevicetaskby(devicename, services, taskes, completion_date, remark, username);
                arryresult.push(result);
            })
            compliance.map((e) => {
                const compliance = e.value
                const result = Adddevicetaskcompliance(devicename, services, compliance, remark, username)
                arryresult.push(result);
            })

            setTimeout(() => {
                if (arryresult.length > 0) {
                    alert('Data added')
                    window.location.href = '/Dashboard'
                }
                else {
                    alert('server error');
                }
            }, 2000)
        }

    }

    let options = activecompliance.map((ele) => {
        return { value: ele.services_compliance, label: ele.services_compliance };
    })

    let opt = activedevicetask.map((ele) => {
        return { value: ele.device_tasks, label: ele.device_tasks };

    })

    const handleChange = (selectedOption) => {
        setCompliance(selectedOption)
    }
    const handleChangeTAsk = (selectedOption) => {
        setTask(selectedOption)
    }


    const Todaydate = () => {
        var date = new Date();

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;

        var today = year + "-" + month + "-" + day;
        document.getElementById("completion_date").value = today;
        setMindate(today);

    }

    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Add Device Task & Compliances</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device Name </label>
                                        <select
                                            id="device"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Device Name</option>
                                            {
                                                activedevicename.map((data, index) => (
                                                    <option key={index} value={data.device_name}>{data.device_name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label>Select Services </label>
                                        <select
                                            id="devicegroup"
                                            className="form-control col-md-12"
                                        >
                                            <option selected hidden value="India">Choose Service</option>
                                            {
                                                activeservice.map((data, index) => (
                                                    <option key={index} value={data.device_services}>{data.device_services}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group " >
                                        <label> Compliance </label>

                                        <Select
                                            options={options}
                                            isMulti={true}
                                            onChange={handleChange}
                                        />


                                    </div>
                                    <div className="form-group " >
                                        <label> Task </label>
                                        <Select
                                            options={opt}
                                            isMulti={true}
                                            onChange={handleChangeTAsk}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label>Completion Date</label>
                                        <input className="form-control" type="date" id='completion_date' min={mindate} />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/Dashboard' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
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

export default AddDeviceTaskComp;