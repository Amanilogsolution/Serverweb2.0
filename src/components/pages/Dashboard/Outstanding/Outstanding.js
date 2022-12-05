import React from 'react'
import './Outstanding.css'


const Outstanding = ({setStep}) => {
  return (
    <section className='outstanding-container d-flex justify-content-around mt-2'>
      <div className='oustanding-details '>
        <div className='outstanding-top-detail-div d-flex justify-content-between text-center'>
          <div className='outstanding-totalinv border border-dark'>
            <p className='outstanding-totalhead text-white'>Invoices</p>
            <p className='outstanding-value mb-2'> 55</p>
          </div>
          <div className='outstanding-totalamt border border-dark'>
            <p className='outstanding-totalhead text-white'>Outstanding Amount</p>
            <p className='outstanding-value mb-2'>₹ 2,33,92,232</p>
          </div>
        </div>
        <div className='company-outstatnding mt-1 border border-dark'>
          <p className='company-outstatnding-head bg-dark text-white  text-center mb-0'>ILOG- IT OUTSTANDING</p>
          <table className="table text-center table-striped" >
            <thead className="thead-dark">
              <tr>
                <th scope="col">Vedor</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr>
                <th scope="row">1</th>
                <td>10000</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>20030</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>32399</td>
              </tr>

            </tbody>
            <thead >
              <tr>
                <th scope="col">Total</th>
                <th scope="col">₹ 62,429</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className='outstanding-table border border-dark'>
        <p className='bg-dark text-white d-flex justify-content-between h5 py-1 px-2'>ILOG- IT OUTSTANDING as on DATE
          <a onClick={()=>{setStep(5)}} className='curser-pointer'>Outstanding details</a>
        </p>
      </div>
    </section>
  )
}

export default Outstanding;
