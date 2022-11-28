import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { InsertTicketstatus } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddTicketStatus() {
    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const ticket_status = document.getElementById('ticket_status').value;
        const ticket_status_id = ticket_status.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');
        const org = sessionStorage.getItem('Database')

        setLoading(true)

        if (!ticket_status) {
            setDatas({ ...datas, message: "Please enter Ticket Status", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await InsertTicketstatus(org,ticket_status_id, ticket_status, remark, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Ticket Status Added", title: "success", type: "success", route: "/TotalTicketStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Ticket Status Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddTicketStatus", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>TicketStatus</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add TicketStatus</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalTicketStatus' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='ticket_status'>Ticket Status <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='ticket_status' />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor='remark'>Remarks </label>
                                            <textarea className="form-control" placeholder="Comments" id='remark' rows="3" />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Status</button>&nbsp;
                                            <button type="reset" className="btn btn-secondary " >Reset</button>
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

export default AddTicketStatus;