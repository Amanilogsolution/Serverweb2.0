import React,{useState} from 'react'
import './TicketDash.css'
import { FaEnvelopeOpen, FaUserTimes, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
import TicketDepartment from './TicketDepartment';
import TicketTopics from './TicketTopics'
import TicketPriority from './TicketPriority'
import TicketStaff from './TicketStaff'

const TicketDash = () => {
  const [currentStep, setStep] = useState(1);
  const showStep = (step) => {
    switch (step){
      case 1:
        return <TicketDepartment />
        case 2: return <TicketTopics/>
        case 3: return <TicketStaff/>

        case 4: return <TicketPriority/>

    }
  }

  return (
    <div className='ticket_dash'>
      <div className="d-flex flex " style={{ overflow: "hidden", border: "1px solid black", width: "30%", height: "5vh", borderRadius: "10px" }}>
        <div className='ticket_details' onClick={() => setStep(1)} style={{ borderRight: "1px solid black" }}>Department</div>
        <div className='ticket_details' onClick={() => setStep(2)} style={{ borderRight: "1px solid black" }}>Topics</div>
        <div className='ticket_details'onClick={() => setStep(3)} style={{ borderRight: "1px solid black" }}>Staff</div>
        <div className='ticket_details' onClick={() => setStep(4)} >Priority</div>

      </div>

      {/* <div className='ticket_card_div'>
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
      </div> */}
      {showStep(currentStep)}
    </div>
  )
}

export default TicketDash;
