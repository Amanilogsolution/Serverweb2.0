import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { AiOutlinePlus } from 'react-icons/ai'


const Reports = () => {
    return (
        <>
            <Sidebar>
                <div className='main_container bg-white rounded15 shadow1-silver py-3' >
                    <div className='d-flex'>
                        <h4>Reports</h4>
                        <button className='btn btn-voilet mx-4'> <AiOutlinePlus /> New Report</button>
                    </div>

                </div>
            </Sidebar>
        </>
    )
}

export default Reports;
