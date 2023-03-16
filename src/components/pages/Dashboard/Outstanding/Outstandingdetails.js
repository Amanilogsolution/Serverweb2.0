import './Outstandingdetail.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { VendorInvoice, PaidInvoice, FilterInvoice } from '../../../../api/index'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { BsFilterLeft } from 'react-icons/bs';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

const Outstatndingdetails = () => {
    const [TotalVendor, setTotalVendor] = useState([])
    const [PaidInvoicess, setPaidInvoice] = useState([])
    const [rowperpage, setRowPerPage] = useState(10)
    const [lastval, setLastval] = useState()
    const [paidrowperpage, setPaidRowPerPage] = useState(10)
    const [paidlastval, setPaidLastval] = useState()

    const [filter, setFilter] = useState(false)
    const [filterval, setFilterVal] = useState("")



    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const datas = await VendorInvoice(org, 1, 10)
            // console.log(datas)
            setTotalVendor(datas.data)
            setRowPerPage(10)
            const total = datas.TotalData[0]["Totaldata"]

            setLastval(Math.ceil(total / 10))

            const paidinvoices = await PaidInvoice(org, 1, 10)
            console.log(paidinvoices)
            setPaidInvoice(paidinvoices.data)
            setPaidRowPerPage(10)
            const totalval = paidinvoices.TotalData[0]["Totaldata"]
            setPaidLastval(Math.ceil(totalval / 10))
        }
        fetchdata()
    }, [])

    const filterdata = async (e) => {
        e.preventDefault();
        const org = localStorage.getItem('Database')

        const values = document.getElementById('filterSearch').value
        if (values) {
            setFilterVal(values)
            const datas = await FilterInvoice(org, values, 1, 10)
            setTotalVendor(datas.data)
            setRowPerPage(10)
            const total = datas.TotalData[0]["Totaldata"]
            setLastval(Math.ceil(total / 10))

            setPaidInvoice(datas.PaidInv)
            setPaidRowPerPage(10)
            const totalval = datas.Paiddata[0]["Totaldata"]
            setPaidLastval(Math.ceil(totalval / 10))

            setFilter(true)
        } else {
            return
        }


    }

    const handlePageClick = async (data) => {
        if (filter == true) {
            const datas = await FilterInvoice(localStorage.getItem('Database'), filterval, data.selected + 1, 10)
            setTotalVendor(datas.data)

            const total = datas.TotalData[0]["Totaldata"]
            setLastval(Math.ceil(total / 10))
        } else {

            const datas = await VendorInvoice(localStorage.getItem('Database'), data.selected + 1, rowperpage)
            setTotalVendor(datas.data)
        }

    }

    const handlePageClickpaid = async (data) => {
        if (filter == true) {
            const datas = await FilterInvoice(localStorage.getItem('Database'), filterval, data.selected + 1, 10)
            console.log(datas)
            setPaidInvoice(datas.PaidInv)
            const totalval = datas.Paiddata[0]["Totaldata"]
            setPaidLastval(Math.ceil(totalval / 10))
        } else {
            const datas = await PaidInvoice(localStorage.getItem('Database'), data.selected + 1, paidrowperpage)
            setPaidInvoice(datas.data)
        }
    }
    const handleChange = () => {
        document.getElementById('display').style.display = "flex"
    }


    return (
        <>
            <div className='search-field '>
                <form className='d-flex h-100'>
                    <input className="form-control" type="search" id="filterSearch" placeholder="Search ..." />
                    <button type="button" className="btn btn-voilet" onClick={filterdata} style={{ width: '120px' }}>Apply <BsFilterLeft /></button>
                </form>
            </div>

            <div className="outstanding_details position-relative justify-content-around">
                <div className='Outstanding_details_table_div bg-white rounded shadow1-silver'>
                    <p className=' text-white text-white rounded'>Vendor Outstanding - Detailed</p>
                    <div className="Outstanding_details_table rounded px-3">
                        <table className="table" >
                            <thead>
                                <tr className='text-danger'>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Invoice_no</th>
                                    <th scope="col">Reference No</th>
                                    <th scope="col">Invoice Amt</th>
                                    <th scope="col">Reading</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    TotalVendor.length == 0 ?
                                        <tr className='text-center'><td colSpan='4'>Table have no Data </td></tr>
                                        :
                                        TotalVendor.map((elements, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{elements.vendor}</td>
                                                    <td>{elements.invoice_no}</td>
                                                    <td>{elements.reference_no}</td>
                                                    <td>{elements.invoice_amt}</td>
                                                    <td>{elements.printer_counter}</td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table>

                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<IoMdArrowDropright style={{ fontSize: "24px" }} />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={lastval}
                        previousLabel={<IoMdArrowDropleft style={{ fontSize: "24px" }} />}
                        renderOnZeroPageCount={null}
                        containerClassName={'outstanding-pagination bg-white px-3 pagination justify-content-end mx-3'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />

                </div>
                <div className='Outstanding_details_table_div bg-white rounded shadow1-silver '>
                    <p className=' text-white text-white rounded' style={{ background: " linear-gradient(45deg, rgb(55, 55, 55), rgb(121, 118, 113))" }}>Paid Invoices - Detailed</p>
                    <div className="Outstanding_details_table px-3 rounded" >
                        <table className="table ">
                            <thead>
                                <tr >
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Invoice_no</th>
                                    <th scope="col">Reference No</th>
                                    <th scope="col">Invoice Amt</th>
                                    {/* <th scope="col">Reading</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    PaidInvoicess.length == 0 ?
                                        <tr className='text-center'><td colSpan='4'>Table have no data</td></tr>
                                        :
                                        PaidInvoicess.map((elements, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{elements.vendor}</td>
                                                    <td>{elements.invoice_no}</td>
                                                    <td>{elements.reference_no}</td>
                                                    <td>{elements.invoice_amt}</td>
                                                    {/* <td>{elements.printer_counter}</td> */}

                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </table>

                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<IoMdArrowDropright style={{ fontSize: "24px" }} />}
                        onPageChange={handlePageClickpaid}
                        pageRangeDisplayed={3}
                        pageCount={paidlastval}
                        previousLabel={<IoMdArrowDropleft style={{ fontSize: "24px" }} />}
                        renderOnZeroPageCount={null}
                        containerClassName={'outstanding-pagination bg-white px-3 pagination justify-content-end mx-3'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />
                </div>

            </div>

        </>
    )
}

export default Outstatndingdetails;