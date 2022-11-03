import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetTicketstatus, UpdateTicketstatus } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function EditTicketStatus() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetTicketstatus(sessionStorage.getItem('ticketstatussno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleUpdateContractType = async (e) => {
        e.preventDefault();
        setLoading(false)

        const ticket_status = document.getElementById('ticket_status').value;
        const remark = document.getElementById('remark').value;

        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('ticketstatussno')

        if (!ticket_status) {
            alert('Please Enter Mandatory Field')
            setLoading(true)

        }
        else {
            const result = await UpdateTicketstatus(sno, ticket_status, remark, username);
            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('ticketstatussno');
                window.location.href = './TotalTicketStatus'
            }
            else {
                alert("Server Error");
                setLoading(true)

            }
        }

    }


    const handlechangeTicketStatus = (e) => {
        setData({ ...data, ticket_status: e.target.value })
    }
    const handleChangeRemark = (e) => {
        setData({ ...data, ticket_description: e.target.value })
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>TicketStatus</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit TicketStatus</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('ticketstatussno'); window.location.href = '/TotalTicketStatus' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" >

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='ticket_status'>Ticket Status <small className='text-danger'>*</small></label>
                                            <input type="text" className="form-control" id='ticket_status' value={data.ticket_status} onChange={handlechangeTicketStatus} />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor='remark'>Remarks </label>
                                            <textarea className="form-control" placeholder="Comments" id='remark' rows="3" value={data.ticket_description} onChange={handleChangeRemark} />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleUpdateContractType}>Update</button>
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

export default EditTicketStatus;