import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import { BsLaptopFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { FaTicketAlt } from 'react-icons/fa';
import { MdStickyNote2 } from 'react-icons/md';
import AssetsDash from './AssetsDash'
import VendorDash from './VendorDash'
import Outstanding from './Outstanding/Outstanding'
import TickteDash from './TicketDash'
import { DashboarDetails } from '../../../api/index'
import LoadingPage from '../../LoadingPage/LoadingPage';


const Dashboard = () => {
  const [currentStep, setStep] = useState(1);
  const [loading,setLoading] = useState(false)
  const [dashboarddetails, setDashboarddetails] = useState({
    "Assetdata": 0,
    "Vendordata": 0,
    "Compliance": 0,
    "Ticket": 0,
  })
  useEffect(() => {
    const fetch = async () => {
      const org = sessionStorage.getItem('Database')

      const result = await DashboarDetails(org)
      setLoading(true)

      setDashboarddetails({ ...dashboarddetails, Assetdata: result.Assets.asset, Vendordata: result.Vendor.Vendor_code, Ticket: result.Ticket.ticket })
    }
    fetch();
  }, [])

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <AssetsDash />
      case 2:
        return <VendorDash />
      case 3:
        return <Outstanding />
      case 4:
        return <TickteDash />
      default:
        return false
    }
  }

  return (
    <>
      {
        loading ?
          <Sidebar>
            <div className='dashboard_container pt-2'>

              <div className='dashboard_cards text-white d-flex justify-content-around'>
                <div onClick={() => setStep(1)} className='card1 d-flex rounded curser-pointer'>
                  <div>
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Assetdata}</h1>
                    <p className='dash_card_para'>Assets</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <BsLaptopFill className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(2)} className='card1 d-flex rounded curser-pointer'>
                  <div>
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Vendordata}</h1>
                    <p className='dash_card_para'>Vendors</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <HiUsers className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(3)} className='card1 d-flex rounded curser-pointer'>
                  <div>
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Compliance}</h1>
                    <p className='dash_card_para'>Compliances</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <MdStickyNote2 className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(4)} className='card1 d-flex rounded curser-pointer'>
                  <div >
                    <h1 className='dash_card_head mb-0'>{dashboarddetails.Ticket}</h1>
                    <p className='dash_card_para'>Tickets</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <FaTicketAlt className='icon' />
                  </div>
                </div>
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