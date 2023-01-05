import React, { useEffect, useState } from 'react'
import './AssetsDash.css'
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, Line, } from "recharts";
import { DashboarProcedure, Dashboard_Location_Name, Dashboard_Software, Dashboard_Manufacture } from '../../../api/index'

export default function AssetsDash(callback) {
  const [chartdata, setChartData] = useState()
  const [dashboardsoft, setDashboardsoft] = useState([])
  const [dashboardmanu, setDashboardmanu] = useState([])
  const [Assetsdata, setAssetData] = useState({
    "TotalAsset": 0,
    "ActiveAsset": 0,
    "RentalAssets": 0,
    "RentMonth": 0,
    "PurchaseVal": 0
  })
  useEffect(() => {
    const fetch = async () => {
      const type = 'Asset'
      const result = await DashboarProcedure(type)
      setAssetData({ ...Assetsdata, TotalAsset: result[0][0].TotalDevice, ActiveAsset: result[1][0].ActiveDevice, RentalAssets: result[2][0].RentalDevice, RentMonth: result[3][0].rent, PurchaseVal: result[4][0].purchase })
      datas()

    }
    fetch()
  }, [])

  const datas = async () => {
    setTimeout(async () => {
      const locationname = await Dashboard_Location_Name(localStorage.getItem('Database'))
      const dashboard_soft = await Dashboard_Software(localStorage.getItem('Database'))
      const dashboard_manu = await Dashboard_Manufacture(localStorage.getItem('Database'))
      setDashboardmanu(dashboard_manu)
      setDashboardsoft(dashboard_soft)
      console.log(dashboard_soft)
        setChartData(locationname)
  
    }, 2000)

  }

  const COLORS = ['#DB49F2', '#F4397A', '#039B28', '#A5A704', '#014FB5', '#7675C4'];


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
            <BarChart data={chartdata} margin={{ top: 20, right: 45 }}>
              <CartesianGrid />
              <XAxis dataKey="Location" interval={"preserveStartEnd"} style={{ fontSize: "14px" }} />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
              <Bar dataKey="Assets" fill="maroon" barSize={20} />
              <Tooltip />
             </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='graph_2nd_row d-flex justify-content-center' >
          <div className='manufacturer_graph'>
            <p className='bg-dark text-white px-4 mx-2 my-0'>Manufacturer</p>
            <ResponsiveContainer width="100%" height='85%' aspect={2.0} >
              <PieChart width={700} height={150}>
                <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                <Tooltip />
                <Pie data={dashboardmanu} dataKey="value" nameKey="name" cx="50%" cy="56%" innerRadius={35} outerRadius={56} fill="rgb(94, 4, 69)" label>
                  {dashboardmanu.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend layout="vertical" verticalAlign="center" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='software_graph'>
            <p className='bg-dark text-white px-4'>Software</p>

            <ResponsiveContainer width="100%" aspect={3.5}>
              <BarChart data={dashboardsoft} margin={{ top: 2, right: 45 }}>
                <CartesianGrid />
                <XAxis dataKey="softwareName" interval={"preserveStartEnd"} style={{ fontSize: "14px" }} />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                <Bar dataKey="softwares" fill="maroon" barSize={30} />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>

  )
}

// export default AssetsDash;
