import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Totaldeviceservices, Updatestatusdeviceservices } from '../../../../api';


function Show_deviceservices() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const getdeviceservices = await Totaldeviceservices();
            setData(getdeviceservices);

        }
        fetchdata()
    }, [])

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
                    const result = await Updatestatusdeviceservices(e.target.value, row.sno);
                    window.location.reload();
                }}>
                    <option hidden value={row.status}>{row.status}</option>
                    <option value='Active'>Active</option>
                    <option value='Deactive'>Deactive</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: "null",
            cell: (row) => [
                <a title='Edit Device Services' href="/EditDeviceServices">
                    <button className="btn btn-success " onClick={() => sessionStorage.setItem('deviceservicesSno', `${row.sno}`)} >
                        Edit
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
            <Sidebar>
                <div className='main_container' >
                    <div className='innermain_container m-auto' >
                        <div className=' d-flex justify-content-between pt-4'>
                            <h3 >Total Device Services </h3>
                            <button className='btn btn-voilet m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddDeviceservices' }}>Add Device Services</button>
                        </div>
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
            </Sidebar>
        </>
    )
}
export default Show_deviceservices;