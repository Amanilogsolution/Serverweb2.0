import Navbar from '../../Navbar/Navbar';
import React,{useEffect,useState} from 'react'
import {Addagent,ActiveSeries,TotalCount} from '../../../api'

function AddAgent() {
    const [agentid,setAgentID] = useState()
    useEffect (async()=>{
        const series = await ActiveSeries()
        if(!series){
            alert('Please add/active  the Series')
        }
        const ser = series.agent_id
        const count = await TotalCount('tbl_agent_master')
        let countincrement = count.count+1;
        let countnum = ''+countincrement;
        setAgentID(ser+countnum)

    })

    const handleadddevice = async (e) => {
        e.preventDefault();
        // document.getElementById('subnitbtn').disabled=true;
        const agentname = document.getElementById('agentname').value;
        const agentemail = document.getElementById('agentemail').value;
        const agentphone = document.getElementById('agentphone').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');
 
        if (!agentname) {
            alert("Please enter Mandatory field")
        }
        else {
        const result = await Addagent(agentid,agentname,agentemail,agentphone,remark,username);
        if (result === 'Added') {
            alert('Data Added')
            window.location.href = './ShowAgent'
        }
        else {
            alert("Server Error");
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
                                <h4 className=" mt-2 text-center" >Add Agent</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label> ID </label>
                                        <input type="text" className="form-control" disabled value={agentid} />
                                    </div>
                                    <div className="form-group " >
                                        <label> Agent Name <span style={{color:"red"}}>*</span></label>
                                        <input type="text" className="form-control" id='agentname' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Agent Email</label>
                                        <input type="email" className="form-control" id='agentemail' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Agent Phone</label>
                                        <input type="number" className="form-control" id='agentphone' max={10} />
                                    </div>
                                  
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="reset" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        <button type="button" onClick={() => { window.location.href = '/ShowAgent' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>

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

export default AddAgent;