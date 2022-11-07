import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import { ActiveDeviceService, Activedevicetask, Activedevice, Adddevicetaskby } from '../../../../api/index'
import Select from 'react-select';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function AddDeviceServiceTask() {
    const [loading, setLoading] = useState(false)

    const [activeservice, setActiveService] = useState([])
    const [activedevicetask, setActiveDeviceTask] = useState([]);
    const [activedevicename, setActiveDeviceName] = useState([]);
    const [task, setTaskask] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const devicename = await Activedevice()
            setActiveDeviceName(devicename)
            const result = await ActiveDeviceService()
            setActiveService(result)
            const task = await Activedevicetask()
            setActiveDeviceTask(task)
            setLoading(true)

        }
        fetch()

    }, [])



    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)

        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const completion_date = document.getElementById('completion_date').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!devicename || !services || !task.length || !completion_date) {
            alert("Please enter Mandatory field")
            setLoading(true)


        }
        else {
            const arrresult = [];
            task.map((e) => {
                const taskes = e.value
                const result = Adddevicetaskby(devicename, services, taskes, completion_date, remark, username)
                arrresult.push(result);
            })

            if (arrresult.length > 0) {
                alert('Data Added')
                window.location.href = '/TotalDeviceServiceTask'
            }
            else {
                alert('Server not response')
                setLoading(true)


            }

        }

    }

    let options = activedevicetask.map((ele) => {
        return { value: ele.device_tasks, label: ele.device_tasks };
    })

    const handleChange = (selectedOption) => {
        setTaskask(selectedOption)
    }

    return (
        <>
            {
                loading ?
                    <Sidebar>
                        <div className='main_container' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Device Task</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Device Task</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalDeviceServiceTask' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">

                                <article className="card-body" >
                                    <form style={{ margin: "0px 20px 0px 15px" }}>
                                        <div className="form-group">
                                            <label htmlFor='devicename'>Device Name <span style={{ color: "red" }}>*</span></label>
                                            <select
                                                id="devicename"
                                                className="form-select">
                                                <option hidden value=''>Choose Device Name</option>
                                                {
                                                    activedevicename.map((data, index) => (
                                                        <option key={index} value={data.device_name}>{data.device_name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group mt-2" >
                                            <label htmlFor='services'>Select Services <span style={{ color: "red" }}>*</span></label>
                                            <select
                                                id="services"
                                                className="form-select"
                                            >
                                                <option hidden value=''>Choose Service</option>
                                                {
                                                    activeservice.map((data, index) => (
                                                        <option key={index} value={data.device_services}>{data.device_services}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group mt-2" >
                                            <label> Task<span style={{ color: "red" }}>*</span></label>

                                            <Select
                                                options={options}
                                                isMulti={true}
                                                onChange={handleChange}
                                                defaultInputValue=''
                                            />
                                        </div>
                                        <div className="form-group mt-2">
                                            <label htmlFor='completion_date'>Completion Date<span style={{ color: "red" }}>*</span></label>
                                            <input className="form-control" type="date" id='completion_date' />
                                        </div>

                                        <div className="form-group mt-2">
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleadddevice}>Submit</button>&nbsp;
                                            <button type="reset" className="btn btn-secondary ">Reset</button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default AddDeviceServiceTask;