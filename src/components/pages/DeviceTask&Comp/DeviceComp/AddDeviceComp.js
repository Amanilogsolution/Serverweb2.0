import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import { ActiveDeviceService, ActiveServiceCompliance, Activedevice, AddDevicetaskCompliance } from '../../../../api/index'
import Select from 'react-select';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddDeviceComp() {

    const [activeservice, setActiveService] = useState([])
    const [activecompliance, setActiveCompliance] = useState([]);
    const [activedevicename, setActiveDeviceName] = useState([]);
    const [compliance, setCompliance] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const devicename = await Activedevice()
            setActiveDeviceName(devicename)
            const result = await ActiveDeviceService()
            setActiveService(result)
            const compliance = await ActiveServiceCompliance()
            setActiveCompliance(compliance)
        }
        fetch()

    }, [])



    const handleadddevice = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled = true;
        const devicename = document.getElementById('devicename').value;
        const services = document.getElementById('services').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!devicename || !services || !compliance.length) {
            alert("Please enter Mandatory field")
            document.getElementById('subnitbtn').disabled = false;

        }
        else {
            const arryresult = [];
            compliance.map((e) => {
                const compliance = e.value
                const result = AddDevicetaskCompliance(devicename, services, compliance, remark, username)
                arryresult.push(result);
            })
            if (arryresult.length > 0) {
                alert('Added');
                window.location.href = '/TotalDeviceComp'
            }
            else {
                alert('Server not response')
                document.getElementById('subnitbtn').disabled = false;

            }

        }

    }

    let options = activecompliance.map((ele) => {
        return { value: ele.services_compliance, label: ele.services_compliance };
    })


    const handleChange = (selectedOption) => {
        setCompliance(selectedOption)
    }



    return (
        <>
            <Sidebar>
                <div className='main_container' >
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Device Compliances</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Device Compliances</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalDeviceComp' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card  card-div">
                        {/* <header className="card-header" >
                            <h4 className=" mt-2 text-center" >Add Device Compliances</h4>
                        </header> */}
                        <article className="card-body" >
                            <form style={{ margin: "0px 20px 0px 15px" }}>
                                <div className="form-group">
                                    <label>Device Name<span style={{ color: "red" }}>*</span> </label>
                                    <select
                                        id="devicename"
                                        className="form-select"
                                    >
                                        <option hidden value="">Choose Device Name</option>
                                        {
                                            activedevicename.map((data, index) => (
                                                <option key={index} value={data.device_name}>{data.device_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group " >
                                    <label>Select Services <span style={{ color: "red" }}>*</span></label>
                                    <select
                                        id="services"
                                        className="form-select"
                                    >
                                        <option hidden value=" ">Choose Service</option>
                                        {
                                            activeservice.map((data, index) => (
                                                <option key={index} value={data.device_services}>{data.device_services}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group " >
                                    <label> Compliance<span style={{ color: "red" }}>*</span> </label>

                                    <Select
                                        options={options}
                                        isMulti={true}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Remarks</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                </div>
                                <div className="form-group mt-3" >
                                    <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleadddevice}>Submit</button>&nbsp;
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddDeviceComp;