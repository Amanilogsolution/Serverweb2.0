import Editbtn from '../../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Totalseriesapi, Updateseriesstatus } from '../../../api'

function Totalseries() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Type series',
            selector: row => row.type_id,
            sortable: true,
        },
        {
            name: 'Services id',
            selector: row => row.services_id,
            sortable: true,
        },
        {
            name: 'Task id',
            selector: row => row.task_id,
            sortable: true,
        },
        {
            name: 'Agent id',
            selector: row => row.agent_id,
            sortable: true,
        },
        {
            name: 'Group id',
            selector: row => row.group_id,
            sortable: true,
        },
        {
            name: 'OS id',
            selector: row => row.os_id,
            sortable: true,
        },
        {
            name: 'Compliance id',
            selector: row => row.comp_id,
            sortable: true,
        },
        {
            name: 'Device id',
            selector: row => row.device_id,
            sortable: true,
        },
        {
            name: 'Task& comp id',
            selector: row => row.taskandcomp_id,
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select onChange={async (e) => {
                    const status = e.target.value;
                    await Updateseriesstatus(status, row.sno)
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
                <a title='Edit Device Type' href="/Editseries">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('seriessno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await Totalseriesapi();
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
                        <h3 className="text-left ">Total Series</h3>
                        <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './Addseries' }}>Add Series</button>
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
export default Totalseries;