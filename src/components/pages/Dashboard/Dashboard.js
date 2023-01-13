import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import { BsLaptopFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { FaTicketAlt } from 'react-icons/fa';
import { MdStickyNote2 } from 'react-icons/md';
import AssetsDash from './AssetsDash'
import VendorDash from './VendorDash/VendorDash'
import Outstanding from './Outstanding/Outstanding'
import Outstatndingdetails from './Outstanding/Outstandingdetails'
import TickteDash from './TicketDash/TicketDash'

import { DashboarDetails } from '../../../api/index'
import LoadingPage from '../../LoadingPage/LoadingPage';
import Recurring from './VendorDash/Recurring';
import styled from 'styled-components';


const Dashboard = () => {
  const [currentStep, setStep] = useState(1);
  const [loading, setLoading] = useState(false)
  const [dashboarddetails, setDashboarddetails] = useState({
    "Assetdata": 0,
    "Vendordata": 0,
    "Invoice": 0,  
    "Ticket": 0,
  })
  useEffect(() => {
    const fetch = async () => {
      const org = localStorage.getItem('Database')

      const result = await DashboarDetails(org)
      console.log(result)
      // setLoading(true)

      setDashboarddetails({ ...dashboarddetails, Assetdata: result.Assets.asset, Vendordata: result.Vendor.Vendor_code, Invoice: result.Invoice.vendor, Ticket: result.Ticket.ticket })
    }
    fetch();
  }, [])

  const colordynamic = (step) =>{
      // console.log(step)
      for(let i=1; i<=4;i++){
        if(i==step){
          console.log("true")
          document.getElementById(`css${i}`).style.background = "white"
          document.getElementById(`css${i}`).style.borderBottom = "4px solid #30305f"

        }else{
          document.getElementById(`css${i}`).style.background = "#b5acf1"
          document.getElementById(`css${i}`).style.borderBottom = "none"
        }
        // console.log(i)
      }
  }

  const showStep = (step) => {
    // console.log(step)
    switch (step) {
      case 1:
        return <AssetsDash  />
      case 2:
        return <VendorDash  setStep={setStep} />
      case 3:
        return <Outstanding setStep={setStep} />
      case 4:
        return <TickteDash />
      case 5:
        return <Outstatndingdetails />
      case 6:
        return <Recurring />
      default:
        return false
    }
  }

  return (
    <>
      {
        loading ?
          <Sidebar>
            <div className='dashboard_container'>

              <div className='dashboard_cards justify-content-end'>
                <div className='d-flex justify-content-center  dash_toggle_btns'>
                  <div className='dash_toggle_btn 'style={{background:"white",borderBottom:"4px solid #30305f"}} id="css1"  onClick={() => {colordynamic(1); setStep(1)}}>Assets</div>
                  <div className='dash_toggle_btn ' id="css2" onClick={() =>{colordynamic(2); setStep(2)}}>Vendors</div>
                  <div className='dash_toggle_btn ' id="css3" onClick={() => {colordynamic(3);setStep(3)}}>Invoice</div>
                  <div className='dash_toggle_btn ' id="css4" onClick={() => {colordynamic(4);setStep(4)}}>Tickets</div>
                </div>
                {/* <div onClick={() => setStep(1)} className='card1 d-flex rounded cursor-pointer'>
                  <div>
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Assetdata}</h1>
                    <p className='dash_card_para'>Assets</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle position-absolute'>
                    <BsLaptopFill className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(2)} className='card1 d-flex rounded cursor-pointer'>
                  <div>
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Vendordata}</h1>
                    <p className='dash_card_para'>Vendors</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle position-absolute'>
                    <HiUsers className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(3)} className='card1 d-flex rounded cursor-pointer'>
                  <div>
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Invoice}</h1>
                    <p className='dash_card_para'>Invoice</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle position-absolute'>
                    <MdStickyNote2 className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(4)} className='card1 d-flex rounded cursor-pointer'>
                  <div >
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Ticket}</h1>
                    <p className='dash_card_para'>Tickets</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle position-absolute'>
                    <FaTicketAlt className='icon' />
                  </div>
                </div> */}
              </div>
              {showStep(currentStep)}
            </div>

          </Sidebar>
          : <LoadingPage />
      }
    </>

  );
};

export default Dashboard; 