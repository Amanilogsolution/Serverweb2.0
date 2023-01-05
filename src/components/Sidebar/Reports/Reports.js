import React from 'react'
import Sidebar from '../Sidebar'
import './Reports.css'
import { AiOutlinePlus } from 'react-icons/ai'

const customStyles = {
    // table: {
    //     style: {
    //         border:'2px solid red',
    //         minHeight:'55vh'
    //     }
    // },
    title: {
        style: {
            fontColor: 'red',
            fontWeight: '900',
        }
    },
    rows: {
        style: {
            minHeight: '35px'
        }
    },
    headCells: {
        style: {
            fontSize: '14px',
            background: 'rgb(105,59,233)',
            color: 'white',
        },
    },
    cells: {
        style: {
            fontSize: '14px',
            // fontWeight:'600',
            background: 'rgb(242,242,242)	',
            borderBottom: "1px solid silver"
        },
    },
};

export default function Reports() {
    return (
        <>
            <Sidebar>
                <div className='main_container' style={{ background: "white", padding: "19px" }}>
                    <div className='d-flex'>
                        <h4>Reports</h4>
                        <button className='btn btn-voilet mx-4'> <AiOutlinePlus /> New Report</button>
                    </div>
                    
                </div>
            </Sidebar>
        </>
    )
}
