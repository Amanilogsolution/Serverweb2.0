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
            const org = localStorage.getItem('Database')
            const result = await GetTicketstatus(org, localStorage.getItem('ticketstatussno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateContractType = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const ticket_status = document.getElementById('ticket_status').value;
        const remark = document.getElementById('remark').value;
        const username = localStorage.getItem('UserId');
        const sno = localStorage.getItem('ticketstatussno')
        const org = localStorage.getItem('Database')

        if (!ticket_status) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Ticket Status", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateTicketstatus(org, sno, ticket_status, remark, username);
            if (result === 'Updated') {
                localStorage.removeItem('ticketstatussno');
                setDatas({ ...datas, message: "Ticket Status Updated", title: "success", type: "success", route: "/TotalTicketStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Ticket Status Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditTicketStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ######################### Sanckbar Start ##################################### */}

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Ticket Status <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Ticket Status</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('ticketstatussno'); window.location.href = '/TotalTicketStatus' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Edit Ticket Status:</div>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='ticket_status'>Ticket Status <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='ticket_status' defaultValue={data.ticket_status} />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor='remark'>Remarks </label>
                                            <textarea className="form-control" placeholder="Comments" id='remark' rows="3" defaultValue={data.ticket_description} />
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