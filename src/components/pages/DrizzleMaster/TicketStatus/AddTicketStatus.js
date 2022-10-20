import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { InsertTicketstatus } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddTicketStatus() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const ticket_status_id = '';
        const ticket_status = document.getElementById('ticket_status').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');

        if (!ticket_status) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await InsertTicketstatus(ticket_status_id, ticket_status, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                window.location.href = './TotalTicketStatus'
            }
            else {
                alert("Server Error");
            }
        }
    }

    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>TicketStatus</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add TicketStatus</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalTicketStatus' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div">
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="form-group">
                                    <label htmlFor='ticket_status'>Ticket Status</label>
                                    <input type="text" className="form-control" id='ticket_status' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Add</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddTicketStatus;