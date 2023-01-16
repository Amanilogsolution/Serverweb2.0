import React, { useEffect, useState } from 'react'
import './VendorDash.css'
import { Vendor_Reference_no, TotalVendorContract, ActiveVendorCode, ActiveBillingFreq, ActiveLocation, ActiveVendorCategory } from '../../../../api/index'
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import { BiExport } from 'react-icons/bi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentCsv } from 'react-icons/gr'
import { ExcelConvertData } from './Excel'


export default function VendorDash({ setStep }) {
  const [ReferabceNo, setReferanceNo] = useState()
  const [TotalVendor, setTotalVendor] = useState([])
  const [rowperpage, setRowPerPage] = useState(10)
  const [lastval, setLastval] = useState()
  const [toogle, setToogle] = useState(false)
  const [vendorlist, setVendorlist] = useState([])
  const [billingfreqlist, setBillingfreqlist] = useState([])
  const [locationlist, setLocationlist] = useState([])
  const [vendorcatlist, setVendorcatlist] = useState([])





  const exportExcel = async () => {
    const datasss = ExcelConvertData(TotalVendor)
  }

  useEffect(() => {
    const fetchdata = async () => {
      const org = localStorage.getItem('Database')

      const ReferanceNo = await Vendor_Reference_no(localStorage.getItem('Database'))
      console.log(ReferanceNo.data)
      setReferanceNo(ReferanceNo.data)
      const datas = await TotalVendorContract(localStorage.getItem('Database'), 1, 10)
      setTotalVendor(datas.data)
      console.log(datas)
      const total = datas.TotalData[0]["Totaldata"]
      setRowPerPage(10)
      setLastval(Math.ceil(total / 10))

      const vendorall = await ActiveVendorCode(localStorage.getItem('Database'));
      setVendorlist(vendorall)

      const billing = await ActiveBillingFreq(localStorage.getItem('Database'));
      setBillingfreqlist(billing)

      const tablelocation = await ActiveLocation(org);
      setLocationlist(tablelocation)

      const vendorCategory = await ActiveVendorCategory(org)
      setVendorcatlist(vendorCategory)

    }
    fetchdata()

  }, [])

  const handlePageClick = async (data) => {
    const datas = await TotalVendorContract(localStorage.getItem('Database'), data.selected + 1, rowperpage)
    setTotalVendor(datas.data)

    console.log(data.selected + 1)
  }

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setRowPerPage(e.target.value)
    const datas = await TotalVendorContract(localStorage.getItem('Database'), 1, e.target.value)
    setTotalVendor(datas.data)
    const total = datas.TotalData[0]["Totaldata"]
    setLastval(Math.ceil(total / e.target.value))

  }

  return (
    <div className='VendorDash mt-4'>
      <div className='VendorDash1 bg-light rounded position-relative px-3 ' style={{ boxShadow: '1px 1px 10px silver' }}>
        <div className='tableheading position-absolute d-flex justify-content-between pt-3' >
          <p className='text-white px-4 mx-1 '>Vendor Contract Details</p>
          <div title="Export" className="d-flex justify-content-end mr-2 cursor-pointer px-3" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }} style={{ width: "5%", float: "right" }}>
            <BiExport className='text-white' style={{ fontSize: "25px"}} />
          </div>
          {
            toogle ?
              <div className="d-flex flex-column justify-content-center align-items-center  bg-light position-absolute rounded py-1" style={{ right: "2%", top: '80%', width: "5%", boxShadow: "3px 3px 10px gray", zIndex: "1" }} >
                <a href="#"
                  onClick={exportExcel}
                ><SiMicrosoftexcel className='ft-20' /></a>
                <CSVLink
                  data={TotalVendor}
                  filename="RecurringData"
                > <GrDocumentCsv className='ft-20' />
                </CSVLink>
              </div>
              : ''
          }
        </div>
        <div className='table1 position-relative mt-5' style={{minHeight:'80%'}}>
          <table className="table" >
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
                TotalVendor.length===0?
                <tr className='text-center'>
                  <td colSpan='8'>Table have not Data</td>
                </tr>
                :
                TotalVendor.map((elements) => {
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
        <div className="d-flex justify-content-end ">
          <div className="d-flex justify-content-center  mx-2 pt-1">
            <label htmlFor='pageno' className='mt-1'>Rows Per Page </label> &nbsp;
            <select onChange={handleChange} id='pageno' style={{height:'32px'}}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={lastval}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName={'pagination '}
              pageClassName={'page-item  '}
              pageLinkClassName={'page-link '}
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
      <div className='VendorDash2 rounded'>
        <div className='VendorDash2_card text-center rounded text-light mb-1 pt-3'>
          <p>Reference Numbers</p>
          <h3 style={{ marginTop: "-12px" }}>{ReferabceNo}</h3>
        </div>

        <div className='select_div'>
          <select className="form-select" aria-label="Default select example">
            <option hidden selected>Vendor Code</option>
            {
              vendorlist.map((item, index) =>
                <option key={index} value={[`${item.vendor_name},sno${item.sno}`]}>{item.vendor_name}</option>)
            }
          </select>
        </div>
        <div className='select_div'>
          <select className="form-select" aria-label="Default select example">
            <option hidden selected>Category</option>
            {
              vendorcatlist.map((item, index) =>
                <option key={index} value={item.vendor_category}>{item.vendor_category}</option>)
            }
          </select>
        </div>
        <div className='select_div'>
          <select className="form-select" aria-label="Default select example">
            <option hidden selected>Location</option>
            {
              locationlist.map((item, index) =>
                <option key={index}>{item.location_name}</option>
              )
            }
          </select>
        </div>
        <div className='select_div'>
          <select className="form-select" aria-label="Default select example">
            <option hidden selected>Frequency</option>
            {
              billingfreqlist.map((item, index) =>
                <option key={index} value={item.billing_freq}>{item.billing_freq}</option>)
            }
          </select>
        </div>
        <div className='select_div cursor-pointer text-light border-0' id="recurring" onClick={() => { setStep(6) }}>
          <h6 >Click for Recurring Details</h6>
        </div>
      </div>
    </div>
  )
}
