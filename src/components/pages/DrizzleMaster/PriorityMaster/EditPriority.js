import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetPriorityapi, UpdatePriorityapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditPriority() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetPriorityapi(sessionStorage.getItem('prioritysno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const priority = document.getElementById('priority').value;
        const priority_desc = document.getElementById('priority_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('prioritysno')

        if (!priority) {
            alert('Please Enter the Priority Type')
            setLoading(true)
        }
        else {
            const result = await UpdatePriorityapi(sno, priority, priority_desc, username);

            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('prioritysno');
                window.location.href = './TotalPriority'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }

        }
    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, priority_type: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, priority_description: e.target.value })
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Priority</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Priority Type</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('prioritysno'); window.location.href = '/TotalPriority' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="row">

                                            <div className="form-group col" >
                                                <label htmlFor='priority'>Priority Type <small className='text-danger'>*</small></label>
                                                <input type="text" className="form-control" id='priority' value={data.priority_type} onChange={handlechangeassetstatus} />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="form-group col-md" >
                                                <label htmlFor='priority_desc'>Description</label>
                                                <textarea type="text" className="form-control" id='priority_desc' value={data.priority_description} onChange={handlechangeassetstatusdesc} />
                                            </div>
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleadddevice}>Update</button>
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

export default EditPriority;