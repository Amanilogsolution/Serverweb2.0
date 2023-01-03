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
    const COLORS = ['#7675C4', '#DB49F2'];
    const COLORS2 = ['#F4397A', '#039B28'];
    const COLORS3 = ['#0088FE', '#00C49F'];
    const COLORS4 = ['#0088FE', '#00C49F'];
    const COLORS5 = ['#0088FE', '#00C49F'];
    const COLORS6 = ['#0088FE', '#00C49F'];
    const COLORS7 = ['#0088FE', '#00C49F'];


    return (
        <div className='d-flex flex-column justify-content-center '>

        <div className='d-flex  justify-content-center mt-4' style={{ height: "35vh" }}>
            <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>Hardware Problem</p>

                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Hardwaredata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label>
                            {Hardwaredata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>Network Problem</p>

                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Softwaredata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label >
                            {Softwaredata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>Other IT Issue</p>
                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Otherdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={66} paddingAngle={2} label
                            fill="rgb(61,174,167)" >
                            {Otherdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
        <div className='d-flex  justify-content-center mt-4' style={{ height: "35vh" }}>
            <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>Server Problem</p>

                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Serverdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label>
                            {Serverdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>Allocation Problem</p>

                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Allocationdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label >
                            {Allocationdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS5[index % COLORS5.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>Connectivity Problem</p>
                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={Connectivitydata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={66} paddingAngle={2} label
                            fill="rgb(61,174,167)" >
                            {Connectivitydata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS6[index % COLORS6.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
        <div className='d-flex  justify-content-center mt-4' style={{ height: "35vh" }}>
        <div className='rounded' style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <p className=' text-black text-center px-4 mx-2'>New Requirement</p>
                <ResponsiveContainer width="100%" aspect={1.8}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie data={newreqdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={66} paddingAngle={2} label
                            fill="rgb(61,174,167)" >
                            {newreqdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS7[index % COLORS7.length]} />
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