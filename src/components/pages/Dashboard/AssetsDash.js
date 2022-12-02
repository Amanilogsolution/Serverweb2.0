import React, { useEffect, useState } from 'react'
import './AssetsDash.css'
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, } from "recharts";
import {DashboarProcedure} from '../../../api/index'

export default function AssetsDash() {
  const [Assetsdata,setAssetData] = useState({
    "TotalAsset":0,
    "ActiveAsset":0,
    "RentalAssets":0,
    "RentMonth":0,
    "PurchaseVal":0
  })
  useEffect(()=>{
    const fetch = async() =>{
      const type = 'Asset'
      const result = await DashboarProcedure(type)
      setAssetData({...Assetsdata,TotalAsset:result[0][0].TotalDevice,ActiveAsset:result[1][0].ActiveDevice,RentalAssets:result[2][0].RentalDevice,RentMonth:result[3][0].rent,PurchaseVal:result[4][0].purchase})
      console.log(result)
    }
    fetch()
  },[])
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
  const chartData = [
    { Location: "WH", Assets: 60 },

    { Location: "HO", Assets: 150 },

    { Location: "Bhiwandi", Assets: 390 },

    { Location: "Mumbai", Assets: 231 },

    { Location: "Nagpur", Assets: 301 },

    { Location: "Banglore", Assets: 200 },
    { Location: "WH", Assets: 60 },

    { Location: "HO", Assets: 150 },

    { Location: "Bhiwandi", Assets: 390 },

    { Location: "Mumbai", Assets: 231 },

    { Location: "Nagpur", Assets: 301 },

    { Location: "Banglore", Assets: 200 },
    { Location: "WH", Assets: 60 },

    { Location: "HO", Assets: 150 },

    { Location: "Bhiwandi", Assets: 390 },

    { Location: "Mumbai", Assets: 231 },

    { Location: "Nagpur", Assets: 301 },

    { Location: "Banglore", Assets: 200 },
    { Location: "WH", Assets: 60 },

    { Location: "HO", Assets: 150 },

    { Location: "Bhiwandi", Assets: 390 },

    { Location: "Mumbai", Assets: 231 },

    { Location: "Nagpur", Assets: 301 },

    { Location: "Banglore", Assets: 200 }
  ];
  const chartData2 = [
    { softwareName: "Windows", softwares: 200 },

    { softwareName: "Seqrite", softwares: 410 },

    { softwareName: "SQL Manag.", softwares: 300 },

    { softwareName: "Vs Code", softwares: 325 },

    { softwareName: "Sep14", softwares: 225 },

    { softwareName: "Linux", softwares: 400 },
    { softwareName: "Windows", softwares: 200 },

    { softwareName: "Seqrite", softwares: 100 },

    { softwareName: "SQL Manag.", softwares: 300 },

    { softwareName: "Vs Code", softwares: 325 },

    { softwareName: "Sep14", softwares: 590 },

    { softwareName: "Linux", softwares: 400 },
    { softwareName: "Windows", softwares: 200 },

    { softwareName: "Seqrite", softwares: 410 },

    { softwareName: "SQL Manag.", softwares: 360 },

    { softwareName: "Vs Code", softwares: 23 },

    { softwareName: "Sep14", softwares: 225 },

    { softwareName: "Linux", softwares: 400 }
  ];
  return (
    <div className='AssetDash'>
      <div className='Asset_cards'>
        <div style={{ width: "50%" }}>
          <div className='Asset_card'>
            <p>Total Devices</p>
            <h1 style={{ marginTop: "-10px" }}>{Assetsdata.TotalAsset}</h1>
          </div>
          <div className='Asset_card'>
            <p>Active Devices</p>
            <h1 style={{ marginTop: "-10px" }}>{Assetsdata.ActiveAsset}</h1>
          </div>
          <div className='Asset_card'>
            <p>Rental Devices</p>
            <h1 style={{ marginTop: "-10px" }}>{Assetsdata.RentalAssets}</h1>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className='Asset_card2'>
            <p>Asset Value</p>
            <h5 style={{ marginTop: "-14px" }}>₹ {Assetsdata.PurchaseVal}</h5>
          </div>
          <div className='Asset_card2'>
            <p>Rental / Month</p>
            <h5 style={{ marginTop: "-14px" }}>₹ {Assetsdata.RentMonth}</h5>
          </div>
          <div className='Asset_card2'>
            <p>MS OS</p>
            <h5 style={{ marginTop: "-14px" }}>0</h5>
          </div>
          <div className='Asset_card2'>
            <p>MS OS</p>
            <h5 style={{ marginTop: "-14px" }}>0</h5>
          </div>
          <div className='Asset_card2'>
            <p>MS OS</p>
            <h5 style={{ marginTop: "-14px" }}>0</h5>
          </div>
        </div>
      </div>
      <div className='for_graph'>
        <div className='bar_location'>
          <p style={{ background: "rgb(18, 22, 33)", color: "white", padding: "0 20px" }}>IT Asset Allotment Summary</p>
          <ResponsiveContainer width="100%" aspect={5.4}>
            <BarChart data={chartData} margin={{ top: 20, right: 45 }}>
              <CartesianGrid />
              <XAxis dataKey="Location" interval={"preserveStartEnd"} />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
              <Bar dataKey="Assets" fill="maroon" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='graph_2nd_row'>
          <div className='manufacturer_graph'>
            <p style={{ background: "rgb(18, 22, 33)", color: "white", padding: "0 20px", margin: "0 3px 0 0" }}>Manufacturer</p>
            <ResponsiveContainer width="100%" aspect={1.8}>
              <PieChart width={730} height={250}>
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={66} fill="rgb(94, 4, 69)" label />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='software_graph'>
            <p style={{ background: "rgb(18, 22, 33)", color: "white", padding: "0 20px" }}>Software</p>
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart data={chartData2} margin={{ top: 20, right: 45 }}>
                <CartesianGrid />
                <XAxis dataKey="softwareName" interval={"preserveStartEnd"} />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="softwares"
                  stroke="maroon"
                  activeDot={{ r: 8 }}
                  strokeWidth="5px"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
