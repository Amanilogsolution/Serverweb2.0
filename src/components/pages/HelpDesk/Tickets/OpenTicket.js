import React, { useState, useEffect } from 'react'
import 'react-data-table-component-extensions/dist/index.css';
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { OpenTotalTicket, DeleteTickets } from '../../../../api'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';

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
            background: 'rgb(242,242,242)	',
            borderBottom: "1px solid silver"
        },
    },
};


const columns = [
    {
        name: 'Employee Name',
        selector: 'emp_name',
        sortable: true,
    },
    {
        name: 'Asset Type',
        selector: 'asset_type',
        sortable: true,
    },
    {
        name: 'Ticket',
        selector: 'assign_ticket',
        sortable: true,
        cell: (row) => [
            <a title="Click to Edit"  href="/EditTicket" style={{textDecoration:"none"}}  onClick={() => sessionStorage.setItem('TicketSno', `${row.sno}`)} >{row.assign_ticket}</a>
          ]
    },
    {
        name: 'Location',
        selector: 'location',
        sortable: true,
    },
    {
        name: 'Ticket Status',
        selector: 'ticket_status',
        sortable: true,
    },
    {
        name: 'Assign To',
        selector: 'add_user_name',
        sortable: true,
    },
    {
        name: 'Ticket Date',
        selector: 'date',
        sortable: true,
    },
    // {
    //     name: 'Status',
    //     sortable: true,
    //     cell: (row) => [
    //         <select style={{ background: "rgb(222, 222, 222)", border: 'none', borderRadius: "2px" }} 
    //         onChange={async (e) => {
    //             const status = e.target.value;
    //             const org = sessionStorage.getItem('Database')

    //             await DeleteTickets(org,status, row.sno)
    //             window.location.reload()
    //         }}
    //         >
    //             <option hidden value={row.status}>{row.status}</option>
    //             <option value='Active'>Active</option>
    //             <option value='Deactive'>Deactive</option>
    //         </select>
    //     ],
    // },
    // {
    //     name: "Actions",
    //     sortable: false,
    //     selector: 'null',
    //     cell: (row) => [
    //         <a title='Edit Ticket' href="/EditTicket">
    //             <p onClick={() => sessionStorage.setItem('TicketSno', `${row.sno}`)} >
    //                 <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
    //             </p></a>
    //     ]
    // }

];


const OpenTotalTickets = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])


    useEffect(() => {
        const fetchdata = async () => {
            const org = sessionStorage.getItem('Database')

            const tabledata = await OpenTotalTicket(org);
            console.log(tabledata)
            setData(tabledata)
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
                                    <h3><span style={{ color: "rgb(123,108,200)" }}> Ticket</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Open Ticket</span> </h3>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddTickets' }} >Add Ticket<MdAdd /></button>
                                </div>
                                <div>
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


export default OpenTotalTickets;