import Navbar from '../../../Navbar/Navbar';
import {Addservicecompliance,ActiveDeviceService} from '../../../../api'
import React,{useEffect,useState} from 'react'

function AddServiceCompliance() {
    const [deviceservice,setDeviceService] = useState([])

    useEffect(()=>{
        const fetchdata = async() =>{
            const result = await ActiveDeviceService()
            setDeviceService(result)
            console.log(result)
        } 
        fetchdata();
    },[])

    const handleadddevice=async(e)=>{
        e.preventDefault();
        const servicecomplianceid= document.getElementById('servicecomplianceid').value;
        const DeviceService = document.getElementById('DeviceService').value
        const ServiceCompliance= document.getElementById('servicecompliance').value;
        const remark= document.getElementById('remark').value;
        const username=sessionStorage.getItem('UserName');
      
        const result= await Addservicecompliance(servicecomplianceid,DeviceService,ServiceCompliance,remark,username);
        if (result){
            alert("Added")
            window.location.href='/showservicecompliance'
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
                                <h4 className=" mt-2 text-center" >Add Service Compliance</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Service Compliance ID </label>
                                        <input type="text" className="form-control" id='servicecomplianceid' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Service</label>
                                      
                            <select
                              id="DeviceService"
                              className="form-control col-md-12" 
                            >
                              <option selected hidden value="India">Choose Country</option>
                              {
                                deviceservice.map((data, index) => (
                                  <option key={index} value={data.device_services}>{data.device_services}</option>
                                ))

                              }
                            </select>
                          {/* </div> */}
                                    </div>
                                    <div className="form-group " >
                                        <label> Service Compliance</label>
                                        <input type="text" className="form-control" id='servicecompliance' />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={()=>{window.location.href='/Device-Type' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default AddServiceCompliance;