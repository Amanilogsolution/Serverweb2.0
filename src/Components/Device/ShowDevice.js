import Editbtn from '../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {Totaldevice,Updatedevicestatus} from '../../api'
function ShowDevice() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device Id',
            selector: 'device_id',
            sortable: true,
        },
        {
            name: 'Device Name',
            selector: 'device_name',
            sortable: true,
        },
        {
            name: 'Device Type',
            selector: 'device_type',
            sortable: true,
        },
        {
            name: 'Device Group',
            selector: 'device_group',
            sortable: true,
        },
        {
            name: 'Device Ip address',
            selector: 'device_ip_address',
            sortable: true,
        },
        {
            name: 'Device Host Master',
            selector: 'device_host_master',
            sortable: true,
        },
        {
            name: 'Device OS',
            selector: 'device_os',
            sortable: true,
        },
        {
            name: 'Services',
            selector: 'services',
            sortable: true,
        },
        {
            name: 'Device Creation Date',
            selector: 'device_creation_date',
            sortable: true,
        },
        {
            name: 'Device REG Date',
            selector: 'device_reg_date',
            sortable: true,
        },
        {
            name: 'Agent',
            selector: 'agent',
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
                    await Updatedevicestatus(e.target.value, row.sno);
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
                <a title='Edit Agent master' href="/EditDevice">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('deviceSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
     
        fetchdata();
    }, [])

    const fetchdata = async () => {
        const tabledata = await Totaldevice();
        console.log(tabledata)
        setData(tabledata)
    }

    const tableData = {
        columns,
        data
    };


    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className='' style={{ position: "relative" }}>
                <h3 className="text-left ml-5">Total Device</h3>
                    <button className='btn btn-success mr-4 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddDevice' }}>Add Device</button>
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
export default ShowDevice;