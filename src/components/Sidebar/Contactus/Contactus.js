import React from 'react'
import './Contactus.css'
import Sidebar from '../Sidebar'
import { RiContactsBookFill } from 'react-icons/ri';

export default function Contactus() {
    return (
        <>
            <Sidebar>
                <div className='contact_us'>
                    <div className='contact_us_card'>
                         <div className='contact_us_logo'>
                           <RiContactsBookFill/>
                           <h4>Contact Us</h4>
                         </div>
                         <div className='contact_us_content'>
                             <h4>AWL INDIA PRIVATE LIMITED</h4>
                             <p>Vatika Atrium Ground Floor Tower-B Golf Course Road Sector-53 Gurgaon - 122002,India</p>
                             <p>Phone:  +91-124-427-9462</p>
                             <p>Fax:  +91-101-124-5999</p>
                         </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
