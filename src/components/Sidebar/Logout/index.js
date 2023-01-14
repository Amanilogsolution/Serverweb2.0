import React from "react";
import img from '../../../image/modelimg.png'

const Logout = () => {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{ width: "300px", marginTop: "50px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <img src={img} style={{ width: "140px", margin: "0 70px" }} />
                    </div>
                    <div className="modal-body">
                        <div className="text-center px-3">
                            <h4>Are you sure ? </h4>
                            <p>You want to logout your account</p><br />
                            <div>
                                <button style={{ borderRadius: "50px" }} className='btn btn-voilet w-100 my-2' onClick={() => {
                                    localStorage.clear()
                                    window.location.href = '/'
                                }}>Yah, I am sure</button><br />
                                <button style={{ borderRadius: "50px" }} className=' close btn btn-secondary w-100' data-dismiss="modal" aria-label="Close">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout;