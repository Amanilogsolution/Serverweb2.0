import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalVendorPaymentapi } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import customStyles from '../../../TableCustomtyle'


const TotalVendorPayment = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Vendor',
            selector: 'vendor',
            sortable: true,
        },
        {
            name: 'Invoice No',
            selector: 'invoice_no',
            sortable: true,
            cell: (row) => [
                <a title='Edit VendorPayments' href="/EditVendorPayments"
                    onClick={() => localStorage.setItem('vendorpaymentssno', `${row.sno}`)}>
                    {row.invoice_no}
                </a>
            ]
        },

        {
            name: 'Payment Amt',
            selector: 'payment_amt',
            sortable: true,
        },
        {
            name: 'Payment Detail',
            selector: 'payment_detail',
            sortable: true,
        },
        {
            name: 'Upload Documents',
            sortable: true,
            cell: (row) => [
                <button className='btn btn-success'> Upload Invoice</button>
            ],
        },
        // {
        //     name: "Actions",
        //     sortable: false,
        //     selector: 'null',
        //     cell: (row) => [
        //         <a title='Edit VendorPayments' href="/EditVendorPayments">
        //             <p onClick={() => localStorage.setItem('vendorpaymentssno', `${row.sno}`)} >
        //                 <AiFillEdit className='ft-20' style={{ marginBottom: "-13px" }} />
        //             </p></a>
        //     ]
        // }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const tabledata = await TotalVendorPaymentapi(org);
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
                            <div className='main-inner-container  d-flex justify-content-between pt-3 pb-3'>
                                <h4><span className='page-type-head1'>Vendor Payment <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Total Vendor Payment</span> </h4>
                                <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddVendorPayment' }} >Add Vendor Payment +</button>
                            </div>
                            <div className=' bg-white pb-1 pt-2 px-2 shadow1-silver rounded15'>
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
                    </Sidebar>
                    : <LoadingPage />
            }

        </>
    )
}
export default TotalVendorPayment;