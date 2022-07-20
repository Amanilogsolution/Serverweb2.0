import Editbtn from '../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Activedevice, Getdevicetaskbyname, Updatedevicetaskastatus } from '../../api'

function ShowdeviceTask() {
    const [data, setData] = useState([])
    const [devicename, setDevicename] = useState([]);
    const columns = [
        {
            name: 'Task',
            selector: 'task',
            sortable: true,
        },
        {
            name: 'Frequency',
            selector: 'task_frequency',
            sortable: true,
        },
        {
            name: 'DateofCompleted',
            selector: 'completion_date',
            sortable: true,
        },
        {
            name: 'Remark',
            selector: 'remark',
            sortable: true,
        },
        {
            name: 'Completed',
            sortable: true,
            cell: (row) => [
                <select onChange={async (e) => {
                    e.preventDefault();
                    await Updatedevicetaskastatus(e.target.value, row.sno);
                    window.location.reload();
                }}>
                    <option hidden >{row.status}</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: "null",
            cell: (row) => [
                <a title='Edit Device Task ' href="/EditDeviceTaskMain">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('devicetaskmSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const result = await Activedevice();
            console.log(result);
            setDevicename(result)
        }
        fetchdata();
    }, [])

    const tableData = {
        columns,
        data
    };



    const handelselect = async (e) => {
        console.log(e.target.value)
        const tabledata = await Getdevicetaskbyname(e.target.value);
        console.log(tabledata)
        // setShowtable(true)
        setData(tabledata)


    }
    return (
        <>
            <Navbar />
            <div className='deviceid-container' >
                <div className='deviceid-div' style={{ position: "relative" }}>
                    <h3 className="text-left ml-2"> Device Task</h3>
                    <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './Adddevicetaskes' }}>Add Task </button>

                    <div className="form-row">
                        <div className="form-group col-md-4" >
                            {/* <label>Select Device</label> */}
                            <select className="form-control" id='devicename' onChange={handelselect}>
                                <option hidden>Select Device</option>
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
        </>
    )
}
export default ShowdeviceTask;