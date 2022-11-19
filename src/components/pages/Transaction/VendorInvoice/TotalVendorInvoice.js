import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { PendingVendorInvoice } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import LoadingPage from '../../../LoadingPage/LoadingPage';

import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'

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
            background: 'rgb(242,242,242)',
            borderBottom: "1px solid silver"
        },
    },
};


function TotalVendorInvoice() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Vendor',
            selector: row => row.vendor,
            sortable: true,
        },
        {
            name: 'Invoice_no',
            selector: row => row.invoice_no,
            sortable: true,
        },
        {
            name: 'Reference No',
            selector: row => row.reference_no,
            sortable: true,
        },
        {
            name: 'Invoice Amt',
            selector: row => row.invoice_amt,
            sortable: true,
        },
        {
            name: 'Upload',
            sortable: true,
            cell: (row) => [
               <button className='btn btn-success'> Upload Invoice</button>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: row => row.null,
            cell: (row) => [
                <a title='Edit Invoice' href="/EditVendorInvoice">
                    <p onClick={() => sessionStorage.setItem('vendorinvoicesno', `${row.sno}`)} >
                        <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await PendingVendorInvoice();
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
                                    <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Invoice</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Total Vendor Invoice</span> </h2>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddVendorInvoice' }} >Add Vendor Invoice <MdAdd /></button>
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
export default TotalVendorInvoice;