import React, { useState, useEffect } from 'react'
import './Outstanding.css'
import { CSVLink } from "react-csv";
import { BiExport } from 'react-icons/bi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentCsv } from 'react-icons/gr'
import { ExcelConvertData } from '../VendorDash/Excel'
import ReactPaginate from 'react-paginate';
import { BiRupee } from 'react-icons/bi';

import 'react-data-table-component-extensions/dist/index.css';
// import { AiFillEdit } from 'react-icons/ai';
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

  // const columns = [
  //   {
  //     name: 'Asset Name',
  //     selector: 'asset_name',
  //     sortable: true,
  //   },

  //   {
  //     name: "Actions",
  //     sortable: false,
  //     selector: 'null',
  //     cell: (row) => [
  //       <a title='Edit Asset' href="/EditAsset">
  //         <p onClick={() => localStorage.setItem('newassetsno', `${row.sno}`)} >
  //           <AiFillEdit className='ft-20' style={{ marginBottom: "-13px" }} />
  //         </p></a>
  //     ]
  //   }

  // ];

  // const tableData = {
  //   columns,
  //   data
  // };
  return (
    <section className='outstanding-container d-flex justify-content-around mt-2' >
      <div className='oustanding-details '>
        <div className='outstanding-top-detail-div d-flex justify-content-between text-center'>
          <div className='outstanding-totalinv bg-white ' style={{ boxShadow: '1px 1px 10px silver', borderRadius: '5px', padding: "15px" }}>

            <h2 style={{ fontWeight: "500", color: "#30305f" }}>{invoices.TotalVendor}</h2>
            <p style={{ marginTop: "-5px", color: "#6a6a6a" }}>Invoices</p>

          </div>
          <div className='outstanding-totalamt bg-white ' style={{ boxShadow: '1px 1px 10px silver', borderRadius: '5px', padding: "20px" }}>

            <h4 style={{ fontWeight: "400", color: "#30305f" }}><BiRupee style={{ fontSize: "30px", marginTop: "-3px", color: "#0f3807" }} />{outstandingAmount}</h4>
            <p style={{ color: "#6a6a6a" }}>Outstanding Amount</p>

          </div>
        </div>



        {/* //==================================================================================================== */}

        <div className='company-outstatnding bg-white' style={{ boxShadow: '1px 1px 10px silver', borderRadius: '5px', position: "relative", marginTop: "38px" }} >
          <p style={{ color: "white", padding: "10px 20px", fontSize: "13px", position: "absolute", width: "70%", marginTop: "-20px", background: "linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))", left: "3%", borderRadius: "5px" }}>ILOG- IT OUTSTANDING</p>

          <div style={{overflow:"auto", height: "46vh", background: "white", borderRadius: "5px", boxShadow: "1px 1px 5px silver", padding: "1px 20px 0 20px" }}>


            <table className="table " style={{marginTop:"20px"}}>
              <thead >
                <tr>
                  <th>Vendor</th>
                  <th>Amt</th>
                </tr>
              </thead>
              <tbody>
                {
                  outstandingDatas.map(element => (
                    <tr>
                      <td>{element.vendor}</td>
                      <th>{element.total}</th>
                    </tr>
                  ))
                }
              </tbody>
              <tfoot>
                <tr >
                  <th>Total</th>
                  <th>₹{outstandingAmount}</th>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>

        {/* //==================================================================================================== */}



        <div className='nextoutstanding-detail cursor-pointer rounded text-light  mt-3 d-flex justify-content-center align-items-center' onClick={() => { setStep(5) }}>
          Click for Outstanding Details
        </div>
      </div>
      <div className='outstanding-table bg-white position-relative mt-3' style={{ boxShadow: '1px 1px 10px silver', borderRadius: '5px' }}>
        <div className=' d-flex justify-content-between' style={{color: "white", padding: "16px 20px", fontSize: "14px", width: "80%", marginTop: "-20px", background: "linear-gradient(45deg, rgb(68, 97, 240), rgb(37, 63, 196))", marginLeft:"20px", borderRadius: "5px",height:"55px"}}>
          <span> ILOG- IT OUTSTANDING AS ON DATE</span> <span title="Export" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }}> <BiExport style={{ fontSize: "25px", marginRight: "20px" }} /></span>
        </div>
        <div className='bg-white position-absolute rounded ' style={{ right: "2%", top: "15%", width: "5%", boxShadow: "3px 3px 10px black" }}>
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
        <div className='outstanding-table-inner overflow-auto' style={{padding:"0 20px"}}>
          <table className="table" >
            <thead className="position-sticky top-0 bg-white">
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Invoice_no</th>
                <th scope="col">Reference No</th>
                <th scope="col">Invoice Amt</th>
              </tr>
            </thead>
            <tbody>
              {
                TotalVendor.length === 0 ?
                  <tr className='text-center'><td colSpan='4'>No Data</td></tr> :
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
        <div className="d-flex justify-content-end  bottom-0 w-100 " >
          <div className="d-flex justify-content-center">
            <label htmlFor='rowpage' className='mt-2'>Rows Per Page </label> &nbsp;
            <select onChange={handleChange} id='rowpage' className=' mt-1' style={{ height: '30px' }}>
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
            containerClassName={'pagination justify-content-end mx-4'}
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
    </section>
  )
}

export default Outstanding;
