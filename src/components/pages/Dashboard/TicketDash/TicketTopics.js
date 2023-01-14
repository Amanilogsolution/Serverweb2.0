import React, { useEffect, useState } from 'react'
import './TicketDash.css'
import { FaEnvelopeOpen, FaUserTimes, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LineChart, Line, } from "recharts";
import {Ticket_issue_type} from '../../../../api/index'
import { MdHardware,MdOutlineSignalWifiStatusbarConnectedNoInternet4,MdEditNote } from 'react-icons/md';
import {GoIssueOpened} from 'react-icons/go';
import {HiServer} from 'react-icons/hi';
import {AiTwotoneEdit} from 'react-icons/ai';
import {ImLink} from 'react-icons/im';

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
    const COLORS = ['#e9c219', '#5f2149','#3691b2','#04719f','#c4d33c'];
    const COLORS2 = ['#f35d5d','#43b1a6','#e9c219','#3691b2','#3691b2'];
    const COLORS3= ['#43b1a6','#04719f','#c4d33c','#e9c219', '#5f2149'];
    const COLORS4= ['#8bcbdf','#97b8dd','#e19f4c','#c4d33c', '#5f2149'];


    return (
        <div className='d-flex flex-column justify-content-center '>

        <div className='d-flex  justify-content-center mt-4' style={{ maxHeight: "42vh" }}>
            <div className='ticket_card rounded ' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%"}}>
                <div className='d-flex'>
                  <MdHardware style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Hardware Problem</p>
                </div>

                <ResponsiveContainer width="100%" aspect={2}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"  data={Hardwaredata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} fill="rgb(94, 4, 69)" label labelLine={false} >
                            {Hardwaredata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded ' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
            <div className='d-flex'>
                  <MdOutlineSignalWifiStatusbarConnectedNoInternet4 style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Network Problem</p>
                </div>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"  data={Softwaredata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} fill="rgb(94, 4, 69)" label labelLine={false} >
                            {Softwaredata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]}  />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <div className='d-flex'>
                  <GoIssueOpened style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Other IT Issue</p>
                </div>
                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"   data={Otherdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={2} label labelLine={false}
                            fill="rgb(61,174,167)" >
                            {Otherdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS3[index % COLORS3.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
        <div className='d-flex justify-content-center mt-2' style={{ maxHeight: "42vh" }}>
            <div className='ticket_card rounded' style={{height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <div className='d-flex'>
                  <HiServer style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Server Problem</p>
                </div>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"  data={Serverdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} fill="rgb(94, 4, 69)" label labelLine={false}>
                            {Serverdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS4[index % COLORS4.length]} />
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded' style={{height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
                <div className='d-flex'>
                  <AiTwotoneEdit style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Allocation</p>
                </div>

                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"  data={Allocationdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} fill="rgb(94, 4, 69)" label labelLine={false} >
                            {Allocationdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>

            <div className='ticket_card rounded' style={{ height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
            <div className='d-flex'>
                  <ImLink style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>Connectivity Problem</p>
                </div>
                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"  data={Connectivitydata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={2} label labelLine={false}
                            fill="rgb(61,174,167)" >
                            {Connectivitydata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>
        <div className='d-flex  justify-content-center mt-2' style={{ maxHeight: "42vh" }}>
        <div className='ticket_card rounded' style={{height: "32vh", margin: "6px 10px 15px 10px", width: "26%" }}>
        <div className='d-flex'>
                  <MdEditNote style={{fontSize:"55px",padding:"8px",borderRadius:"3px",margin:"-15px 14px 0",background:"linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))",color:"white"}}/>
                  <p style={{fontWeight:"600",color:"#6a6a6a",margin:"8px -2px"}}>New Requirement</p>
                </div>
                <ResponsiveContainer width="100%" aspect={2.1}>
                    <PieChart width={700} height={200}>
                        <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                        <Tooltip />
                        <Pie stroke="none"  data={newreqdata} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={60} paddingAngle={2} label labelLine={false}
                            fill="rgb(61,174,167)" >
                            {newreqdata.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Legend layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                </ResponsiveContainer>

            </div>
        </div>

        </div>
    )
}

export default TicketTopics; 