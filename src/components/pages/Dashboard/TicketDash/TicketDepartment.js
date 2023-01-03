import React, { useEffect, useState } from 'react'
import './TicketDash.css'
import { FaEnvelopeOpen, FaUserTimes, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LineChart, Line, } from "recharts";
import { Ticket_Summary } from '../../../../api/index'

const TicketDepartment = () => {
  const [ticketSummary,setTicketSummary] = useState({
    "TotalTicket":0,
    "TotalOpenTicket":0,
    "TotalCloseTicket":0,
    "MyTicket":0,
    "MyTicketOpen":0,
    "MyTicketClose":0

  })

  useEffect(() => {
    const fetchdata = async () => {
      const result = await Ticket_Summary(localStorage.getItem('Database'),localStorage.getItem('UserId'))
      console.log(result)
      setTicketSummary({...ticketSummary,TotalTicket:result.TotalTicket.totalticket,TotalOpenTicket:result.TotalTicketOpen.totalticketopen,TotalCloseTicket:result.TotalTicketClose.totalticketclose,
        MyTicket:result.MyTicket.myticket,MyTicketOpen:result.MyTicketOpen.myticketopen,MyTicketClose:result.MyTicketClose.myticketclose})
    }
    fetchdata()
  },[])

  const data02 = [
    {
      "name": "Total",
      "value": ticketSummary.TotalTicket
    },
    {
      "name": "Open",
      "value": ticketSummary.TotalOpenTicket
    },
 
    {
      "name": "Closed",
      "value": ticketSummary.TotalCloseTicket
    }
  ];
  const COLORS = ['#7675C4', '#DB49F2', '#F4397A', '#039B28', '#A5A704', '#014FB5'];
  return (
    <div className='d-flex flex-column justify-content-center '>
      <div className='ticket_card_div justify-content-center'>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "10px 11px" }}>
              <FaUser className='m-1' style={{ fontSize: "27px" }} />
            </div>
            <div>
              <p>My Tickets</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.MyTicket}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "43px" }}>
            <div className='tickets_icon mx-2 text-light rounded-circle' style={{ padding: "10px 15px" }}>
              <FaEnvelopeOpen style={{ fontSize: "30px" }} />
            </div>
            <div>
              <p>Open</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.MyTicketOpen}</h5>
            </div>
          </div>
        </div>

        {/* <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "10px 11px" }}>
              <FaUserTimes className='m-1' style={{ fontSize: "30px " }} />
            </div>
            <div>
              <p>Unassigned</p>
              <h5 style={{ marginTop: "-13px" }}>13</h5>
            </div>
          </div>
        </div> */}

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "30px" }}>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "12px 12px" }}>
              <FaCheck className='m-1' style={{ fontSize: "27px" }} />
            </div>
            <div>
              <p>Closed</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.MyTicketClose}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "20px" }}>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "10px 11px" }}>
              <FaCalendarTimes className='m-1' style={{ fontSize: "30px" }} />
            </div>
            <div>
              <p>Over 24 hour</p>
              <h5 style={{ marginTop: "-13px" }}>0</h5>
            </div>
          </div>
        </div>

      </div>

      <div className='ticket_card_div justify-content-center'>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "10px 11px" }}>
              <FaUser className='m-1' style={{ fontSize: "27px" }} />
            </div>
            <div>
              <p>Total Tickets</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.TotalTicket}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "43px" }}>
            <div className='tickets_icon mx-2 text-light rounded-circle' style={{ padding: "10px 15px" }}>
              <FaEnvelopeOpen style={{ fontSize: "30px" }} />
            </div>
            <div>
              <p>Open</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.TotalOpenTicket}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "30px" }}>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "12px 12px" }}>
              <FaCheck className='m-1' style={{ fontSize: "27px" }} />
            </div>
            <div>
              <p>Closed</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.TotalCloseTicket}</h5>
            </div>
          </div>
        </div>



        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 rounded-circle' style={{ padding: "12px 14px" }}>
              <FaTelegramPlane style={{ fontSize: "27px", margin: "2px" }} />
            </div>
            <div>
              <p>Answered</p>
              <h5 style={{ marginTop: "-13px" }}>0</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='m-auto' style={{ height: '250px', width: '400px' }}>
        <ResponsiveContainer width="100%" aspect={1.8}>
          <PieChart width={700} height={200}>
            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
            <Tooltip />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="center" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TicketDepartment; 