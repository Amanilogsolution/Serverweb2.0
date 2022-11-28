import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import logo from '../../../image/drizzle_logo.jpg'
import { BsLaptopFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { SiMicrosoftedge } from 'react-icons/si';
import { ImLocation } from 'react-icons/im';
// import * as XLSX from "xlsx";
import {
  // UploadCountry
  // UploadCity
} from '../../../api'
// import data from '../../Citylist';

// import { warning } from '../../../Snackbar/Snackbar'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Pie,
  PolarGrid,
  PieChart
} from "recharts";

import {
  BarChart,
  Bar
} from "recharts";

import {

} from "recharts";

const Dashboard = () => {

  const chartData = [
    { course: "Laptop", Employee: 60, Asset: 200 },

    { course: "LED", Employee: 150, Asset: 410 },

    { course: "Smartphone", Employee: 390, Asset: 300 },

    { course: "Printer", Employee: 231, Asset: 325 },

    { course: "Mouse", Employee: 301, Asset: 225 },

    { course: "Charger", Employee: 671, Asset: 400 }
  ];

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
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
      <Sidebar>
        <div className='dashboard_container'>

          <div className='dashboard_cards_1st_row'>
            <div className='card1' id="card11">
              <div>
                <h1>453</h1>
                <p>Total Assets</p>
              </div>
              <div style={{ background: "rgba(0, 0, 0, 0.4)", height: "54px", width: "54px", padding: "10px", borderRadius: "50px", margin: "0 40px" }}>
                <BsLaptopFill style={{ fontSize: "33px" }} />
              </div>
            </div>
            <div className='card1' id="card12">
              <div>
                <h1>154</h1>
                <p>Total Vendor</p>
              </div>
              <div style={{ background: "rgba(0, 0, 0, 0.4)", height: "54px", width: "54px", padding: "10px", borderRadius: "50px", margin: "0 40px" }}>
                <HiUsers style={{ fontSize: "33px" }} />
              </div>
            </div>
            <div className='card1' id="card13">
              <div>
                <h1>54</h1>
                <p>Locations</p>
              </div>
              <div style={{ background: "rgba(0, 0, 0, 0.4)", height: "54px", width: "54px", padding: "10px", borderRadius: "50px", margin: "0 70px" }}>
                <ImLocation style={{ fontSize: "33px" }} />
              </div>
            </div>
            <div className='card1' id="card14">
              <div>
                <h1>336</h1>
                <p>Softwares</p>
              </div>
              <div style={{ background: "rgba(0, 0, 0, 0.4)", height: "54px", width: "54px", padding: "10px", borderRadius: "50px", margin: "0 60px" }}>
                <SiMicrosoftedge style={{ fontSize: "33px" }} />
              </div>
            </div>
          </div>

          <div className='dashboard_cards_2st_row'>
            <div className='card21'>
              <h4 style={{ margin: "15px 40px" }}>Assets Line Chart</h4>
              <ResponsiveContainer width="100%" aspect={2.9}>
                <LineChart data={chartData} margin={{ top: 20, right: 45 }}>
                  <CartesianGrid />
                  <XAxis dataKey="course" interval={"preserveStartEnd"} />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: "silver", border: "none" }} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Employee"
                    stroke="blue"
                    activeDot={{ r: 8 }}
                    strokeWidth="5px"
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Asset"
                    stroke="red"
                    activeDot={{ r: 8 }}
                    strokeWidth="5px"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>


            <div className='card22' >
              <h4 style={{ margin: "10px 30px 0px 30px"}}>Pie Chart</h4>
             
              <ResponsiveContainer>
                <PieChart width={780} height={320}>
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="red" />
                  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="rgb(113, 17, 69)" label />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>





      </Sidebar>
    </div>

  );
};

export default Dashboard;