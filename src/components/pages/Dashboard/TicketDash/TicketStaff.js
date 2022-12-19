import React from 'react'
import './TicketDash.css'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const TicketStaff = () => {
    const data02 = [
        {
            "name": "Created",
            "value": 2400,

        },
        {
            "name": "Assigned",
            "value": 4567
        },
        {
            "name": "Overdue",
            "value": 1398
        },
        {
            "name": "Closed",
            "value": 9800
        },
        {
            "name": "Reopened",
            "value": 3908
        },
        {
            "name": "Deleted",
            "value": 4800
        },
        {
            "name": "Warnings",
            "value": 4800
        }
    ];
    const COLORS = ['#7675C4', '#DB49F2', '#F4397A', '#039B28', '#A5A704', '#014FB5'];

    return (
            <div className='m-auto mt-4 pt-2 rounded' style={{ border: "2px solid silver", height: "33vh", margin: "6px 10px 15px 10px", width: "30%" }}>
                <p className=' text-black text-center px-4 mx-2 mb-0'>Staff</p>
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
    )
}

export default TicketStaff; 