import React, { useEffect, useState } from 'react'
import './TicketDash.css'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import {Ticket_Priority} from '../../../../api/index'
import { BsCaretDownFill } from 'react-icons/bs';
const TicketPriority = () => {

    const [ticketPriority,setTicketPriority] = useState({  })

    useEffect(() => {
        const fetchdata = async () => {
          const result = await Ticket_Priority(localStorage.getItem('Database'))
          console.log(result)
          setTicketPriority(result)

        }
        fetchdata()
      },[])
    const lowdata = [
        { "name": "Open",
        "value": ticketPriority.TotalLowPriorityOpen,
        },
        {
            "name": "Closed",
            "value": ticketPriority.TotalLowPriorityClose,
        }
    ]

    const normaldata = [
        { "name": "Open",
        "value": ticketPriority.TotalNormalPriorityOpen,
        },
        {
            "name": "Closed",
            "value": ticketPriority.TotalNormalPriorityClose,
        }
    ]

    const urgentdata = [
        { "name": "Open",
        "value": ticketPriority.TotalUrgentPriorityOpen,
        },
        {
            "name": "Closed",
            "value": ticketPriority.TotalUrgentPriorityClose,
        }
    ]
       

    const COLORS = ['#7675C4', '#DB49F2', '#F4397A', '#039B28', '#A5A704', '#014FB5'];
    const COLORS2 = ['#0088FE', '#00C49F', '#A5A704', '#FF8042', '#FFBB28', '#00C49F'];
    const COLORS3 = ['#603ae9', '#f67e53', '#2a7857', '#f6b973', '#ff5d00', '#00C49F'];

    return (
        <div className='d-flex  justify-content-center mt-4' style={{ height: "35vh" }}>
            <div className='ticket_card rounded'>
            <div className='d-flex'>
                  <BsCaretDownFill style={{fontSize:"55px",padding:"12px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Low</p>
                </div>

                <ResponsiveContainer width="100%" aspect={2.2}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={lowdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label>
                            {lowdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded'>
            <div className='d-flex'>
                  <BsCaretDownFill style={{fontSize:"55px",padding:"12px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Normal</p>
                </div>

                <ResponsiveContainer width="100%" aspect={2.2}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={normaldata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label>
                            {normaldata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                            ))}
                        </Pie>
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded'>
            <div className='d-flex'>
                  <BsCaretDownFill style={{fontSize:"55px",padding:"12px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Urgent</p>
                </div>


                <ResponsiveContainer width="100%" aspect={2.2}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={urgentdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label >
                            {urgentdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                            ))}
                        </Pie>
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default TicketPriority; 