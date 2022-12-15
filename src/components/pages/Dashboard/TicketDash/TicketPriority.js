import React from 'react'
import './TicketDash.css'
import { FaEnvelopeOpen, FaUserTimes, FaCalendarTimes, FaUser, FaCheck, FaTelegramPlane } from 'react-icons/fa';
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, } from "recharts";

const TicketPriority = () => {
    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];
    return (
        <div>
            <div className='d-flex  justify-content-center' style={{ height: "35vh" }}>
                <div style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", borderRadius: "3px", width: "26%" }}>
                    <p className=' text-black text-center px-4 mx-2'>Critical</p>

                    <ResponsiveContainer width="100%" aspect={1.8}>
                        <PieChart width={700} height={200}>
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            <Tooltip />
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label />
                        </PieChart>
                    </ResponsiveContainer>

                </div>

                <div style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", borderRadius: "3px", width: "26%" }}>
                    <p className=' text-black text-center px-4 mx-2'>High</p>

                    <ResponsiveContainer width="100%" aspect={1.8}>
                        <PieChart width={700} height={200}>
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            <Tooltip />
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label />
                        </PieChart>
                    </ResponsiveContainer>

                </div>

                <div  style={{ border: "2px solid silver", height: "32vh", margin: "6px 10px 15px 10px", borderRadius: "3px", width: "26%" }}>
                    <p className=' text-black text-center px-4 mx-2'>Normal</p>

                    <ResponsiveContainer width="100%" aspect={1.8}>
                        <PieChart width={700} height={200}>
                            <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                            <Tooltip />
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label />
                        </PieChart>
                    </ResponsiveContainer>

                </div>

            </div>



        </div>
    )
}

export default TicketPriority; 