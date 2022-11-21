import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalTicketstatusapi, UpdateTicketstatusActive } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

const customStyles = {
    title: {
        style: {
            fontColor: 'red',
            fontWeight: '900',
        }
    },
    rows: {
        style: {
            minHeight: '35px'
        }
    },
    headCells: {
        style: {
            fontSize: '14px',
            background: 'rgb(105,59,233)',
            color: 'white',
        },
    },
    cells: {
        style: {
            fontSize: '14px',
            // fontWeight:'600',
            background: 'rgb(242,242,242)',
            borderBottom: "1px solid silver"
        },
    },
};

const columns = [
    {
        name: 'Ticket Status',
        selector: row => row.ticket_status,
        sortable: true,
    },
    {
        name: 'Ticket Description',
        selector: row => row.ticket_description,
        sortable: true,
    },

    {
        name: 'Status',
        sortable: true,
        cell: (row) => [
            <select style={{ background: "rgb(222, 222, 222)", border: 'none', borderRadius: "2px" }} onChange={async (e) => {
                const status = e.target.value;
                await UpdateTicketstatusActive(status, row.sno)
                window.location.reload()
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
        selector: row => row.null,
        cell: (row) => [
            <a title='Edit TicketStatus' href="/EditTicketStatus">
                <p onClick={() => sessionStorage.setItem('ticketstatussno', `${row.sno}`)} >
                    <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
                </p></a>
        ]
    }

];

function TotalTicketStatus() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await TotalTicketstatusapi();
            setData(result)
            setLoading(true)
        }
        fetchdata();
    }, [])

    const tableData = {
        columns,
        data
    };

    return (
        <>
        {
                loading ?
            <Sidebar>
                <div className='main_container' >
                    <div className='m-auto' style={{ overflow: "hidden", width: "97%" }}>
                        <div className=' d-flex justify-content-between mx-5 pt-4 pb-3' >
                            <h2><span style={{ color: "rgb(123,108,200)" }}>Ticketstatus</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Total Ticketstatus</span> </h2>
                            <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddTicketStatus' }} >Add Ticketstatus <b><MdAdd /></b></button>
                        </div>
                        <div >
                            <DataTableExtensions {...tableData}  >
                                <DataTable
                                    noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    customStyles={customStyles}
                                />
                            </DataTableExtensions>
                        </div>
                    </div>
                </div>
            </Sidebar>
            : <LoadingPage />
            }
        </>
    )
}
export default TotalTicketStatus;