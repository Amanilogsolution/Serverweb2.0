import React from 'react'
import './TicketDash.css'
import { FaEnvelopeOpen, FaUserTimes, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
const TicketDepartment = () => {
    return (
        <div >
          <div className='ticket_card_div'>
        <div className='ticket_card'>
          <div className='ticket_card_content' style={{ marginRight: "43px" }}>
            <div className='tickets_icon' style={{ padding: "10px 15px" }}>
              <FaEnvelopeOpen style={{ fontSize: "30px" }} />
            </div>
            <div>
              <p>Open</p>
              <h5 style={{ marginTop: "-13px" }}>7</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card'>
          <div className='ticket_card_content'>
            <div className='tickets_icon' style={{ padding: "10px 11px" }}>
              <FaUserTimes style={{ fontSize: "30px", margin: "4px" }} />
            </div>
            <div>
              <p>Unassigned</p>
              <h5 style={{ marginTop: "-13px" }}>13</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card'>
          <div className='ticket_card_content' style={{ marginRight: "20px" }}>
            <div className='tickets_icon' style={{ padding: "10px 11px" }}>
              <FaCalendarTimes style={{ fontSize: "30px", margin: "4px" }} />
            </div>
            <div>
              <p>Overdue</p>
              <h5 style={{ marginTop: "-13px" }}>26</h5>
            </div>
          </div>
        </div>

      </div>

      <div className='ticket_card_div'>
        <div className='ticket_card'>
          <div className='ticket_card_content'>
            <div className='tickets_icon' style={{ padding: "10px 11px" }}>
              <FaUser style={{ fontSize: "27px", margin: "4px" }} />
            </div>
            <div>
              <p>My Tickets</p>
              <h5 style={{ marginTop: "-13px" }}>49</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card'>
          <div className='ticket_card_content' style={{ marginRight: "30px" }}>
            <div className='tickets_icon' style={{ padding: "12px 12px" }}>
              <FaCheck style={{ fontSize: "27px", margin: "4px" }} />
            </div>
            <div>
              <p>Closed</p>
              <h5 style={{ marginTop: "-13px" }}>11</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card'>
          <div className='ticket_card_content'>
            <div className='tickets_icon' style={{ padding: "12px 14px" }}>
              <FaTelegramPlane style={{ fontSize: "27px", margin: "2px" }} />
            </div>
            <div>
              <p>Answered</p>
              <h5 style={{ marginTop: "-13px" }}>17</h5>
            </div>
          </div>
        </div>
      </div>

        </div>
    )
}

export default TicketDepartment; 