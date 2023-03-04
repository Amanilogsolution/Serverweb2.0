import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { PendingVendorInvoice,FileUpload,UploadInvoice } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { GrDocumentUpload } from 'react-icons/gr';
import {AiOutlineEye} from 'react-icons/ai'

import customStyles from '../../../TableCustomtyle'


function TotalVendorInvoice() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState('');
    const [sno,setSno] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const tabledata = await PendingVendorInvoice(org);
            console.log(tabledata)
            setData(tabledata)
            setLoading(true)
        }
        fetchdata();
    }, [])

    const columns = [
        {
            name: 'Vendor',
            selector: 'vendor',
            sortable: true,
        },
        {
            name: 'Invoice_no',
            selector: 'invoice_no',
            sortable: true,
            cell: (row) => [
                <a title='Edit Invoice' href="/EditVendorInvoice" onClick={() => localStorage.setItem('vendorinvoicesno', `${row.sno}`)} >
                    {row.invoice_no}
                </a>
            ]
        },
        {
            name: 'Reference No',
            selector: 'reference_no',
            sortable: true,
        },
        {
            name: 'Invoice Amt',
            selector:row => `₹ ${row.invoice_amt}`,
            sortable: true,
        },
        {
            name: 'Upload',
            sortable: true,
            cell: (row) => [
                <button className='btn btn' data-toggle="modal" data-target="#exampleModalCenter"
                 onClick={(e)=>{e.preventDefault(); setSno(row.sno)}}><GrDocumentUpload/></button>,
                <a href={row.uploadInvoice} target="_blank"><AiOutlineEye style={{fontSize:"20px"}}/></a>

            ],
        }
       

    ];

    const handleClick = async(e) => {
        e.preventDefault();
        const org = localStorage.getItem('Database')
        console.log(org,'uploadInvoice',file,sno)

        const result = await UploadInvoice(org,'uploadInvoice',file,sno)
        console.log(result)
        if(result){
            alert('Invoice successfully uploaded')
            window.location.reload()
        }
    }

   

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
                                <h4><span className='page-type-head1'>Vendor Invoice <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Total Vendor Invoice</span> </h4>
                                <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddVendorInvoice' }} >Add Vendor Invoice +</button>
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
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Upload Invoice</h5>

                                    </div>
                                    <div class="modal-body">
                                        <input type="file" onChange={async(event) => {
                                            console.log(event.target.files[0])
                                            setTimeout(async() => {
                                                const data = new FormData();
                                                data.append("images", event.target.files[0])
                                                const UploadLink = await FileUpload(data)
                                                setLoading(false)
                                                if(UploadLink.length > 1){
                                                    setFile(UploadLink)
                                                    document.getElementById("uploadbutton").style.display = "flex"
                                                    setLoading(true)
                                                }

                                        },2000)
                                        
                                        }} />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" id="uploadbutton" data-dismiss="modal" onClick={handleClick} style={{display:"none"}} >Upload</button>
                                    </div>
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