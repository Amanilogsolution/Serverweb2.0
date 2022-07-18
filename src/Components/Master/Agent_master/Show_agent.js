import Editbtn from '../../../img/edit.png'
import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import {Totalagent,Updateagentstatus} from '../../../api'

function ShowAgent() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Agent Name',
            selector: 'agent_name',
            sortable: true,
        },
        {
            name: 'Agent Email',
            selector: 'agent_email',
            sortable: true,
        },
        {
            name: 'Agent Phone',
            selector: 'agent_phone',
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
                    await Updateagentstatus(e.target.value, row.sno);
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
                <a title='Edit Agent master' href="/EditAgent">

                    <button className="editbtn " onClick={() => sessionStorage.setItem('agentSno', `${row.sno}`)} >
                        {/* Edit */}
                        <img src={Editbtn} alt='Edit ' className='editbtnimg' />
                    </button></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await Totalagent();
            // console.log(tabledata)
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
                    <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddAgent' }}>Add Agent </button>
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
export default ShowAgent;