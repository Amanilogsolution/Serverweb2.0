import './Outstandingdetail.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { VendorInvoice, PaidInvoice } from '../../../../api/index'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const Outstatndingdetails = () => {
    const [TotalVendor, setTotalVendor] = useState([])
    const [PaidInvoicess, setPaidInvoice] = useState([])
    const [rowperpage, setRowPerPage] = useState(10)
    const [lastval, setLastval] = useState()
    const [paidrowperpage, setPaidRowPerPage] = useState(10)
    const [paidlastval, setPaidLastval] = useState()





    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const datas = await VendorInvoice(org, 1, 10)
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

    const handlePageClick = async (data) => {
        const datas = await VendorInvoice(localStorage.getItem('Database'), data.selected + 1, rowperpage)
        setTotalVendor(datas.data)

        console.log(data.selected + 1)
    }
    const handlePageClickpaid = async (data) => {
        const datas = await PaidInvoice(localStorage.getItem('Database'), data.selected + 1, paidrowperpage)
        setPaidInvoice(datas.data)

        console.log(data.selected + 1)
    }

    
    return (
        <>
            <div className="Outstanding_container_details d-flex justify-content-between mt-2 mx-1">
                <div className="card1 flex-fill ">
                    <p className="bg-dark text-center text-white">Search Vendor Invoice</p>
                    <div className="d-flex justify-content-center">
                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 className='cursor-pointer mx-1 mt-2' style={{ fontSize: "25px" }} />
                    </div>
                </div>
                <div className="card1 flex-fill">
                    <p className="bg-dark text-center text-white">Search Payment Detail</p>
                    <div className="d-flex justify-content-center">
                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 className='cursor-pointer mx-1 mt-2' style={{ fontSize: "25px" }} />
                    </div>
                </div>
                <div className="card1 flex-fill">
                    <p className="bg-dark text-center text-white">Search Billing Account Number</p>
                    <div className="d-flex justify-content-center">
                        <input className=" form-control w-50" type="search" placeholder="Search ..." />
                        <BiSearchAlt2 className='cursor-pointer mx-1 mt-2' style={{ fontSize: "25px" }} />
                    </div>
                </div>

            </div>
            <div className="d-flex flex-column mt-2 px-2 " >
                <div className='border border-dark'>
                    <p className="bg-dark text-center text-white">Vendor Invoices - Detailed</p>
                    <div className="Outstanding_details_table " style={{ overflow: "auto", height: "20vh" }}>
                        <table className="table table-striped" >
                            <thead>
                                <tr className='text-danger'>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Invoice_no</th>
                                    <th scope="col">Reference No</th>
                                    <th scope="col">Invoice Amt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    TotalVendor.map((elements) => {
                                        return (
                                            <tr>
                                                <td>{elements.vendor}</td>
                                                <td>{elements.invoice_no}</td>
                                                <td>{elements.reference_no}</td>
                                                <td>{elements.invoice_amt}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next "
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            pageCount={lastval}
                            previousLabel=" previous"
                            renderOnZeroPageCount={null}
                            containerClassName={'pagination justify-content-end'}
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
                <div className='border border-dark'>
                    <p className="bg-dark text-center text-white ">Paid Invoices - Detailed</p>
                    <div className="Outstanding_details_table " style={{ overflow: "auto", height: "20vh" }}>
                        <table className="table table-striped " >
                            <thead>
                                <tr className='text-danger'>
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Invoice_no</th>
                                    <th scope="col">Reference No</th>
                                    <th scope="col">Invoice Amt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    PaidInvoicess.map((elements) => {
                                        return (
                                            <tr>
                                                <td>{elements.vendor}</td>
                                                <td>{elements.invoice_no}</td>
                                                <td>{elements.reference_no}</td>
                                                <td>{elements.invoice_amt}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next "
                            onPageChange={handlePageClickpaid}
                            pageRangeDisplayed={3}
                            pageCount={paidlastval}
                            previousLabel=" previous"
                            renderOnZeroPageCount={null}
                            containerClassName={'pagination justify-content-end'}
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

            </div>

        </>
    )
}

export default Outstatndingdetails;