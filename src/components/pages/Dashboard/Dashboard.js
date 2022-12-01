import React, { useState, useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './Dashboard.css'
import { BsLaptopFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { FaTicketAlt } from 'react-icons/fa';
import { MdStickyNote2 } from 'react-icons/md';
import AssetsDash from './AssetsDash'
import VendorDash from './VendorDash'
import Compliance from './Compliance'
import TickteDash from './TicketDash'
import LoadingPage from '../../LoadingPage/LoadingPage';


const Dashboard = () => {
  const [currentStep, setStep] = useState(1);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
  }, [])

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <AssetsDash />
      case 2:
        return <VendorDash />
      case 3:
        return <Compliance />
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
                <div onClick={() => setStep(1)} className='card1 d-flex rounded curser-pointer' >
                  <div>
                    <h1 className='dash_card_head mb-0'>453</h1>
                    <p className='dash_card_para'>Assets</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <BsLaptopFill className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(2)} className='card1  d-flex rounded curser-pointer' >
                  <div>
                    <h1 className='dash_card_head mb-0'>258</h1>
                    <p className='dash_card_para'>Vendors</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <HiUsers className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(3)} className='card1  d-flex rounded curser-pointer'  >
                  <div>
                    <h1 className='dash_card_head mb-0'>54</h1>
                    <p className='dash_card_para'>Compliances</p>
                  </div>
                  <div className='dash_card_icon_div rounded-circle'>
                    <MdStickyNote2 className='icon' />
                  </div>
                </div>
                <div onClick={() => setStep(4)} className='card1  d-flex rounded curser-pointer'>
                  <div >
                    <h1 className='dash_card_head mb-0'>336</h1>
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