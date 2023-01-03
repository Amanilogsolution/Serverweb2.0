import React, { useEffect, useState } from 'react'
import './Recurring.css'
import ReactPaginate from 'react-paginate';
import { Recurring_Vendor, Recurring_Frequency } from '../../../../api/index'
import { CSVLink } from "react-csv";
import {BiExport} from 'react-icons/bi'
import {SiMicrosoftexcel} from 'react-icons/si'
import {GrDocumentCsv} from 'react-icons/gr'
import {ExcelConvertData} from './Excel'



export default function Recurring() {
  const [Recurringdata, setRecurringData] = useState([])
  const [TotalRecurring, setTotalRecurring] = useState()
  const [lastval, setLastval] = useState()
  const [VendorFreq, setVendorFreq] = useState({})
  const [rowperpage, setRowPerPage] = useState(10)
  const [toogle, setToogle] = useState(false)




  const exportExcel = async () => {
    const datasss = ExcelConvertData(Recurringdata)
  }

  // const handlePrint= (e) =>{
  //   e.preventDefault()
  //   var backup = document.body.innerHTML;
  //   var divcontent = document.getElementById('pagination').innerHTML;
  //   document.body.innerHTML = divcontent;
  //   window.print();
  //   document.body.innerHTML = backup;
  //   window.location.reload()
  // }

  useEffect(() => {
    const fetch = async () => {
      const VendorFreq = await Recurring_Frequency(localStorage.getItem('Database'))
      setVendorFreq(VendorFreq)
      console.log(VendorFreq)
      const datas = await Recurring_Vendor(localStorage.getItem('Database'), 1, 10)
      setRecurringData(datas.data)
      setTotalRecurring(datas.TotalData[0].Totaldata)
      const total = datas.TotalData[0]["Totaldata"]
      setRowPerPage(10)
      console.log(Math.ceil(total / 10))
      setLastval(Math.ceil(total / 10))

    }
    fetch();
  }, [])

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setRowPerPage(e.target.value)

    const datas = await Recurring_Vendor(localStorage.getItem('Database'), 1, e.target.value)
    setRecurringData(datas.data)
    const total = datas.TotalData[0]["Totaldata"]

    setLastval(Math.ceil(total / e.target.value))



  }
  const handlePageClick = async (data) => {
    const datas = await Recurring_Vendor(localStorage.getItem('Database'), data.selected + 1, rowperpage)
    setRecurringData(datas.data)

    console.log(data.selected + 1)
  }
  return (
    <div className='Recurring_div d-flex mx-2 pt-2'>

      <div className='recurring_table position-relative' >
        <p className='bg-dark text-white px-4 mx-1'>Vendor Recurring Details</p>
        <div className='recurring_table_inside'>
          <div title="Export" className="d-flex justify-content-end mr-2 cursor-pointer  px-3" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }} style={{width:'5%',float:'right'}}>
            <BiExport style={{ fontSize: "25px" }} />
          </div>
          {
            toogle ?
              <div className="d-flex flex-column justify-content-center align-items-center bg-light position-absolute rounded py-1" style={{ right: "2%",top:'12%', width: "5%", boxShadow: "3px 3px 10px black" }}>
                <a href="#"
                  onClick={exportExcel}
                ><SiMicrosoftexcel className='ft-20' /></a>
                <CSVLink
                  data={Recurringdata}
                  filename="RecurringData"
                > <GrDocumentCsv className='ft-20' />
                </CSVLink>
              </div>
              : ''
          }

       
          <div id="pagination">
          <table class="table table-striped" >
            <thead>
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Location</th>
                <th scope="col">Major Category</th>
                <th scope="col">Sub Category</th>
                <th scope="col">Account no</th>
                <th scope="col">Reference No</th>
                <th scope="col">Help Desk no</th>
                <th scope="col">Billing Frequency</th>
              </tr>
            </thead>
            <tbody>
              {
                Recurringdata.map((elements) => {
                  return (
                    <tr>
                      <td>{elements.vendor}</td>
                      <td>{elements.location}</td>
                      <td>{elements.major_category}</td>
                      <td>{elements.sub_category}</td>
                      <td>{elements.customer_account_no}</td>
                      <td>{elements.reference_no}</td>
                      <td>{elements.help_desk_no}</td>
                      <td>{elements.billling_freq}</td>
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
          </div>
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
                pageRangeDisplayed={5}
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
      <div className='recurring_cards px-2'>
        <div className='recurring_card text-center text-light pt-2 rounded mb-2'>
          <p className='mb-0'>Recurring</p>
          <h3>{TotalRecurring}</h3>
        </div>

        <div className='recurring_card text-center text-light pt-2 rounded mb-2'>
          <p className='mb-0'>Annual</p>
          <h3>{VendorFreq.Annualy}</h3>
        </div>

        <div className='recurring_card text-center text-light pt-2 rounded mb-2'>
          <p className='mb-0'>Quarterly</p>
          <h3>{VendorFreq.Quaterly}</h3>
        </div>

        <div className='recurring_card text-center text-light pt-2 rounded mb-2'>
          <p className='mb-0'>Monthly</p>
          <h3>{VendorFreq.Monthly}</h3>
        </div>
        <div className='recurring_card text-center text-light pt-2 rounded mb-2'>
          <p className='mb-0'>Invoice Received</p>
          <h3>{VendorFreq.InvoiceReceived}</h3>
        </div>
      </div>
    </div>
  )
}
