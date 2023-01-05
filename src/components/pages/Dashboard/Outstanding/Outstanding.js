import React, { useState, useEffect } from 'react'
import './Outstanding.css'
import { CSVLink } from "react-csv";
import { BiExport } from 'react-icons/bi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentCsv } from 'react-icons/gr'
import { ExcelConvertData } from '../VendorDash/Excel'
import ReactPaginate from 'react-paginate';

import 'react-data-table-component-extensions/dist/index.css';
import { AiFillEdit } from 'react-icons/ai';
import { Invoice_Outstanding, TotalOutstanding } from '../../../../api/index'

const Outstanding = ({ setStep }) => {
  const [invoices, setInvoice] = useState({})
  const [outstandingAmount, setOutstandingAmount] = useState()
  const [outstandingDatas, setOutstandingdatas] = useState([])
  const [TotalVendor, setTotalVendor] = useState([])
  const [rowperpage, setRowPerPage] = useState(10)
  const [lastval, setLastval] = useState()
  const [toogle, setToogle] = useState(false)


  const exportExcel = async () => {
    const datasss = ExcelConvertData(TotalVendor)
  }
  const handlePageClick = async (data) => {
    const datas = await TotalOutstanding(localStorage.getItem('Database'), data.selected + 1, rowperpage)
    setTotalVendor(datas.data)

    console.log(data.selected + 1)
  }



  useEffect(() => {
    const fetchdata = async () => {
      fetch()


      const org = localStorage.getItem('Database')

      const datas = await TotalOutstanding(org, 1, 10)
      console.log(datas)
      setTotalVendor(datas.data)
      console.log(datas)
      const total = datas.TotalData[0]["Totaldata"]
      setRowPerPage(10)
      setLastval(Math.ceil(total / 10))
    }
    fetchdata()

  }, [])

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setRowPerPage(e.target.value)
    const datas = await TotalOutstanding(localStorage.getItem('Database'), 1, e.target.value)
    setTotalVendor(datas.data)
    const total = datas.TotalData[0]["Totaldata"]
    setLastval(Math.ceil(total / e.target.value))

  }

  const fetch = async () => {
    const Outstanding = await Invoice_Outstanding(localStorage.getItem('Database'))
    console.log(Outstanding.OutstandingVendor)
    setOutstandingdatas(Outstanding.OutstandingVendor)

    setInvoice(Outstanding.Vendor)
    let money = Outstanding.OutstandingAmount.toLocaleString('en-IN');
    console.log(money)
    setOutstandingAmount(money)
  }

  const columns = [
    {
      name: 'Asset Name',
      selector: 'asset_name',
      sortable: true,
    },

    {
      name: "Actions",
      sortable: false,
      selector: 'null',
      cell: (row) => [
        <a title='Edit Asset' href="/EditAsset">
          <p onClick={() => localStorage.setItem('newassetsno', `${row.sno}`)} >
            <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
          </p></a>
      ]
    }

  ];

  // const tableData = {
  //   columns,
  //   data
  // };
  return (
    <section className='outstanding-container d-flex justify-content-around mt-2'>
      <div className='oustanding-details border border-danger'>
        <div className='outstanding-top-detail-div d-flex justify-content-between text-center'>
          <div className='outstanding-totalinv border border-dark'>
            <p className='outstanding-totalhead text-white'>Invoices</p>
            <p className='outstanding-value mb-2'>{invoices.TotalVendor}</p>
          </div>
          <div className='outstanding-totalamt border border-dark'>
            <p className='outstanding-totalhead text-white'>Outstanding Amount</p>
            <p className='outstanding-value mb-2'>₹{outstandingAmount}</p>
          </div>
        </div>

        <div className='company-outstatnding border border-dark ' >
          <p className='bg-dark text-white text-center mt-2 mb-0'>ILOG- IT OUTSTANDING</p>
          {/* <div className="d-flex justify-content-between" style={{ background: "white", position: "fixed", width: "380px", maxHeight: "25px" }}>
            <p>Vedor</p>
            <p><b>Amount</b></p>

          </div> */}
          <div style={{ maxHeight: "32vh", overflow: "auto", border: '2px solid red' }}>
            <table className="table table-striped" >
              <thead className="bg-white position-sticky top-0" >
                <tr>
                  <th>Vendor</th>
                  <th>Amt</th>
                </tr>

              </thead>
              <tbody >
                {
                  outstandingDatas.map(element => (
                    <tr>
                      <td>{element.name}</td>
                      <th>{element.value}</th>
                    </tr>
                  ))
                }
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
                <tr>
                  <td>test</td>
                  <td>test</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th>₹{outstandingAmount}</th>
                </tr>
              </tfoot>
            </table>
          </div>
          {/* <div className="d-flex justify-content-between" style={{ border: "1px solid black", background: "white", position: "fixed", width: "383px", maxHeight: "25px" }}>
            <p>Total</p>
            <p><b>₹{outstandingAmount}</b></p>

          </div> */}
        </div>
        <div className='nextoutstanding-detail cursor-pointer rounded text-light  mt-2 h-25 d-flex justify-content-center align-items-center' onClick={() => { setStep(5) }}>
          Click for Outstanding Details
        </div>
      </div>
      <div className='outstanding-table border border-dark'>
        <p className='bg-dark text-white d-flex justify-content-between h5 py-1 px-2'>ILOG- IT OUTSTANDING as on DATE
        </p>
        <div>
          <div title="Export" className="d-flex justify-content-end mr-2" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }} style={{ width: "5%", float: "right", position: "relative" }}>
            <BiExport style={{ fontSize: "25px", marginRight: "20px" }} />
          </div>
          <div style={{ backgroundColor: "#FCFCFC", position: "absolute", right: "2%", top: "35%", width: "5%", boxShadow: "3px 3px 10px black", borderRadius: "5px" }}>
            {
              toogle ?
                <div className="d-flex flex-column justify-content-center align-items-center" >
                  <a href="#"
                    onClick={exportExcel}
                  ><SiMicrosoftexcel style={{ fontSize: "20px" }} /></a>
                  <CSVLink
                    data={TotalVendor}
                    filename="RecurringData"
                  > <GrDocumentCsv style={{ fontSize: "20px" }} />
                  </CSVLink>
                </div>
                : ''
            }
          </div>

          <table class="table table-striped">
            <thead>
              <tr>
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
          <div className="d-flex justify-content-end">
            <div className="d-flex justify-content-center align-items-center mx-2">
              <label>Rows Per Page</label>
              <select onChange={handleChange}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>

              </select>
            </div>
            <div>
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


        </div>
      </div>
    </section>
  )
}

export default Outstanding;
