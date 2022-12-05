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
    <div className='AssetDash d-flex'>
      <div className='Asset_cards text-white text-center d-flex justify-Content-center'>
        <div className='Asset_inner_card1 d-flex justify-content-around'>
          <div className='Asset_card rounded'>
            <p className="mb-0">Total Devices</p>
            <h1>{Assetsdata.TotalAsset}</h1>
          </div>
          <div className='Asset_card rounded'>
            <p className="mb-0">Active Devices</p>
            <h1 >{Assetsdata.ActiveAsset}</h1>
          </div>
          <div className='Asset_card rounded'>
            <p className="mb-0">Rental Devices</p>
            <h1 >{Assetsdata.RentalAssets}</h1>
          </div>
        </div>
        <div className='Asset_inner_card1 d-flex justify-content-around'>
        <div className='Asset_card2 rounded'>
        <p className='mb-0'>Asset Value</p>
            <h5>₹ {Assetsdata.PurchaseVal}</h5>
          </div>
          <div className='Asset_card2 rounded'>
            <p className='mb-0'>Rental / Month</p>
            <h5 >₹ {Assetsdata.RentMonth}</h5>
          </div>
          <div className='Asset_card2 rounded'>
            <p className='mb-0'>MS OS</p>
            <h5 >0</h5>
          </div>
          <div className='Asset_card2 rounded'>
            <p className='mb-0'>MS OS</p>
            <h5 >0</h5>
          </div>
          <div className='Asset_card2 rounded'>
            <p className='mb-0'>MS OS</p>
            <h5 >0</h5>
          </div>
        </div>
      </div>
      <div className='for_graph'>
        <div className='bar_location'>
          <p className='bg-dark text-white px-4'>IT Asset Allotment Summary</p>
          <ResponsiveContainer width="100%" aspect={5.4}>
            <BarChart data={chartData} margin={{ top: 20, right: 45 }}>
              <CartesianGrid />
              <XAxis dataKey="Location" interval={"preserveStartEnd"} style={{ fontSize:"14px" }}/>
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
              <Bar dataKey="Assets" fill="maroon" barSize={20} />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='graph_2nd_row d-flex justify-content-center' >
          <div className='manufacturer_graph'>
            <p className='bg-dark text-white px-4 mx-2'>Manufacturer</p>
            <ResponsiveContainer width="100%" aspect={2.4}>
              <PieChart width={730} height={250}>
                <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                <Tooltip />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={66} fill="rgb(94, 4, 69)" label />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='software_graph'>
            <p className='bg-dark text-white px-4'>Software</p>
            <ResponsiveContainer width="100%" aspect={3.2}>
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
                  activeDot={{ r: 8}}
                  strokeWidth="4px"
                  // fillOpacity={0}
                  dot={{r: 0}}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>

  )
}

// export default AssetsDash;
