import Editbtn from '../../../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../../../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalDevicegroup,DeviceGroupStatus } from '../../../../api'

function Showdevicegroup() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device Id',
            selector: row=>row.id,
            sortable: true,
        },
        {
            name: 'Device Group',
            selector: row=>row.device_group,
            sortable: true,
        },
        {
            name: 'Remark',
            selector: row=>row.remark,
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select onChange={async(e) =>{
                    const status = e.target.value;
                    await DeviceGroupStatus(status,row.sno)
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
            selector: row=>row.null,
            cell: (row) => [
                <a title='Edit Device Type' href="/editdevicegroup">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('devicegroupSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalDevicegroup();
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
                <div className='deviceid-div' style={{ position: "relative" }}>
                <h3 className="text-left ml-5">Total Device Group</h3>
                    <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './adddevicegroup' }}>Add Group</button>
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
export default Showdevicegroup;