import React, { useState, useEffect } from 'react'
import './Outstanding.css'
import { CSVLink } from "react-csv";
import { BiExport } from 'react-icons/bi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { MdDownload } from 'react-icons/md'

import { GrDocumentCsv } from 'react-icons/gr'
import { ExcelConvertData } from '../VendorDash/Excel'
import ReactPaginate from 'react-paginate';
import { BiRupee } from 'react-icons/bi';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import 'react-data-table-component-extensions/dist/index.css';
import { Invoice_Outstanding, TotalOutstanding, VendorInvoice, Outstanding_Invoice_filter } from '../../../../api/index'

const Outstanding = ({ setStep }) => {
  const [invoices, setInvoice] = useState({})
  const [outstandingAmount, setOutstandingAmount] = useState()
  const [outstandingDatas, setOutstandingdatas] = useState([])
  const [TotalVendor, setTotalVendor] = useState([])
  const [rowperpage, setRowPerPage] = useState(10)
  const [lastval, setLastval] = useState()
  const [toogle, setToogle] = useState(false)
  const [data, setData] = useState([])

  const exportExcel = async () => {
    const datasss = ExcelConvertData(TotalVendor)
  }
  const handlePageClick = async (data) => {
    const datas = await VendorInvoice(localStorage.getItem('Database'), data.selected + 1, rowperpage)
    console.log(datas.data)
    setTotalVendor(datas.data)
  }

  useEffect(() => {
    const fetchdata = async () => {
      fetch()
      const org = localStorage.getItem('Database')
      const datas = await VendorInvoice(org, 1, 10)
      setTotalVendor(datas.data)

      const total = datas.TotalData[0]["Totaldata"]
      setRowPerPage(10)
      setLastval(Math.ceil(total / 10))
    }
    fetchdata()
  }, [])

  const handleChange = async (e) => {
    e.preventDefault();
    setRowPerPage(e.target.value)
    const datas = await TotalOutstanding(localStorage.getItem('Database'), 1, e.target.value)
    setTotalVendor(datas.data)
    const total = datas.TotalData[0]["Totaldata"]
    setLastval(Math.ceil(total / e.target.value))
  }

  const fetch = async () => {
    const Outstanding = await Invoice_Outstanding(localStorage.getItem('Database'))
    setOutstandingdatas(Outstanding.OutstandingVendor)
    setInvoice(Outstanding.Vendor)
    let money = Outstanding.OutstandingAmount.toLocaleString('en-IN');
    setOutstandingAmount(money)
  }

  const handleClick = async (type, value) => {
    const result = await Outstanding_Invoice_filter(localStorage.getItem('Database'), type, value)
    setData(result)
  }


  return (
    <section className='outstanding-container d-flex justify-content-around mt-2'>
      <div className='oustanding-details '>
        <div className='outstanding-top-detail-div d-flex justify-content-between text-center'>

          <div className='outstanding-totalinv bg-white rounded shadow1-silver pt-3'>
            <h2 className='mb-0' style={{ color: "#30305f" }}>{invoices.TotalVendor}</h2>
            <p className='text-secondary'>Outstanding Invoices</p>
          </div>

          <div className='outstanding-totalamt bg-white rounded shadow1-silver pt-3' >
            <h4 className='mb-0' style={{ color: "#30305f" }}><BiRupee style={{ fontSize: "30px", color: "#0f3807" }} />{outstandingAmount}</h4>
            <p className='text-secondary'>Outstanding Amount</p>
          </div>


          <button className='btn_for_smd' onClick={() => { setStep(5) }}>Outstanding Details</button>

        </div>
        <div className='d-flex upper_button'>
          <button className="top-upper-btn nextoutstanding_AnimationBtn text-white btn position-relative" onClick={() => { setStep(5) }}>
            BILL HISTORY</button>
          <button className="top-upper-btn nextoutstanding_AnimationBtn text-white btn position-relative" onClick={() => { setStep(7) }}>
            Pending Recurring Invoice</button>
        </div>

        {/* //==================================================================================================== */}
        <div className='company-outstatnding bg-white border  mt-4 rounded shadow1-silver'  >
          <div className='text-white px-4 py-2  rounded' style={{ width: "80%", marginLeft: 'auto', marginRight: 'auto', background: "linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))", marginTop: '-20px' }}>
            <small> OUTSTANDING</small>
          </div>
          <div className='outstanding-sub-table overflow-auto px-2 position-relative' >
            <table className="table">
              <thead className='position-sticky top-0 bg-white '>
                <tr>
                  <th className='pb-0 text-danger'>Vendor</th>
                  <th className='pb-0 text-danger'>No of Invoice</th>
                  <th className='pb-0 text-danger'>Amt</th>
                </tr>
              </thead>
              <tbody>
                {
                  outstandingDatas.map((element, index) => (
                    <tr key={index}>
                      <td>{element.vendor}</td>
                      <td>{element.countinvoice}</td>
                      <th>{element.total}</th>
                    </tr>
                  ))
                }
              </tbody>
              <tfoot className='position-sticky bottom-0 bg-white '>
                <tr >
                  <th className='text-danger' colSpan="2">Total</th>
                  <th className='text-danger'>₹{outstandingAmount}</th>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
        {/* //==================================================================================================== */}
        <div className='d-flex'>
          <button className="upper-btn nextoutstanding_AnimationBtn text-white btn px-4 py-2 position-relative" onClick={() => { setStep(5) }}>
            Bill History
          </button>
          <button className="upper-btn nextoutstanding_AnimationBtn text-white btn px-4 py-2 position-relative" onClick={() => { setStep(7) }}>
            Pending Recurring Invoice
          </button>
        </div>

      </div>
      <div className='outstanding-table bg-white position-relative mt-3 rounded shadow1-silver'>
        <div className=' d-flex justify-content-between text-white rounded px-4 py-2 mx-auto' style={{ width: "90%", marginTop: "-20px", background: "linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))", height: "55px" }}>
          <p className='ft-20'> Outstanding Invoice</p> <span title="Export" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }}> <BiExport style={{ fontSize: "25px" }} /></span>
        </div>
        <div className='bg-white position-absolute rounded ' style={{ right: "2%", top: "5%", width: "7%", zIndex: '1', boxShadow: "3px 3px 10px black" }}>
          {
            toogle ?
              <div className="d-flex flex-column justify-content-center align-items-center py-2" >
                <a href="#"
                  onClick={exportExcel}
                ><SiMicrosoftexcel className='ft-20' /></a>
                <CSVLink
                  data={TotalVendor}
                  filename="RecurringData">
                  <GrDocumentCsv className='ft-20' />
                </CSVLink>
              </div>
              : ''
          }
        </div>
        <div className='outstanding-table-inner overflow-auto px-3'>
          <table className="table" >
            <thead className="position-sticky top-0 bg-white">
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Invoice_no</th>
                <th scope="col">Invoice Date</th>
                <th scope="col">Download Invoice</th>
                <th scope="col">Reference No</th>
                <th scope="col">Invoice Amt</th>
              </tr>
            </thead>
            <tbody>
              {
                TotalVendor.length === 0 ?
                  <tr className='text-center'><td colSpan='4'>No Data</td></tr> :
                  TotalVendor.map((elements, index) => {
                    return (
                      <tr key={index}>
                        <td className="cursor-pointer text-primary" data-toggle="modal" data-target="#vendorModal" onClick={(e) => { e.preventDefault(); handleClick('Vendor', elements.vendor) }} >{elements.vendor}</td>
                        <td className="cursor-pointer text-primary" data-toggle="modal" data-target="#invoiceModal" onClick={(e) => { e.preventDefault(); handleClick('Invoice', elements.invoice_no) }}>{elements.invoice_no}</td>
                        <td>{elements.date}</td>
                        <td className="cursor-pointer " style={{ fontSize: '22px' }}>{
                          elements.uploadInvoice ?
                            <a href={elements.uploadInvoice} className='text-success' target="_blank" download ><MdDownload title='Download Invoice' /></a>
                            :
                            <MdDownload className='text-danger' title='Invoice Not Uploaded' />
                        }

                        </td>
                        <td className="cursor-pointer text-primary" data-toggle="modal" data-target="#ReferanceModal" onClick={(e) => { e.preventDefault(); handleClick('Referance', elements.reference_no) }}>{elements.reference_no}</td>
                        <td>{elements.invoice_amt}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
        <div className="pagination-main d-flex align-items-center w-100 " >
          <div className='rows_per_page'>
            <label >Rows / page </label> &nbsp;
            <select onChange={handleChange} id='rowpage'>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<IoMdArrowDropright style={{ fontSize: "24px" }} />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={lastval}
            previousLabel={<IoMdArrowDropleft style={{ fontSize: "24px" }} />}
            renderOnZeroPageCount={null}
            containerClassName={'pagination  mx-4'}
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

      {/* Vendor Modal */}

      <div className="modal fade" id="vendorModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Vendor Details</h5>
            </div>
            <div className="modal-body" style={{ maxHeight: "80vh", overflow: "auto" }}>
              <table className="table ">
                <thead>
                  <tr>
                    <th>Vendor Name</th>
                    <th>Company Email</th>
                    <th>Ticket Phone</th>
                    <th>Contact Person</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.length ?
                      data.map((value, index) => (
                        <tr key={index}>
                          <td>{value.vendor_name}</td>
                          <td>{value.company_email}</td>
                          <td>{value.company_phone}</td>
                          <td>{value.contact_person_name}</td>
                        </tr>
                      )
                      ) : ""
                  }
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}

      <div className="modal fade" id="invoiceModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Invoice Details</h5>
            </div>
            <div className="modal-body" style={{ maxHeight: "80vh", overflow: "auto" }}>
              <table className="table ">
                <thead>
                  <tr>
                    <th>Invoice Name</th>
                    <th>Account Number</th>
                    <th>Vendor</th>
                    <th>Referance Number</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((value, index) => (
                      <tr key={index}>
                        <td>{value.invoice_no}</td>
                        <td>{value.account_no}</td>
                        <td>{value.vendor}</td>
                        <td>{value.reference_no}</td>
                      </tr>
                    )
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Referance Modal */}

      <div className="modal fade" id="ReferanceModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Referance Details</h5>
            </div>
            <div className="modal-body" style={{ maxHeight: "80vh", overflow: "auto" }}>
              <table className="table ">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Referance Number</th>
                    <th>Location</th>
                    <th>Payee Name</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.map((value, index) => (
                      <tr key={index}>
                        <td>{value.company}</td>
                        <td>{value.reference_no}</td>
                        <td>{value.location}</td>
                        <td>{value.payee_name}</td>
                      </tr>
                    )
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Outstanding;
