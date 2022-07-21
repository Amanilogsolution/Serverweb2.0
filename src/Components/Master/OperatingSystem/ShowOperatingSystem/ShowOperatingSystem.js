import Editbtn from '../../../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../../../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalOperatingSystem, OperatingSystemStatus } from '../../../../api'

function Showoperatingsystem() {
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
                <a title='Edit Device Type' href="/editoperatingsystem">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('OperatingSystemSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalOperatingSystem();
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
                <div className='deviceid-div' >
                    <div className='headwithbtn'>
                        <h3 className="text-left ">Total Operating System</h3>
                        <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './addoperatingsystem' }}>Add Operating Sysytem</button>
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
export default Showoperatingsystem;