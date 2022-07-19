import Navbar from '../../../Navbar/Navbar';
import {AddOperatingsystem,ActiveSeries,TotalCount} from '../../../../api'
import React,{useEffect,useState} from 'react'

function AddOperatingSystem() {
    const [operatingsystemid,setOperatingSystemID] = useState()

    useEffect (async()=>{
        const series = await ActiveSeries()
        if(!series){
            alert('Active Series')
        }
        console.log(series)
        const ser = series.os_id
        console.log(ser)
        const count = await TotalCount('tbl_operating_system')
        let countincrement = count.count+1;
        let countnum = ''+countincrement;
        console.log(countnum)
        setOperatingSystemID(ser+countnum)

    })

    const handleadddevice=async(e)=>{
        e.preventDefault();
        const operatingsystem= document.getElementById('operatingsystem').value;
        const remark= document.getElementById('remark').value;
        const username=sessionStorage.getItem('UserName');
      
        const result= await AddOperatingsystem(operatingsystemid,operatingsystem,remark,username);
        if (result){
            alert("Added")
            window.location.href='/showoperatingsystem'
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
                                <h4 className=" mt-2 text-center" >Add Operating System</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Operating System ID </label>
                                        <input type="text" className="form-control" disabled value={operatingsystemid} />
                                    </div>
                                    <div className="form-group " >
                                        <label>Operating System </label>
                                        <input type="text" className="form-control" id='operatingsystem' />
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

export default AddOperatingSystem;