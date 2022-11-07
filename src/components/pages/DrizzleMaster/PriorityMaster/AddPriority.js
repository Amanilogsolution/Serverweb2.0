import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddPriorityapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


function AddPriority() {
    const [loading, setLoading] = useState(true)

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const priority = document.getElementById('priority').value;
        const priority_id = priority.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const priority_desc = document.getElementById('priority_desc').value;

        const username = sessionStorage.getItem('UserId');

        if (!priority) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await AddPriorityapi(priority_id, priority, priority_desc, username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalPriority'
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Priority</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Priority Type</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalPriority' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="col" >
                                            <label htmlFor='priority'>Priority Type <small className='text-danger'>*</small></label>
                                            <input type="text" className="form-control" id='priority' />
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='priority_desc'>Remarks</label>
                                            <textarea className="form-control" id='priority_desc' rows='3' />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleaddinsert}>Add Priority</button>
                                            <button type="reset" className="btn btn-secondary" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddPriority;