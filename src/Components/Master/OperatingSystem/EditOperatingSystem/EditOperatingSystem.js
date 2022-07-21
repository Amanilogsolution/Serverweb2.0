
import Navbar from '../../../Navbar/Navbar';
import { useEffect, useState } from 'react';
import { GetOperatingSystem, EditOperatingsystem } from '../../../../api'

function EditOperatingSystem() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const getdata = await GetOperatingSystem(sessionStorage.getItem('OperatingSystemSno'));
            setData(getdata)
        }
        fetchdata();
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled=true;
        const operatingsystemid = document.getElementById('operatingsystemid').value;
        const operatingsystem = document.getElementById('operatingsystem').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');


        if (!operatingsystem) {
            alert("Please enter the mandatory Field")
        }
        else {
            const result = await EditOperatingsystem(sessionStorage.getItem('OperatingSystemSno'), operatingsystemid, operatingsystem, remark, username);
            if (result) {
                alert('Updated')
                localStorage.removeItem('OperatingSystemSno')
                window.location.href = 'showoperatingsystem'
            }
            else {
                alert('server not response')
            }
        }
    }

    const handleChangeID = (e) => {
        setData({ ...data, id: e.target.value })
    }

    const handleChangeOperatingSystem = (e) => {
        setData({ ...data, operating_system: e.target.value })
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
                                <h4 className=" mt-2 text-center" >Edit Operating System</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Operating System ID </label>
                                        <input type="text" className="form-control" disabled value={data.id} id='operatingsystemid' onChange={(e) => handleChangeID(e)} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Operating System <span style={{border:"2px solid red"}}>*</span> </label>
                                        <input type="text" className="form-control" value={data.operating_system} id='operatingsystem' onChange={(e) => handleChangeOperatingSystem(e)} />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" value={data.remark} type="text" id='remark' rows="3" onChange={(e) => handleChangeRemark(e)} />
                                    </div>
                                    <div className="form-group" >
                                        <button type="button" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Submit</button>
                                        <button type="button" onClick={() => { sessionStorage.removeItem('OperatingSystemSno'); window.location.href = '/Showdevicegroup' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button>
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

export default EditOperatingSystem;