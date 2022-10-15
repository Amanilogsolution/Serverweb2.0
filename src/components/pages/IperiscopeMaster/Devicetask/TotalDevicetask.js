import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';

import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Totaldevicetask, Updatedevicetaskstatus } from '../../../../api'

function TotalDevicetask() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Device Task',
            selector: 'device_tasks',
            sortable: true,
        },
        {
            name: 'Device Task Frequency',
            selector: 'device_tasks_frequency',
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
                    await Updatedevicetaskstatus(e.target.value, row.sno);
                    window.location.reload();
                }}>
                    <option hidden value={row.status} >{row.status}</option>
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
                <a title='Edit Device Task' href="/EditDevicetask">
                    <button className="btn btn-success " onClick={() => sessionStorage.setItem('devicetaskSno', `${row.sno}`)} >
                        Edit
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await Totaldevicetask();
            setData(tabledata)
        }
        fetchdata();
    }, [])

    const tableData = {
        columns,
        data
    };


    return (
        <>
            <Sidebar>
                <div className='main_container' >
                    <div className='innermain_container m-auto' >
                        <div className='d-flex justify-content-between pt-4'>
                            <h3>Total Device Task </h3>
                            <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddDevicetask' }}>Add Device Task </button>
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
export default TotalDevicetask;