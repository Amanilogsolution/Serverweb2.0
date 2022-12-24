import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalEmployees, DeleteEmployees } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import LoadingPage from '../../../LoadingPage/LoadingPage';

import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const customStyles = {
    // table: {
    //     style: {
    //         border:'2px solid red',
    //         minHeight:'55vh'
    //     }
    // },
    title: {
      style: {
        fontColor: 'red',
        fontWeight: '900',
      }
    },
    rows: {
      style: {
        minHeight: '35px'
      }
    },
    headCells: {
      style: {
        fontSize: '14px',
        background:'rgb(105,59,233)',
        color:'white',
      },
    },
    cells: {
      style: {
        fontSize: '14px',
        // fontWeight:'600',
        background:'rgb(242,242,242)	',
        borderBottom:"1px solid silver"
      },
    },
  };
  

function TotalEmployee() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Employee Name',
            selector: 'employee_name',
            sortable: true,
        },
        {
            name: 'Employee Number',
            selector: 'employee_number',
            sortable: true,
        },
        {
            name: 'Employee Email',
            selector: 'employee_email',
            sortable: true,
        },
        {
            name: 'Location',
            selector: 'location',
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select className='border-0' style={{background:"rgb(222, 222, 222)"}} onChange={async (e) => {
                    const status = e.target.value;
                    const org = localStorage.getItem('Database')
                     await DeleteEmployees(org,status, row.sno)
                    window.location.reload()
                }}>
                    <option hidden value={row.status}>{row.status}</option>
                    <option value='Active'>Active</option>
                    <option value='Deactive'>Deactive</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: 'null',
            cell: (row) => [
                <a title='Edit Series' href="/EditEmployee">
                    <p onClick={() => localStorage.setItem('employeesno', `${row.sno}`)} >
                    <AiFillEdit className='ft-20' style={{marginBottom:"-13px"}}/>
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const tabledata = await TotalEmployees(org);
            setData(tabledata)
            setLoading(true)

        }
        fetchdata();
    }, [])

    const tableData = {
        columns,
        data
    };

    return (
        <>
         {
                loading ?
            <Sidebar>
                <div className='main_container' >
                    <div className='m-auto' style={{ overflow: "hidden", width: "97%" }}>
                        <div className=' d-flex justify-content-between mx-5 pt-4 pb-3' >
                            <h2><span className='page-type-head1'>Employee <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Total Employee</span> </h2>
                            <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddEmployee' }} >Add Employee <MdAdd /></button>
                        </div>
                        <div >
                            <DataTableExtensions {...tableData}  >
                                <DataTable
                                    noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    customStyles={customStyles}
                                />
                            </DataTableExtensions>
                        </div>
                    </div>
                </div>
            </Sidebar>
            : <LoadingPage />
            }
        </>
    )
}
export default TotalEmployee;