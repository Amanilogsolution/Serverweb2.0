import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalServiceCompliance, ServiceComplianceStatus } from '../../../../api'

function TotalServicecompliance() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Device Service',
            selector: row => row.device_services,
            sortable: true,
        },
        {
            name: 'Service Compliance',
            selector: row => row.services_compliance,
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
                    await ServiceComplianceStatus(status, row.sno)
                    window.location.reload()
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
            selector: row => row.null,
            cell: (row) => [
                <a title='Edit Device Type' href="/EditServiceCompliance">

                    <button className="btn btn-success " onClick={() => sessionStorage.setItem('ServiceComplianceSno', `${row.sno}`)} >
                        Edit
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalServiceCompliance();
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
                    <div className='innermain_container m-auto'>
                        <div className='d-flex justify-content-between pt-4'>
                            <h3>Total Service Compliance</h3>
                            <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddServicecompliance' }}>Add Compliance</button>
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
export default TotalServicecompliance;