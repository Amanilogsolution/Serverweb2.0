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
            <AiFillEdit className='ft-20' style={{ marginBottom: "-13px" }} />
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
      <div className='oustanding-details '>
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

        <div className='company-outstatnding border border-dark mt-2' >
          <p className='bg-dark text-white text-center mb-0'>ILOG- IT OUTSTANDING</p>

          <div style={{ maxHeight: "34vh", overflow: "auto" }}>
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
              </tbody>
              <tfoot className='bg-white position-sticky bottom-0'>
                <tr >
                  <th>Total</th>
                  <th>₹{outstandingAmount}</th>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
        <div className='nextoutstanding-detail cursor-pointer rounded text-light  mt-2 d-flex justify-content-center align-items-center' onClick={() => { setStep(5) }}>
          Click for Outstanding Details
        </div>
      </div>
      <div className='outstanding-table border border-dark position-relative'>
        <p className='bg-dark text-white d-flex justify-content-between h5 py-1 px-2'>ILOG- IT OUTSTANDING as on DATE
        </p>
        <div className=''>
          <div title="Export" className="d-flex justify-content-end mr-2" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }} style={{ width: "5%", float: "right" }}>
            <BiExport style={{ fontSize: "25px", marginRight: "20px" }} />
          </div>
          <div className='bg-white position-absolute rounded' style={{ right: "2%", top: "15%", width: "5%", boxShadow: "3px 3px 10px black" }}>
            {
              toogle ?
                <div className="d-flex flex-column justify-content-center align-items-center" >
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

          <table className="table table-striped mb-2">
            <thead>
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Invoice_no</th>
                <th scope="col">Reference No</th>
                <th scope="col">Invoice Amt</th>
              </tr>
            </thead>
            <tbody >
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
          <div className="d-flex justify-content-end position-absolute bottom-0 w-100 bg-white" >
            <div className="d-flex justify-content-center align-items-center mx-2 ">
              <label>Rows Per Page</label>
              <select onChange={handleChange}>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>

              </select>
            </div>

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
    </section>
  )
}

export default Outstanding;
