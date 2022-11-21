import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { InsertServiceGroup } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function AddServiceGroup() {
    const [loading, setLoading] = useState(true)

    const handleinsertdata = async (e) => {
        e.preventDefault();
        setLoading(false)
        const service_group_type = document.getElementById('service_group_type').value;
        const service_action_id = service_group_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');

        if (!service_group_type) {
            alert('Please Enter Gervice Group Type')
            setLoading(true)
        }
        else {
            const result = await InsertServiceGroup(service_action_id, service_group_type, remark, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalServiceGroup'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Service Group</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Service Group</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalServiceGroup' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="col">
                                            <label htmlFor='service_group_type'>Service Group Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='service_group_type' />
                                        </div>

                                        <div className="col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" id='remark' rows='3' />
                                        </div>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleinsertdata}>Add Group Type</button>
                                            <button type="reset" className="btn btn-secondary " style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddServiceGroup;