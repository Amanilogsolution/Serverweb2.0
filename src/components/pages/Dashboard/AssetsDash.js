import React, { useEffect, useState } from 'react'
import './AssetsDash.css'
import { BarChart, PieChart, Pie, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, Line, } from "recharts";
import { DashboarProcedure, Dashboard_Location_Name, Dashboard_Software, Dashboard_Manufacture } from '../../../api/index'
import { BsLaptopFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { FaTicketAlt } from 'react-icons/fa';
import { MdStickyNote2 } from 'react-icons/md';
export default function AssetsDash(callback) {
  const [chartdata, setChartData] = useState()
  const [dashboardsoft, setDashboardsoft] = useState([])
  const [dashboardmanu, setDashboardmanu] = useState([])
  const [spinner, setSpinner] = useState(true)
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
    const locationname = await Dashboard_Location_Name(localStorage.getItem('Database'))
    const dashboard_soft = await Dashboard_Software(localStorage.getItem('Database'))
    const dashboard_manu = await Dashboard_Manufacture(localStorage.getItem('Database'))
    setDashboardmanu(dashboard_manu)
    setDashboardsoft(dashboard_soft)
    setChartData(locationname || dashboard_soft || dashboard_manu)
    if (locationname) {
      setSpinner(false)
    }

  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);


    return (
      <text x={x} y={y} fontSize='13' fill="silver" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  

  const COLORS = ['#6e1249', '#8f4606', '#122a8a', '#065b73', '#119c03', '#20541a'];
  


  return (
    <div className='AssetDash'>
      <div className='Asset_cards  d-flex justify-content-between mb-2'>
        <div className='card1 d-flex justify-content-around rounded cursor-pointer'>
          <div className='position-relative  asset-inner-card'>
            <div className='dash_card_icon_div rounded position-absolute'>
              <BsLaptopFill className='icon ' />
            </div>
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h1 className='dash_card_head mb-0 '>{Assetsdata.TotalAsset}</h1>
            <p className='dash_card_para'>Total Devices</p>
          </div>
        </div>
        <div className='card1 d-flex justify-content-around rounded '>
          <div className='position-relative  asset-inner-card'>
            <div className='dash_card_icon_div activedev1 rounded position-absolute'>
              <HiUsers className='icon' />
            </div>
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h1 className='dash_card_head mb-0'>{Assetsdata.ActiveAsset}</h1>
            <p className='dash_card_para'>Active Devices</p>
          </div>
        </div>
        <div className='card1 d-flex justify-content-around rounded '>
          <div className='position-relative  asset-inner-card'>
            <div className='dash_card_icon_div rentdev1 rounded position-absolute'>
              <MdStickyNote2 className='icon' />
            </div>
          </div>
          <div style={{ marginLeft: "-50px" }}>
            <h1 className='dash_card_head mb-0'>{Assetsdata.RentalAssets}</h1>
            <p className='dash_card_para'>Rental Devices</p>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-between my-5'>
        <div className='for_graph'>
          <div className='bar_location bg-light rounded position-relative mt-1' style={{ minHeight: "35vh" }}>
            {spinner ?
              <div class="spinner-border text-primary" style={{ marginTop: "2%", marginLeft: "50%" }} role="status">
                <span class="sr-only"></span>
              </div> :
              <div className='rounded it-bar position-absolute' style={{ background: 'linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))', boxShadow: '2px 2px 10px silver', top: "-12%", width: "95%", left: '2.5%' }} >
                <ResponsiveContainer width="100%" aspect={3.7}>
                  <BarChart data={chartdata} margin={{ top: 20, right: 45 }}>
                    <CartesianGrid strokeDasharray='4' vertical={false} />
                    <XAxis tick={{ fill: 'white' }} dataKey="location_code" interval={"preserveStartEnd"} fontSize={12} />
                    <YAxis tick={{ fill: 'white' }} />
                    <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                    <Bar dataKey="asset" fill="white" barSize={5} radius={30} />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            }
            <div >
              <small className='text-secondary position-absolute mx-3' style={{ bottom:'8%' }}>IT Asset Allotment Summary</small>
            </div>
          </div>
          <div className='graph_2nd_row d-flex justify-content-betweenposition-relative mt-5' >
            <div className='manufacturer_graph bg-light rounded position-relative' style={{ height: "35vh" }}>
              {spinner ?
                <div class="spinner-border text-success" style={{ marginTop: "10%", marginLeft: "50%" }} role="status">
                  <span class="sr-only"></span>
                </div> :
                <div className="manu_pie rounded position-absolute" style={{ background: 'linear-gradient(45deg, rgb(55, 55, 55), rgb(121, 118, 113))', boxShadow: '2px 2px 10px silver', top: "-6.5%", width: "93.5%", left: '3.2%' }}>
                  <ResponsiveContainer width="100%" height='100%' aspect={1.9} >
                    <PieChart width={700} height={150}>
                      
                      <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                      {/* <Tooltip /> */}
                      <Pie fill="#8884d8" stroke="none" data={dashboardmanu} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={38} outerRadius={82} label={renderCustomizedLabel} labelLine={false}>
                        {dashboardmanu.map((entry, index) => (
                        
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}
                          style={{
                            filter: `drop-shadow(0px 0px 3px black`
                          }} />
                        ))}
                      </Pie>
                      <Legend iconSize='10' iconType="rounded" layout="vertical" verticalAlign="top" align="right" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>}
              <div >
                <small className='text-secondary position-absolute mx-3' style={{ bottom:'8%' }}>Manufacturer</small>
              </div>
            </div>
            <div className='software_graph bg-light rounded position-relative' style={{ height: "35vh" }}>
              {spinner ?
                <div class="spinner-border text-warning" style={{ marginTop: "5%", marginLeft: "50%" }} role="status">
                  <span class="sr-only"></span>
                </div> :
                <div className="soft_bar rounded position-absolute" style={{ background: 'linear-gradient(45deg, #e55454, #e57272', boxShadow: '2px 2px 10px silver', top: "-6.5%", width: "93.5%", left: '3.2%' }}>
                  <ResponsiveContainer width="100%" aspect={1.9}>
                    <BarChart data={dashboardsoft} margin={{ top: 18, right: 30, left: -20,bottom:9 }}>
                      <CartesianGrid strokeDasharray='4' vertical={false} />
                      <XAxis tick={{ fill: 'white' }} dataKey="software_name" interval={"preserveStartEnd"} fontSize={12} />
                      <YAxis tick={{ fill: 'white' }} />
                      <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                      <Bar dataKey="software" fill="white" barSize={5} radius={30} />
                      <Tooltip />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              }
                <small className='position-absolute text-secondary mx-3' style={{bottom:'8%'}}>Software</small>
            </div>
          </div>
        </div>
        <div className='asset-sidebar text-white' style={{ boxShadow: '1px 1px 10px silver', borderRadius: '15px' }}>
          <div className='Asset_card2'>
            <p className='mb-0'>Asset Value</p>
            <h5>₹ {Assetsdata.PurchaseVal}</h5>
          </div>
          <div className='Asset_card2'>
            <p className='mb-0'>Rental / Month</p>
            <h5 >₹ {Assetsdata.RentMonth}</h5>
          </div>
          <div className='Asset_card2'>
            <p className='mb-0'>MS OS</p>
            <h5 >0</h5>
          </div>
          <div className='Asset_card2'>
            <p className='mb-0'>MS OS</p>
            <h5 >0</h5>
          </div>
          <div className='Asset_card2'>
            <p className='mb-0'>MS OS</p>
            <h5 >njkn0</h5>
          </div>
        </div>
      </div>
    </div>

  )
}


// export default AssetsDash;
