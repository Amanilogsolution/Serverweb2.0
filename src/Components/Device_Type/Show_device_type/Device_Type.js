import './device_type.css'
import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalDevicetype } from '../../../api'

function Device_Type() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device Id',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Device Type',
            selector: 'device_type',
            sortable: true,
        },
        {
            name: 'Remark',
            selector: 'remark',
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                    <select onChange={e=>console.log(e.target.value)}>
                       <option hidden >{row.status}</option>
                        <option>Active</option>
                        <option>Deactive</option>
                    </select>



                // <input type='checkbox' checked={row.status == 'Active'} value={row.status} onClick={async (e) => {
                //     console.log(e.target.value)
                //     if (row.status == 'Active') {
                        // const checkvalue = 'Deactive'
                        // await DeleteCustomer(row.sno, checkvalue)
                        // window.location.href = 'TotalCustomer'

                    // }
                    // else {
                    //     const checkvalue = 'Active'
                        // await DeleteCustomer(row.sno, checkvalue)
                        // window.location.href = 'TotalCustomer'
                //     }
                // }} />
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: "null",
            cell: (row) => [
              <a title='View Document' href="EditCustomer">
                <button className="editbtn btn-success " onClick={() => sessionStorage.setItem('devicetypeSno', `${row.sno}`)} >Edit</button></a>
            ]
          }
      
    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalDevicetype();
            console.log(tabledata)
            setData(tabledata)
        }
        fetchdata();
    }, [])

    const tableData = {
        columns,
        data
    };
    return (
        <>

            <Navbar />
            <div className='deviceid-container' >
                <div className='deviceid-div' style={{ position: "relative" }}>
                    <button className='btn btn-success m-0 add-btn' onClick={e=>{e.preventDefault();window.location.href='./AddDevice-type'}}>Add Device</button>
                    <DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                    {/* <table className="table table-hover">
                        <thead>
                            <tr>

                                <th scope="col">Device Id</th>
                                <th scope="col">Device Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Mark</td>
                                <td>Otto</td>
                                <td><input type='checkbox' /></td>
                                <th><button className='btn btn-success'>Edit</button></th>
                            </tr>
                            <tr>

                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td><input type='checkbox' /></td>
                                <th><button className='btn btn-success'>Edit</button></th>
                            </tr>
                            <tr>
                                <td>Larry the Bird</td>
                                <td>Larry the Bird</td>
                                <td><input type='checkbox' /></td>
                                <th><button className='btn btn-success'>Edit</button></th>
                            </tr>
                        </tbody>
                    </table>

                    <nav aria-label="Page navigation example" style={{ width: "100%", position: "absolute", bottom: "0" }} >
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav> */}

                </div>

              
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default Device_Type;