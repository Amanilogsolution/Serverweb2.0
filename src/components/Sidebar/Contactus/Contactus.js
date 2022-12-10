import React from 'react'
import Sidebar from '../Sidebar'

export default function Contactus() {
    return (
        <>
            <Sidebar>
                <div className='main_container px-3 py-3 px-sm-5 py-sm-5'>
                    <div className='card w-50' style={{border:"none",boxShadow:"1px 1px 4px 1px silver"}}>
                        <div className='card-header' style={{border:"none",background:"#eff3f6"}}>
                            <h5>Contact Us</h5>
                        </div>
                        <div className='card-body px-4 py-4'>
                            <h5>Support Phones</h5>
                            <p> US Enterprise: +1.877.422.3865</p>
                            <p style={{marginTop:"-14px"}}>US MSP: +1.877.422.3865</p>
                            <h5>Support Email</h5>
                            <a class="nav-link" aria-expanded="false">support@itarian.com</a>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
