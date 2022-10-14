import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalOperatingSystemapi, OperatingSystemStatus } from '../../../../api'

function TotalOperatingSystem() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Operating Syatem',
            selector: row => row.operating_system,
            sortable: true,
        },
        {
            name: 'Remark',
            selector: row => row.remark,
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select onChange={async (e) => {
                    const status = e.target.value;
                    await OperatingSystemStatus(status, row.sno)
                    window.location.reload()
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
            selector: row => row.null,
            cell: (row) => [
                <a title='Edit Device Type' href="/EditOperatingSystem">
                    <button className="btn btn-success " onClick={() => sessionStorage.setItem('OperatingSystemSno', `${row.sno}`)} >
                        Edit
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalOperatingSystemapi();
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
                            <h3>Total Operating System</h3>
                            <button className='btn btn-voilet m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddOperatingSystem' }}>Add Operating Sysytem</button>
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
export default TotalOperatingSystem;