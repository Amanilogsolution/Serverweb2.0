import Editbtn from '../../../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../../../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalServiceCompliance, ServiceComplianceStatus } from '../../../../api'

function Showservicecompliance() {
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

                    <button className="editbtn " onClick={() => sessionStorage.setItem('ServiceComplianceSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalServiceCompliance();
            console.log(tabledata)
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
            <Navbar />
            <div className='deviceid-container' >
                <div className='deviceid-div'>
                    <div className='headwithbtn'>
                        <h3 className="text-left ">Total Service Compliance</h3>
                        <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddServiceCompliance' }}>Add Compliance</button>
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
            {/* <Footer /> */}
        </>
    )
}
export default Showservicecompliance;