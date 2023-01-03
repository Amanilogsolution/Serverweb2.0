import React, { useEffect, useState } from 'react'
import './VendorDash.css'
import {Vendor_Reference_no} from '../../../../api/index'

export default function VendorDash({setStep}) {
  const [ReferabceNo ,setReferanceNo] = useState()
  useEffect(()=>{
    const fetchdata = async() =>{
      const ReferanceNo = await Vendor_Reference_no(localStorage.getItem('Database'))
      console.log(ReferanceNo.data)
      setReferanceNo(ReferanceNo.data)
    }
    fetchdata()

  },[])

  return (
    <div className='VendorDash'>
      <div className='VendorDash1'>
        <p className='table_head bg-dark text-white px-4 mx-1'>Vendor Contract Details</p>
        <div className='table1'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Contact Name</th>
                <th scope="col">Contact No.</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='bg-dark text-white px-4 mx-1'>Vendor Resources Details</p>
        <div className='table2'>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Vendor</th>
                <th scope="col">Account No</th>
                <th scope="col">Location</th>
                <th scope="col">Bill to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              </tbody>
            </table>

        </div>
      </div>
      <div className='VendorDash2'>
        <div className='VendorDash2_card text-center rounded text-light mb-1 pt-3'>
          <p>Reference Numbers</p>
          <h3 style={{ marginTop: "-12px" }}>{ReferabceNo}</h3>
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
        <div className='select_div cursor-pointer text-light border-0' id="recurring" onClick={()=>{setStep(6)}}>
           <h7 >Click for Recurring Details</h7>
        </div>
      </div>
    </div>
  )
}
