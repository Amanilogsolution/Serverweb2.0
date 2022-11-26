import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import logo from '../../../image/drizzle_logo.jpg'
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
} from "recharts";

import {
  BarChart,
  Bar
} from "recharts";

import {

} from "recharts";

const Dashboard = () => {

  const chartData = [
    { course: "python", Students: 60, fees: 200 },

    { course: "React Js", Students: 150, fees: 410 },

    { course: "Java", Students: 390, fees: 300 },

    { course: "C programming", Students: 231, fees: 325 },

    { course: "Javascript", Students: 301, fees: 225 },

    { course: "C++", Students: 671, fees: 400 }
  ];

  const chartData2 = [
    { month: "January", India: 3.4, China: 8.3, Russia: 6.4 },

    { month: "February", India: 2.9, China: 11.6, Russia: 10.9 },

    { month: "March", India: 3.4, China: 8.1, Russia: 7.5 },

    { month: "April", India: 2.8, China: 6.9, Russia: 8.5 },

    { month: "May", India: 5.3, China: 7.0, Russia: 6.4 },

    { month: "June", India: 5.4, China: 7.2, Russia: 5.3 }
  ];



  return (
    <div>
      <Sidebar>
        <div className='home_container'>

          <div className='dashboard_cards_1st_row'>
            <div className='card1' id="card11">
                <h1>65</h1>
                <p>Total Invoice</p>
            </div>
            <div className='card1' id="card12">
              <h1>154</h1>
              <p>Paid Invoice</p>
            </div>
            <div className='card1' id="card13">
            <h1>170</h1>
              <p>Unpaid Invoice</p>
            </div>
            <div className='card1' id="card14">
            <h1>$ 4,877</h1>
              <p>Total Paid</p>
            </div>
          </div>

          <div className='dashboard_cards_2st_row'>
            <div className='card21'>
              <h4 style={{ margin: "15px" }}>Line Chart, Total students of courses</h4>
              <ResponsiveContainer width="100%" aspect={2.9}>
                <LineChart data={chartData} margin={{ top: 20, right: 45 }}>
                  <CartesianGrid />
                  <XAxis dataKey="course" interval={"preserveStartEnd"} />
                  <YAxis />
                  <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Students"
                    stroke="blue"
                    activeDot={{ r: 8 }}
                    strokeWidth="3px"
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="fees"
                    stroke="red"
                    activeDot={{ r: 8 }}
                    strokeWidth="3px"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>


            <div className='card22'>
              <h4 style={{ margin: "15px" }}>2022 ECONOMY % OF THE NATIONS</h4>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={chartData2} margin={{ top: 20, right: 45 }}>
                  <CartesianGrid />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="India" fill="Blue" />
                  <Legend />
                  <Bar dataKey="China" fill="red" />
                  <Legend />
                  <Bar dataKey="Russia" fill="rgb(5, 46, 9)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>





      </Sidebar>
    </div>

  );
};

export default Dashboard;