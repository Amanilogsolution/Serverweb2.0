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
    console.log(locationname)
    setChartData(locationname || dashboard_soft || dashboard_manu)
    if (locationname) {
      setSpinner(false)
    }


  }

  const COLORS = ['#3c4a5d', '#d81b60', '#0065e8', '#161616', '#5cb360', '#7675C4'];


  return (
    <div className='AssetDash'>
      <div className='Asset_cards  d-flex justify-content-between mb-2'>
        <div className='card1 d-flex justify-content-around rounded cursor-pointer'>
          <div className='position-relative  asset-inner-card'>
            <div className='dash_card_icon_div rounded position-absolute'>
              <BsLaptopFill className='icon ' />
            </div>
          </div>
          <div style={{marginLeft:"-50px"}}>
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
          <div style={{marginLeft:"-50px"}}>
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
          <div style={{marginLeft:"-50px"}}>
            <h1 className='dash_card_head mb-0'>{Assetsdata.RentalAssets}</h1>
            <p className='dash_card_para'>Rental Devices</p>
          </div>
        </div>
      </div>
      
      <div className='d-flex justify-content-between mt-3'>
        <div className='for_graph'>
          <div className='bar_location bg-light rounded'>
            {spinner ?
              <div class="spinner-border text-primary" style={{ marginTop: "2%", marginLeft: "50%" }} role="status">
                <span class="sr-only"></span>
              </div> :
              <div className=' rounded it-bar' style={{ background: 'linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))', boxShadow: '2px 2px 10px silver' }} >
                {/* <p className=' px-4'>IT Asset Allotment Summary</p> */}
                <ResponsiveContainer width="100%" aspect={5}>
                  <BarChart data={chartdata} margin={{ top: 20, right: 45 }}>
                    {/* <CartesianGrid strokeDasharray='3 3'/> */}
                    <XAxis tick={{ fill: 'white' }} dataKey="location_code" interval={"preserveStartEnd"} fontSize={12}/>
                    <YAxis tick={{ fill: 'white' }} />
                    <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                    <Bar dataKey="asset" fill="white" barSize={5} radius={30} />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            }
            <div >
              <p style={{margin:"10px 0 20px 44px",color:"#6a6a6a"}}>IT Asset Allotment Summary</p>
            </div>
          </div>
          <div className='graph_2nd_row d-flex justify-content-between' >
            <div className='manufacturer_graph  bg-light rounded'>
              {spinner ?
                <div class="spinner-border text-success" style={{ marginTop: "10%", marginLeft: "50%" }} role="status">
                  <span class="sr-only"></span>
                </div> :
                <div className="manu_pie rounded" style={{ background: 'linear-gradient(45deg, rgb(55, 55, 55), rgb(121, 118, 113))', boxShadow: '2px 2px 10px silver' }}>
                  {/* <p className=' px-4 mx-2 my-0'>Manufacturer</p> */}
                  <ResponsiveContainer width="100%" height='100%' aspect={2.0} >
                    <PieChart width={700} height={150}>
                      <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                      {/* <Tooltip /> */}
                      <Pie data={dashboardmanu} dataKey="value" nameKey="name" cx="50%" cy="56%" outerRadius={56} fill="rgb(94, 4, 69)" label>
                        {dashboardmanu.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend layout="vertical" verticalAlign="center" align="right" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>}
              <div >
                <p style={{margin:"10px 0 0 24px",color:"#6a6a6a"}}>Manufacturer</p>
              </div>
            </div>
            <div className='software_graph bg-light rounded '>
              {spinner ?
                <div class="spinner-border text-warning" style={{ marginTop: "5%", marginLeft: "50%" }} role="status">
                  <span class="sr-only"></span>
                </div> :
                <div className="soft_bar rounded" style={{ background: 'linear-gradient(45deg, rgb(55, 55, 55), rgb(121, 118, 113))', boxShadow: '2px 2px 10px silver' }}>
                  {/* <p className=' px-4'>Software</p> */}

                  <ResponsiveContainer width="100%" aspect={2.2}>
                    <BarChart data={dashboardsoft} margin={{ top: 3, right: 40 }}>
                      {/* <CartesianGrid /> */}
                      <XAxis tick={{ fill: 'white' }} dataKey="software_name" interval={"preserveStartEnd"} style={{ fontSize: "14px" }} />
                      <YAxis tick={{ fill: 'white' }}/>
                      <Tooltip contentStyle={{ backgroundColor: "rgb(179, 210, 242)" }} />
                      <Bar dataKey="software" fill="white" barSize={5} radius={30}/>
                      <Tooltip />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              }
              <div >
                <p style={{margin:"10px 0 20px 24px",color:"#6a6a6a"}}>Software</p>
              </div>
            </div>
          </div>
        </div>
        <div className='asset-sidebar rounded  '>
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
    </div>

  )
}

// export default AssetsDash;
