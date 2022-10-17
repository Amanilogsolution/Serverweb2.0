import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Activedevice, Getdevicetaskcompliancebyname, Updatedevicecompstatus } from '../../../../api'

function UpdateDevicetaskcomp() {
    const [data, setData] = useState([])
    const [devicename, setDevicename] = useState([]);

    const columns = [
        {
            name: 'Services',
            selector: 'services',
            sortable: true,
        },
        {
            name: 'Compliance ',
            selector: 'add_compliance',
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
                    await Updatedevicecompstatus(e.target.value, row.sno);
                    window.location.reload();
                }}>
                    <option hidden value={row.status}>{row.status}</option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: "null",
            cell: (row) => [
                <a title='Edit Agent master' href="/EditDeviceComp">
                    <button className="btn btn-success" onClick={() => sessionStorage.setItem('devicecompSno', `${row.sno}`)} >
                        Edit
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const result = await Activedevice();
            setDevicename(result)
        }
        fetchdata();
    }, [])

    const tableData = {
        columns,
        data
    };


    const handelselect = async (e) => {
        const tabledata = await Getdevicetaskcompliancebyname(e.target.value);
        setData(tabledata)
    }

    return (
        <>
            <Sidebar>
                <div className='main_container' >
                    <div className='innermain_container m-auto' >
                        <div className='d-flex justify-content-between pt-4'>
                            <h3> Device Compliances</h3>
                            <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddDeviceComp' }}>Add Compliances </button>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4" >
                                <select className="form-control" id='devicename' onChange={handelselect}>
                                    <option value='' hidden>Select Device</option>
                                    {
                                        devicename.map((item, index) =>
                                            <option key={index}>{item.device_name}</option>)
                                    }
                                </select>
                            </div>

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
export default UpdateDevicetaskcomp;