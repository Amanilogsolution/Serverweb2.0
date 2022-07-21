import Editbtn from '../../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Totaldevicetask, Updatedevicetaskstatus } from '../../../api'

function ShowDevicetask() {
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
                <a title='Edit Device Task' href="/EditDevicetask">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('devicetaskSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
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
            <Navbar />
            <div className='deviceid-container' >
                <div className='deviceid-div' >
                    <div className='headwithbtn'>
                        <h3 className="text-left  " >Total Device Task </h3>
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
        </>
    )
}
export default ShowDevicetask;