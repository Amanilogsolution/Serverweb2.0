import React, { useEffect, useState } from 'react'
import './ticketsummary.css'
import { FaEnvelopeOpen, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell} from "recharts";
import { Ticket_Summary } from '../../../../../api/index'

const TicketSummary = () => {
  const [ticketSummary, setTicketSummary] = useState({
    "TotalTicket": 0,
    "TotalOpenTicket": 0,
    "TotalCloseTicket": 0,
    "MyTicket": 0,
    "MyTicketOpen": 0,
    "MyTicketClose": 0

  })

  useEffect(() => {
    const fetchdata = async () => {
      const result = await Ticket_Summary(localStorage.getItem('Database'), localStorage.getItem('UserId'))
      setTicketSummary({
        ...ticketSummary, TotalTicket: result.TotalTicket.totalticket, TotalOpenTicket: result.TotalTicketOpen.totalticketopen, TotalCloseTicket: result.TotalTicketClose.totalticketclose,
        MyTicket: result.MyTicket.myticket, MyTicketOpen: result.MyTicketOpen.myticketopen, MyTicketClose: result.MyTicketClose.myticketclose
      })
    }
    fetchdata()
  }, [])

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
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);


    return (
      <text x={x} y={y} fontSize='13' fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ['#eb5e3b', '#d1ac06', '#5e0ec9', '#039B28', '#A5A704', '#014FB5'];
  return (
    <div className='summary-dash d-flex'>
      <div className='pie_chart_div bg-white mt-3 shadow1-silver rounded m-auto position-relative'>
        <div className='pie_chart position-absolute rounded'>
          <ResponsiveContainer aspect={1.5}>
            <PieChart width={700} height={200}>
              <Tooltip contentStyle={{ backgroundColor: "rgba(255,255, 255,0.7)", borderRadius: "3px", border: "1px solid white" }} />
              <Pie labelLine={false} label={renderCustomizedLabel} stroke='none' data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={42} outerRadius={85} fill="rgb(94, 4, 69)" >
                {data02.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

                ))}
              </Pie>
              <Legend iconSize='10' iconType="rounded" layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <small className='position-absolute text-muted' style={{ bottom: '7.5%', left: '4%' }}>Manufacturer</small>
      </div>

      <div className='Summary_cards_div'>
        <h6>My Tickets Summary</h6>
        <hr />
        <div className='Summary_cards'>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon text-light mx-2 '>
              <FaUser className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className=' mb-0' style={{ fontWeight: "600", color: "#30305f" }}>{ticketSummary.MyTicket}</h2>
              <p style={{ color: '#6a6a6a' }}>My Tickets</p>
            </div>
          </div>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon mx-2 text-light ' >
              <FaEnvelopeOpen style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className='mb-0' style={{ fontWeight: "600", color: "#30305f" }}>{ticketSummary.MyTicketOpen}</h2>
              <p style={{ color: '#6a6a6a' }}>Open</p>

            </div>
          </div>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon text-light mx-2 ' style={{ padding: "12px 12px" }}>
              <FaCheck className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className='mb-0' style={{ fontWeight: "600", color: "#30305f" }}>{ticketSummary.MyTicketClose}</h2>
              <p style={{ color: '#6a6a6a' }}>Closed</p>
            </div>
          </div>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon text-light mx-2 ' >
              <FaCalendarTimes className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className='mb-0' style={{ fontWeight: "600", color: "#30305f" }}>0</h2>
              <p style={{ color: '#6a6a6a' }}>Over 24 hour</p>
            </div>
          </div>
        </div>

        <h6 className='mt-2'>Total Tickets Summary</h6>
        <hr />
        <div className='Summary_cards'>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon text-light mx-2 ' >
              <FaUser className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className='mb-0' style={{ fontWeight: "600", color: "#30305f" }}>{ticketSummary.TotalTicket}</h2>
              <p style={{ color: '#6a6a6a' }}>Total Tickets</p>

            </div>
          </div>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon mx-2 text-light ' >
              <FaEnvelopeOpen style={{ fontSize: "23px" }} />
            </div>
            <div>

              <h2 className='mb-0' style={{ fontWeight: "600", color: "#30305f" }}>{ticketSummary.TotalOpenTicket}</h2>
              <p style={{ color: '#6a6a6a' }}>Open</p>
            </div>
          </div>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon text-light mx-2 ' style={{ padding: "12px 12px" }}>
              <FaCheck className='m-1' style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className='mb-0' style={{ fontWeight: "600", color: "#30305f" }}>{ticketSummary.TotalCloseTicket}</h2>
              <p style={{ color: '#6a6a6a' }}>Closed</p>
            </div>
          </div>

          <div className='Summary_card rounded shadow1-silver bg-white d-flex justify-content-around'>
            <div className='summary_icon text-light mx-2 ' style={{ padding: "12px 14px" }}>
              <FaTelegramPlane style={{ fontSize: "23px" }} />
            </div>
            <div>
              <h2 className='mb-0' style={{ color: "#30305f" }}>0</h2>
              <p style={{ color: '#6a6a6a' }}>Answered</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default TicketSummary; 