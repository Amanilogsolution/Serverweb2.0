import './Outstandingdetail.css'
import { BiSearchAlt2 } from 'react-icons/bi'
import { VendorInvoice, PaidInvoice,FilterInvoice } from '../../../../api/index'
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

    const[filter,setFilter] = useState(false)
    const[filterval,setFilterVal] = useState("")



    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const datas = await VendorInvoice(org, 1, 10)
            setTotalVendor(datas.data)
            setRowPerPage(10)
            const total = datas.TotalData[0]["Totaldata"]

            setLastval(Math.ceil(total / 10))

            const paidinvoices = await PaidInvoice(org, 1, 10)
            setPaidInvoice(paidinvoices.data)
            setPaidRowPerPage(10)
            const totalval = paidinvoices.TotalData[0]["Totaldata"]
            setPaidLastval(Math.ceil(totalval / 10))


        }
        fetchdata()
    }, [])

    const filterdata = async(e) =>{
        e.preventDefault();
        const org = localStorage.getItem('Database')

        const values = document.getElementById('filterSearch').value
        console.log(values)
        if(values){
        setFilterVal(values)
        const datas = await FilterInvoice(org,values, 1, 10)
        console.log(datas)
        setTotalVendor(datas.data)
        setRowPerPage(10)
        const total = datas.TotalData[0]["Totaldata"]
        setLastval(Math.ceil(total / 10))

        setPaidInvoice(datas.PaidInv)
        setPaidRowPerPage(10)
        const totalval = datas.Paiddata[0]["Totaldata"]
        setPaidLastval(Math.ceil(totalval / 10))

        setFilter(true)
        }else{
            return
        }


    }

    const handlePageClick = async (data) => {
        if (filter == true) {
            const datas = await FilterInvoice(localStorage.getItem('Database'),filterval, data.selected + 1, 10)
            console.log(datas)
            setTotalVendor(datas.data)
         
            const total = datas.TotalData[0]["Totaldata"]
            setLastval(Math.ceil(total / 10))
        }else{

            const datas = await VendorInvoice(localStorage.getItem('Database'), data.selected + 1, rowperpage)
        setTotalVendor(datas.data)
    }

    }
    
    const handlePageClickpaid = async (data) => {
        if (filter == true) {
            const datas = await FilterInvoice(localStorage.getItem('Database'),filterval, data.selected + 1, 10)
            console.log(datas)
            setPaidInvoice(datas.PaidInv)
            const totalval = datas.Paiddata[0]["Totaldata"]
            setPaidLastval(Math.ceil(totalval / 10))
        }else{
        const datas = await PaidInvoice(localStorage.getItem('Database'), data.selected + 1, paidrowperpage)
        setPaidInvoice(datas.data)
        }
    }
    const handleChange = () => {
        document.getElementById('display').style.display = "flex"

    }


    return (
        <>
            {/* <div className="Outstanding_container_details d-flex justify-content-between mx-1"> */}
            {/* <div className="card1 flex-fill ">
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
                </div> */}

            <button style={{ height: "45px" }} type="button" className="btn btn-danger mx-4" data-toggle="modal" data-target="#exampleModalCenter">
                <h5>Filter <BsFilterLeft className='cursor-pointer mx-1 mt-2' style={{ fontSize: "25px" }} /></h5>
            </button>


            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Filter <BsFilterLeft style={{ fontSize: "38px", color: "#4089df" }} /></h5>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex mb-2">
                                {/* <input type='radio' id='vendorinvoice' className="form-check-input" value='1' name='inputGroupSelect01' defaultChecked />
                                <label Htmlfor='vendorinvoice' > Vendor Invoice</label>&nbsp;&nbsp;
                                <input type='radio' id='vendorinvoice' className="form-check-input" value='2' name='inputGroupSelect01' />
                                <label Htmlfor='paymentdetail'> Payment Detail</label>&nbsp;&nbsp;
                                <input type='radio' id='billingaccountnumber' className="form-check-input" value='3' name='inputGroupSelect01' />
                                <label Htmlfor='billingaccountnumber'> Billing Account Number</label> */}

                                {/* <select className="custom-select" id="inputGroupSelect01" onChange={handleChange}>
                                            <option hidden >Select...</option>
                                            <option value="1">Vendor Invoice</option>
                                            <option value="2">Payment Detail</option>
                                            <option value="3">Billing Account Number</option>
                                        </select> */}
                            </div>
                            <div id="display" style={{display:"hidden"}} className="d-flex justify-content-center my-2 mt-4">
                                <input className=" form-control w-50" type="search" id="filterSearch" placeholder="Search ..." />
                                {/* <BiSearchAlt2 className='cursor-pointer mx-1 mt-1 text-primary' style={{ fontSize: "33px" }} /> */}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={filterdata}>Apply <BsFilterLeft /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}
            <div className="outstanding_details position-relative justify-content-around">
                <div className='Outstanding_details_table_div'>
                        <p>Vendor Outstanding - Detailed</p>
                    <div className="Outstanding_details_table">
                        <table className="table" >
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
                                    TotalVendor.length == 0 ?
                                        <tr className='text-center'><td colSpan='4'>Table have no Data </td></tr>
                                        :
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

                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<IoMdArrowDropright style={{ fontSize: "24px" }} />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={lastval}
                        previousLabel={<IoMdArrowDropleft style={{ fontSize: "24px" }} />}
                        renderOnZeroPageCount={null}
                        containerClassName={'pagination justify-content-end mx-3'}
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
                <div className='Outstanding_details_table_div'>
                        <p style={{background:" linear-gradient(45deg, rgb(55, 55, 55), rgb(121, 118, 113))"}}>Paid Invoices - Detailed</p>
                    <div className="Outstanding_details_table" >
                        <table className="table ">
                            <thead>
                                <tr >
                                    <th scope="col">Vendor</th>
                                    <th scope="col">Invoice_no</th>
                                    <th scope="col">Reference No</th>
                                    <th scope="col">Invoice Amt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    PaidInvoicess.length==0?
                                    <tr className='text-center'><td colSpan='4'>Table have no data</td></tr>
                                    :
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

                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<IoMdArrowDropright style={{ fontSize: "24px" }} />}
                        onPageChange={handlePageClickpaid}
                        pageRangeDisplayed={3}
                        pageCount={paidlastval}
                        previousLabel={<IoMdArrowDropleft style={{ fontSize: "24px" }} />}
                        renderOnZeroPageCount={null}
                        containerClassName={'pagination justify-content-end mx-3'}
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