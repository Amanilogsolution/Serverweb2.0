import './add_devicetype.css';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function AddDevicetype() {
    return (
        <>
            <Navbar />
            <div className='deviceid-container' style={{height:"100%",padding:"20px"}}>
                {/* <div className='deviceid-div' style={{ position: "relative",border:'2px solid red' }}> */}
                    <div className="container" >

                        <div className="col " style={{ margin: "0px auto", width: "630px"}}>
                            <div className="card" style={{ boxShadow: "2px 2px 5px #333" }}>
                                <header className="card-header" style={{ background: "rgba(0,0,0,0.2)" }}>
                                    <h4 className=" mt-2" >Form</h4>
                                </header>
                                <article className="card-body" >
                                    <form style={{ margin: "0px 20px 0px 15px" }}>
                                        <div className="form-group">
                                            <label>Name </label>
                                            <input type="text" className="form-control" id='name' />
                                        </div> 

                                        <div className="form-group " >
                                            <label>Date </label>
                                            <input type="date" className="form-control" id='date' />
                                        </div> 
                                        
                                            <div className="form-group " >
                                                <label>Select</label>
                                                <select className="form-control" id='onSite' style={{ height: "32px" }}>
                                                    <option defaultValue hidden>Choose ...</option>
                                                    <option>Yes</option>
                                                    <option>No</option>
                                                </select>
                                            </div>
                                      

                                        <div className="form-group">
                                            <label>Remarks</label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' />
                                        </div>



                                        <div className="form-group" >
                                            <button type="submit" className="btn btn-primary float-right mb-4 mt-3" id="subnitbtn">Submit</button>
                                            <button type="submit" className="btn btn-secondary mr-4 float-right mb-4 mt-3">Reset</button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default AddDevicetype;