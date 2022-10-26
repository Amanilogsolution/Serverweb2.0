import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetPriorityapi, UpdatePriorityapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditPriority() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetPriorityapi(sessionStorage.getItem('prioritysno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const priority = document.getElementById('priority').value;
        const priority_desc = document.getElementById('priority_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('prioritysno')

        if (!priority) {
            alert('Please Enter the Priority Type')
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
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Priority</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Priority Type</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('prioritysno'); window.location.href = '/TotalPurchaseType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor='typeid'>Priority ID </label>
                                        <input type="text" className="form-control" id='purchase_id' disabled value={data.priority_id} />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label htmlFor='seriesid'>Priority Type</label>
                                        <input type="text" className="form-control" id='priority' value={data.priority_type} onChange={handlechangeassetstatus} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="text" className="form-control" id='priority_desc' value={data.priority_description} onChange={handlechangeassetstatusdesc} />
                                    </div>
                                </div>

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                    {/* <button type="button" onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button> */}

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditPriority;