import './editdevicetype.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { useEffect, useState } from 'react';
import { Getdevicetype } from '../../../api'

function EditDevicetype() {
    const [data, setData] = useState();
    const [sno,setSno]=useState();

    useEffect(() => {
        const fetchdata = async () => {
            const snodata = sessionStorage.getItem('devicetypeSno');
            setSno(snodata)
            console.log(snodata)
            // const getdata = await Getdevicetype(sno);
            // console.log(getdata);
        }
        fetchdata();
        console.log("test")
    },[])
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Edit Device Type</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" id='deviceid' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Type </label>
                                        <input type="text" className="form-control" id='devicetype' />
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                    </div>
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn">Submit</button>
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

export default EditDevicetype;