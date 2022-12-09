import React, { useState, useEffect } from 'react'
import './Outstanding.css'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { AiFillEdit } from 'react-icons/ai';

const Outstanding = ({ setStep }) => {
  const [data, setdata] = useState([])

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
          <p onClick={() => sessionStorage.setItem('newassetsno', `${row.sno}`)} >
            <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
          </p></a>
      ]
    }

  ];

  const tableData = {
    columns,
    data
  };
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
        <div className='nextoutstanding-detail curser-pointer  text-light  mt-1 h-25 d-flex justify-content-center align-items-center' style={{cursor:"pointer"}} onClick={() => { setStep(5) }}>
          Click for Outstanding Details
        </div>
      </div>
      <div className='outstanding-table border border-dark'>
        <p className='bg-dark text-white d-flex justify-content-between h5 py-1 px-2'>ILOG- IT OUTSTANDING as on DATE
          {/* <a onClick={() => { setStep(5) }} className='curser-pointer'>Outstanding details</a> */}
        </p>
        <div>
          <DataTableExtensions {...tableData}>
            <DataTable
              noHeader
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
            />
          </DataTableExtensions>
        </div>
      </div>
    </section>
  )
}

export default Outstanding;
