import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalVendorPaymentapi,FileUpload,UploadInvoice } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { GrDocumentUpload } from 'react-icons/gr';
import {AiOutlineEye} from 'react-icons/ai'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import customStyles from '../../../TableCustomtyle'


const TotalVendorPayment = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [sno,setSno] = useState()
    const [file, setFile] = useState('');

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const tabledata = await TotalVendorPaymentapi(org);
            console.log(tabledata);
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
            // selector:  row => `₹ ${row.payment_amt}`,
            sortable: true,
            cell: (row) => [
                <p>{`₹ ${row.payment_amt}`}</p>
            ]
        },
        {
            name: 'Payment Detail',
            selector: 'payment_detail',
            sortable: true,
        },
        {
            name: 'Date',
            selector: 'date',
            sortable: true,
        },
        {
            name: 'Actions',
            sortable: true,
            cell: (row) => [
                <button className='btn' data-toggle="modal" data-target="#exampleModalCenter"
                onClick={(e)=>{e.preventDefault(); setSno(row.sno)}}> <GrDocumentUpload/> </button>,
                <button onClick = {()=>{  window.open(`${row.uploadpayment}`, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=400,left=10000,width=400,height=400");}} ><AiOutlineEye style={{fontSize:"20px"}}/></button>
            ],
        }
      

    ];
    const handleClick = async(e) => {
        e.preventDefault();
        const org = localStorage.getItem('Database')
        console.log(org,'uploadpayment',file,sno)

        const result = await UploadInvoice(org,'uploadpayment',file,sno)
        // console.log(result)
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
export default TotalVendorPayment;