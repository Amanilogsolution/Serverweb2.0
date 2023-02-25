import React, { useEffect, useState } from 'react'
import './VendorDash.css'
import { Vendor_Reference_no, TotalVendorContract, ActiveVendorCode, ActiveBillingFreq, ActiveLocation, ActiveVendorCategory, FilterVendorContract } from '../../../../api/index'
import ReactPaginate from 'react-paginate';
import { CSVLink } from "react-csv";
import { BiExport } from 'react-icons/bi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentCsv } from 'react-icons/gr'
import { ExcelConvertData } from './Excel'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { VscReferences } from 'react-icons/vsc';


export default function VendorDash({ setStep }) {
  const [ReferabceNo, setReferanceNo] = useState()
  const [TotalVendor, setTotalVendor] = useState([])
  const [rowperpage, setRowPerPage] = useState(10)
  const [filter, setFilter] = useState(false)
  const [type, setType] = useState("")
  const [value, setValue] = useState("")

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
    if (filter == true) {
      console.log(type, value)
      const result = await FilterVendorContract(localStorage.getItem('Database'), type, value, data.selected + 1, rowperpage)
      setTotalVendor(result.data)

    } else {
      const datas = await TotalVendorContract(localStorage.getItem('Database'), data.selected + 1, rowperpage)
      setTotalVendor(datas.data)
    }

  }

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setRowPerPage(e.target.value)
    if (filter == true) {
      const result = await FilterVendorContract(localStorage.getItem('Database'), type, value, 1, e.target.value)
      setTotalVendor(result.data)
      const total = result.TotalData[0]["Totaldata"]
      setLastval(Math.ceil(total / e.target.value))
    } else {
      const datas = await TotalVendorContract(localStorage.getItem('Database'), 1, e.target.value)
      setTotalVendor(datas.data)
      const total = datas.TotalData[0]["Totaldata"]
      setLastval(Math.ceil(total / e.target.value))
    }

  }

  const handleChangeFilter = async (data, value) => {
    setType(data)
    setValue(value)
    console.log(data, value)
    const result = await FilterVendorContract(localStorage.getItem('Database'), data, value, 1, 10)
    console.log(result)
    setFilter(true)
    setTotalVendor(result.data)
    const total = result.TotalData[0]["Totaldata"]
    setLastval(Math.ceil(total / 10))

  }

  return (
    <div className='VendorDash mt-4'>
      <div className='VendorDash1 bg-light rounded position-relative px-3 shadow1-silver' >
        <div className='tableheading position-absolute d-flex justify-content-between pt-3' >
          <p className='text-white px-4 mx-1 '>Vendor Contract Details</p>
          <div title="Export" className="d-flex justify-content-end mr-2 cursor-pointer px-3" onClick={(e) => { e.preventDefault(); setToogle(value => !value) }} style={{ width: "5%", float: "right" }}>
            <BiExport className='text-white' style={{ fontSize: "25px" }} />
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
        <div className='table1 position-relative mt-5' style={{ minHeight: '80%' }}>
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
                TotalVendor.length === 0 ?
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
          <div className='rows_per_page mx-4'>
            <label htmlFor='pageno' >Rows / page </label> &nbsp;
            <select onChange={handleChange} id='pageno'>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel={<IoMdArrowDropright style={{ fontSize: "24px" }} />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={lastval}
              previousLabel={<IoMdArrowDropleft style={{ fontSize: "24px" }} />}
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
        <button className="nextoutstanding_AnimationBtn text-white btn px-4 py-3 position-relative" id="recurring" onClick={() => { setStep(6) }}>Recurring Details</button>

        {/* <div className='select_div cursor-pointer text-light border-0' id="recurring" onClick={() => { setStep(6) }}>
          <h6 >Click for Recurring Details</h6>
        </div> */}

        <div className='bg-white px-3 py-2 rounded mt-2' style={{ boxShadow: '1px 1px 3px silver' }}>
          <div className='select_div'>
            <select className="form-select" aria-label="Default select example" id="Vendname" onChange={() => { handleChangeFilter("vendor", document.getElementById('Vendname').value) }}>
              <option hidden value=''>Vendor Code</option>
              {
                vendorlist.map((item, index) =>
                  <option key={index} value={[`${item.vendor_name}`]}>{item.vendor_name}</option>)
              }
            </select>
          </div>
          <div className='select_div'>
            <select className="form-select" aria-label="Default select example" id="Category" onChange={() => { handleChangeFilter("major_category", document.getElementById('Category').value) }}>
              <option hidden value=''>Category</option>
              {
                vendorcatlist.map((item, index) =>
                  <option key={index} value={item.vendor_category}>{item.vendor_category}</option>)
              }
            </select>
          </div>
          <div className='select_div'>
            <select className="form-select" aria-label="Default select example" id="Location" onChange={() => { handleChangeFilter("location", document.getElementById('Location').value) }}>
              <option hidden value=''>Location</option>
              {
                locationlist.map((item, index) =>
                  <option key={index}>{item.location_name}</option>
                )
              }
            </select>
          </div>
          <div className='select_div'>
            <select className="form-select" aria-label="Default select example" id="frequency" onChange={() => { handleChangeFilter("billling_freq", document.getElementById('frequency').value) }}>
              <option hidden value=''>Frequency</option>
              {
                billingfreqlist.map((item, index) =>
                  <option key={index} value={item.billing_freq}>{item.billing_freq}</option>)
              }
            </select>
          </div>
          <div className='VendorDash2_card text-center rounded'>
            <div className='d-flex pt-3'>
              <VscReferences style={{ background: "linear-gradient(45deg, rgb(255, 107, 107), rgb(215, 62, 62))", fontSize: "53px", padding: "13px", color: "white", borderRadius: "5px", margin: "-40px 20px 0 20px" }} />
              <h1 style={{ marginTop: "-16px", fontWeight: "600", color: "#312f68" }}>{ReferabceNo}</h1>
            </div>
            <p className='ft-20' style={{ margin: "-2px -26px 0 0px", color: "#6a6a6a" }}>Reference Numbers</p>
          </div>
        </div>
      </div>
    </div>
  )
}
