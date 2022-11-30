import React,{useState} from 'react';
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


const Dashboard = () => {
  const [currentStep, setStep] = useState(1);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <AssetsDash/>
      case 2:
        return <VendorDash/>
      case 3:
        return <Compliance/>
      case 4:
        return <TickteDash/>
    }
  }

  return (
    <div>
      <Sidebar>
        <div className='dashboard_container'>

          <div className='dashboard_cards'>
            <div onClick={() => setStep(1)} className='card1' id="card11">
              <div>
                <h1 className='dash_card_head'>453</h1>
                <p className='dash_card_para'>Assets</p>
              </div>
              <div className='dash_card_icon_div'>
                <BsLaptopFill className='icon'/>
              </div>
            </div>
            <div onClick={() => setStep(2)} className='card1' id="card12">
              <div>
                <h1 className='dash_card_head'>258</h1>
                <p className='dash_card_para'>Vendors</p>
              </div>
              <div className='dash_card_icon_div'>
                <HiUsers className='icon'/>
              </div>
            </div>
            <div onClick={() => setStep(3)} className='card1' id="card13">
              <div>
                <h1 className='dash_card_head'>54</h1>
                <p className='dash_card_para'>Compliances</p>
              </div>
              <div className='dash_card_icon_div'>
                <MdStickyNote2 className='icon'/>
              </div>
            </div>
            <div onClick={() => setStep(4)} className='card1' id="card14">
              <div >
                <h1 className='dash_card_head'>336</h1>
                <p className='dash_card_para'>Tickets</p>
              </div>
              <div className='dash_card_icon_div'>
                <FaTicketAlt className='icon'/>
              </div>
            </div>
          </div>
          {showStep(currentStep)}
        </div>
        
      </Sidebar>
    </div>

  );
};

export default Dashboard; 