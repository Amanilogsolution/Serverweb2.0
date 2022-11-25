import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetTicketstatus, UpdateTicketstatus } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditTicketStatus() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

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
        setLoading(true)

        if (!ticket_status) {
            setDatas({ ...datas, message: "Please enter Ticket Status", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"

        }
        else {
            setLoading(true)
            const result = await UpdateTicketstatus(sno, ticket_status, remark, username);
            if (result === 'Updated') {
                sessionStorage.removeItem('ticketstatussno');
                setDatas({ ...datas, message: "Ticket Status Updated", title: "success", type: "success", route: "/TotalTicketStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Ticket Status Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditTicketStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
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
                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>TicketStatus</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit TicketStatus</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('ticketstatussno'); window.location.href = '/TotalTicketStatus' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" >

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='ticket_status'>Ticket Status <span className='text-danger'>*</span></label>
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