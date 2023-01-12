import React, { useEffect, useState } from 'react'
import './TicketDash.css'
import { FaEnvelopeOpen, FaUserTimes, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LineChart, Line, } from "recharts";
import {Ticket_issue_type} from '../../../../api/index'

const TicketTopics = () => {
    const [ticketIssue,setTicketIssue] = useState({  })

    useEffect(() => {
        const fetchdata = async () => {
          const result = await Ticket_issue_type(localStorage.getItem('Database'))
          console.log(result)
          setTicketIssue(result)

        }
        fetchdata()
      },[])


    const Hardwaredata = [
        {
            "name": "Open",
            "value": ticketIssue.HardwareTicketopen,

        },
        {
            "name": "Closed",
            "value": ticketIssue.HardwareTicketClose,
        }
    ];

    const Softwaredata = [
        {
            "name": "Open",
            "value": ticketIssue.SoftwareTicketOpen,

        },
        {
            "name": "Closed",
            "value": ticketIssue.SoftwareTicketClose,
        }
    ];


    const Otherdata = [
        {
            "name": "Open",
            "value": ticketIssue.OtherTicketOpen,

        },
        {
            "name": "Closed",
            "value": ticketIssue.OtherTicketClose,
        }
    ];

    const Serverdata = [
        {
            "name": "Open",
            "value": ticketIssue.ServerTicketOpen,

        },
        {
            "name": "Closed",
            "value": ticketIssue.ServerTicketClose,
        }
    ];

    const Allocationdata = [
        {
            "name": "Open",
            "value": ticketIssue.AllocationTicketOpen,

        },
        {   
            "name": "Closed",
            "value": ticketIssue.AllocationTicketClose,
        }
    ];
    const Connectivitydata = [
        {
            "name": "Open",
            "value": ticketIssue.ConnectivityTicketOpen,

        },
        {
            "name": "Closed",
            "value": ticketIssue.ConnectivityTicketClose,
        }
    ];

    const newreqdata = [
        {
            "name": "Open",
            "value": ticketIssue.NewReqTicketOpen,

        },
        {
            "name": "Closed",
            "value": ticketIssue.NewReqTicketClose,
        }
    ];
    const COLORS = ['#3a25a1', '#5f2149'];


    return (
        <div className='d-flex flex-column justify-content-center '>

        <div className='d-flex  justify-content-center mt-4' style={{ maxHeight: "42vh" }}>
            <div className='ticket_card rounded overflow-hidden' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%"}}>
                <p className='text-light text-center bg-dark'>Hardware Problem</p>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Hardwaredata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} fill="rgb(94, 4, 69)" label>
                            {Hardwaredata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded overflow-hidden' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className='text-light text-center bg-dark'>Network Problem</p>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Softwaredata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} fill="rgb(94, 4, 69)" label >
                            {Softwaredata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded overflow-hidden' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className='text-light text-center bg-dark'>Other IT Issue</p>
                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Otherdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} paddingAngle={2} label
                            fill="rgb(61,174,167)" >
                            {Otherdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
        <div className='d-flex justify-content-center mt-2' style={{ maxHeight: "42vh" }}>
            <div className='ticket_card rounded overflow-hidden' style={{height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className='text-light text-center bg-dark'>Server Problem</p>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Serverdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} fill="rgb(94, 4, 69)" label>
                            {Serverdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded overflow-hidden' style={{height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className='text-light text-center bg-dark'>Allocation Problem</p>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Allocationdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} fill="rgb(94, 4, 69)" label >
                            {Allocationdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded overflow-hidden' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className='text-light text-center bg-dark'>Connectivity Problem</p>
                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Connectivitydata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} paddingAngle={2} label
                            fill="rgb(61,174,167)" >
                            {Connectivitydata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
        <div className='d-flex  justify-content-center mt-2' style={{ maxHeight: "42vh" }}>
        <div className='ticket_card rounded overflow-hidden' style={{height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className='text-light text-center bg-dark'>New Requirement</p>
                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={newreqdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={56} paddingAngle={2} label
                            fill="rgb(61,174,167)" >
                            {newreqdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>

        </div>
    )
}

export default TicketTopics; 