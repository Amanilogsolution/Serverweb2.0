
import Navbar from '../../../Navbar/Navbar';
import {Adddevicegroup} from '../../../../api'

function AddDevicegroup() {

    const handleadddevice=async(e)=>{
        e.preventDefault();
        const deviceid= document.getElementById('deviceid').value;
        const devicegroup= document.getElementById('devicegroup').value;
        const remark= document.getElementById('remark').value;
        const username=sessionStorage.getItem('UserName');
      

        const result= await Adddevicegroup(deviceid,devicegroup,remark,username);
        if(result){
            alert('Added')
            window.location.href='Showdevicegroup'
        }
        console.log(result);
        
    }
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className="container" >
                    <div className="col " style={{ margin: "0px auto", width: "630px" }}>
                        <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                            <header className="card-header" >
                                <h4 className=" mt-2 text-center" >Add Device Type</h4>
                            </header>
                            <article className="card-body" >
                                <form style={{ margin: "0px 20px 0px 15px" }}>
                                    <div className="form-group">
                                        <label>Device ID </label>
                                        <input type="text" className="form-control" id='deviceid' />
                                    </div>
                                    <div className="form-group " >
                                        <label>Device Group </label>
                                        <input type="text" className="form-control" id='devicegroup' />
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

export default AddDevicegroup;