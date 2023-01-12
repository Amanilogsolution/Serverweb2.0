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
  const COLORS = ['#c53241', '#650582', '#4d00ab', '#039B28', '#A5A704', '#014FB5'];
  return (
    <div className='d-flex flex-row justify-content-between' style={{width:"100%",marginTop:"50px",background:"#f0f2f5"}}>

      <div className='ticket_card rounded' style={{ width: '29%',margin:"auto"}}>
        <p style={{width:"80%",height:"50px",marginTop:"-20px",textAlign:"center",marginLeft:"35px",borderRadius:"5px",padding:"10px",color:"white",background:" linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))"}}>Ticket Summary</p>
        <ResponsiveContainer width="100%" aspect={1.8}>
          <PieChart width={700} height={200}>
            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
            <Tooltip />
            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="rgb(94, 4, 69)" label >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="center" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{width:"69%"}}>
      <div className='ticket_card_div justify-content-center mt-5'>

        <div className='ticket_card rounded '>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 ' style={{ padding: "10px 11px" }}>
              <FaUser className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>My Tickets</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.MyTicket}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "43px" }}>
            <div className='tickets_icon mx-2 text-light ' style={{ padding: "10px 15px" }}>
              <FaEnvelopeOpen style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Open</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.MyTicketOpen}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "30px" }}>
            <div className='tickets_icon text-light mx-2 ' style={{ padding: "12px 12px" }}>
              <FaCheck className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Closed</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.MyTicketClose}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "20px" }}>
            <div className='tickets_icon text-light mx-2 ' style={{ padding: "10px 11px" }}>
              <FaCalendarTimes className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Over 24 hour</p>
              <h5 style={{ marginTop: "-13px" }}>0</h5>
            </div>
          </div>
        </div>

      </div>

      <div className='ticket_card_div justify-content-center mt-4'>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 ' style={{ padding: "10px 11px" }}>
              <FaUser className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Total Tickets</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.TotalTicket}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "43px" }}>
            <div className='tickets_icon mx-2 text-light ' style={{ padding: "10px 15px" }}>
              <FaEnvelopeOpen style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Open</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.TotalOpenTicket}</h5>
            </div>
          </div>
        </div>

        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center' style={{ marginRight: "30px" }}>
            <div className='tickets_icon text-light mx-2 ' style={{ padding: "12px 12px" }}>
              <FaCheck className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Closed</p>
              <h5 style={{ marginTop: "-13px" }}>{ticketSummary.TotalCloseTicket}</h5>
            </div>
          </div>
        </div>



        <div className='ticket_card rounded'>
          <div className='ticket_card_content d-flex justify-content-center'>
            <div className='tickets_icon text-light mx-2 ' style={{ padding: "12px 14px" }}>
              <FaTelegramPlane style={{ fontSize: "23px" }} />
            </div>
            <div>
              <p>Answered</p>
              <h5 style={{ marginTop: "-13px" }}>0</h5>
            </div>
          </div>
        </div>
      </div>

      </div>

      
    </div>
  )
}

export default TicketDepartment; 