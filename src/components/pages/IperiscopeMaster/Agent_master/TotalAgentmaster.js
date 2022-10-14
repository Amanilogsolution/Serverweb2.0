import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Totalagent, Updateagentstatus } from '../../../../api'

function TotalAgentmaster() {
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
                    <option hidden value={row.status}>{row.status}</option>
                    <option value='Active'>Active</option>
                    <option value='Deactive'>Deactive</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: "null",
            cell: (row) => [
                <a title='Edit Agent master' href="/EditAgent">
                    <button className="btn btn-success " onClick={() => sessionStorage.setItem('agentSno', `${row.sno}`)} >
                        Edit
                    </button></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await Totalagent();
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
                    <div className='innermain_container m-auto' >
                        <div className='d-flex justify-content-between pt-4'>
                            <h3>Total Agent</h3>
                            <button className='btn btn-success m-0 add-btn' onClick={e => { e.preventDefault(); window.location.href = './AddAgent' }}>Add Agent </button>
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
export default TotalAgentmaster;