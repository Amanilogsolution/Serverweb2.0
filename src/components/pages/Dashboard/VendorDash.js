import React from 'react'
import './VendorDash.css'

export default function VendorDash() {
  return (
    <div className='VendorDash'>
      <div className='VendorDash1'>
         <div className='table1'>
            <p className='bg-dark text-white px-4'>Vendor Resources Details</p>
         </div>
         <div className='table2'>
         <p className='bg-dark text-white px-4'>Vendor Contract Details</p>
         </div>
      </div>
      <div className='VendorDash2'>
        <div className='VendorDash2_card'>
          <p>Reference Numbers</p>
          <h3 style={{ marginTop: "-12px" }}>164</h3>
        </div>

        <div className='select_div'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Vendor ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='select_div'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Vendor ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='select_div'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Vendor ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className='select_div'>
          <select class="form-select" aria-label="Default select example">
            <option selected>Vendor ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>


      </div>


      <div className='VendorDash3'>
        <div className='VendorDash3_card'>
          <p>Recurring</p>
          <h3 style={{ marginTop: "-12px" }}>54</h3>
        </div>

        <div className='VendorDash3_card'>
          <p>Annual</p>
          <h3 style={{ marginTop: "-12px" }}>4</h3>
        </div>

        <div className='VendorDash3_card'>
          <p>Quarterly</p>
          <h3 style={{ marginTop: "-12px" }}>98</h3>
        </div>

        <div className='VendorDash3_card'>
          <p>Monthly</p>
          <h3 style={{ marginTop: "-12px" }}>12</h3>
        </div>
        <div className='VendorDash3_card'>
          <p>Invoice Received</p>
          <h3 style={{ marginTop: "-12px" }}>723</h3>
        </div>
      </div>
    </div>
  )
}
