import React, { useState, useEffect } from 'react'
import { CSVLink } from "react-csv";
import 'react-data-table-component-extensions/dist/index.css';
import { PendingRecurringInvoiceApi } from '../../../../../api'
import './PendingRecurringInvoice.css'
import { BiExport } from 'react-icons/bi'
import { SiMicrosoftexcel } from 'react-icons/si'
import { GrDocumentCsv } from 'react-icons/gr'
import { ExcelConvertData } from '../../VendorDash/Excel'

const PendingRecurringInvoice = () => {
  const [pendingRecurring, setPendingRecurring] = useState([])

  useEffect(() => {
    const fetchdata = async () => {
      const get_recurring = await PendingRecurringInvoiceApi(localStorage.getItem('Database'))
      console.log(get_recurring)
      setPendingRecurring(get_recurring)
    }
    fetchdata()
  }, [])


  const exportExcel = async () => {
    const datasss = ExcelConvertData(pendingRecurring)
  }

  return (
    <>
      <div className='pending_recurring_container d-flex justify-content-between'>
        <div className='pending_recurring-table-div bg-white rounded shadow1-silver '>
          <div className='pending_recurring_title mx-auto d-flex justify-content-between  text-white rounded px-4 py-2 mb-0'>
            <span>Pending Recurring Invoice </span> <span><BiExport className='dropdown' data-toggle="dropdown" style={{ fontSize: "25px" }} />
              <div className="dropdown-menu dropdown-menu px-0">
                <ul className="list-group list-group-flush px-0 mx-0">
                  <li className="list-group-item pr-0" onClick={exportExcel}><SiMicrosoftexcel className='ft-20' /> Excel</li>
                  <li className="list-group-item">
                    <CSVLink
                      data={pendingRecurring}
                      filename="PendingRecurringInvoice">
                      <GrDocumentCsv className='ft-20' />
                    </CSVLink> CSV</li>
                </ul>
              </div>
            </span>
          </div>
          <div className='pending_recurring_table  w-100 position-relative overflow-auto'>
            <table className="table px-1 ">
              <thead className="position-sticky top-0 bg-white">
                <tr>
                  <th scope="col">Vendor</th>
                  <th scope="col">Invoice Date</th>
                  <th scope="col">Reference No</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {
                  pendingRecurring.length === 0 ?
                    <tr className='text-center'><td colSpan='4'>No Data</td></tr> :
                    pendingRecurring.map((elements, index) => {
                      return (
                        <tr key={index}>
                          <td>{elements.vendor}</td>
                          <td>{elements.invoice_generation_date}</td>
                          <td>{elements.reference_no}</td>
                          <td>{elements.rate_per_month}</td>
                          <td>{elements.billling_freq}</td>
                        </tr>
                      )
                    })
                }
              </tbody>
            </table>

          </div>
        </div>
        <div className='pending_recurring-cards bg-white rounded shadow1-silver justify-content-between px-3 py-3'>
          <div className='pending-recurring-card mx-auto text-center rounded px-2 cursor-pointer pt-2'>
            <h6>Pending Recurring Invoice</h6>
            <h4 className='text-primary'>50</h4>
          </div>
          <div className='pending-recurring-card mx-auto text-center rounded px-2 cursor-pointer pt-2'>
            <h6>Monthly</h6>
            <h4 className='text-primary'>12</h4>
          </div>
          <div className='pending-recurring-card mx-auto text-center rounded px-2 cursor-pointer pt-2'>
            <h6>Quaterly</h6>
            <h4 className='text-primary'>5</h4>
          </div>
          <div className='pending-recurring-card mx-auto text-center rounded px-2 cursor-pointer pt-2'>
            <h6>6 Months</h6>
            <h4 className='text-primary'>10</h4>
          </div>
          <div className='pending-recurring-card mx-auto text-center rounded px-2 cursor-pointer pt-2'>
            <h6>Yearly</h6>
            <h4 className='text-primary'>3</h4>
          </div>
        </div>
      </div>
    </>

  )
}

export default PendingRecurringInvoice;