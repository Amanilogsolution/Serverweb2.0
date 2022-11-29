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
    { course: "Laptop", Employee: 70, Asset: 129 },
    { course: "LED", Employee: 200, Asset: 231 },
    { course: "Smartphone", Employee: 123, Asset: 170 },
    { course: "Printer", Employee: 221, Asset: 325 },
    { course: "Mouse", Employee: 301, Asset: 225 },
    { course: "Charger", Employee: 341, Asset: 200 }
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
                <h1 className='dash_card_head'>453</h1>
                <p className='dash_card_para'>Total Assets</p>
              </div>
              <div className='dash_card_icon_div'>
                <BsLaptopFill className='icon'/>
              </div>
            </div>
            <div className='card1' id="card12">
              <div>
                <h1 className='dash_card_head'>154</h1>
                <p className='dash_card_para'>Total Vendors</p>
              </div>
              <div className='dash_card_icon_div'>
                <HiUsers className='icon'/>
              </div>
            </div>
            <div className='card1' id="card13">
              <div>
                <h1 className='dash_card_head'>54</h1>
                <p className='dash_card_para'>Locations</p>
              </div>
              <div className='dash_card_icon_div'>
                <ImLocation className='icon'/>
              </div>
            </div>
            <div className='card1' id="card14">
              <div >
                <h1 className='dash_card_head'>336</h1>
                <p className='dash_card_para'>Softwares</p>
              </div>
              <div className='dash_card_icon_div'>
                <SiMicrosoftedge className='icon'/>
              </div>
            </div>
          </div>

          <div className='dashboard_cards_2st_row'>
            <div className='card21'>
              <h4 style={{ margin: "15px 40px" }}>Line Chart</h4>
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
             
              <ResponsiveContainer width="100%" aspect={1.9}>
                <PieChart width={780} height={320}>
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="red" />
                  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="rgb(113, 17, 69)" label />
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