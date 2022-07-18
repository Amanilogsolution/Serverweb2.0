import Editbtn from '../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {Totaldeviceservices,Updatestatusdeviceservices} from '../../api';


function Show_deviceservices() {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchdata=async ()=>{
            const getdeviceservices= await Totaldeviceservices();
            console.log(getdeviceservices[0])
            setData(getdeviceservices);

        }
        fetchdata()
    },[])

    const columns = [
        {
            name: ' Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Device Services',
            selector: 'device_services',
            sortable: true,
        },
        {
            name: 'Remark',
            selector: 'remark',
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select onChange={async (e) => {
                    e.preventDefault();
                   const result= await Updatestatusdeviceservices(e.target.value,row.sno);
                    window.location.reload();
                    }}>
                    <option hidden >{row.status}</option>
                    <option>Active</option>
                    <option>Deactive</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: "null",
            cell: (row) => [
                <a title='Edit Device Type' href="/EditDeviceservices">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('deviceservicesSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    const tableData = {
        columns,
        data
    };


    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className='deviceid-div' style={{ position: "relative" }}>
                 
                    <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddDeviceservices' }}>Add Device Services</button>
                    <DataTableExtensions {...tableData}>
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </>
    )
}
export default Show_deviceservices;