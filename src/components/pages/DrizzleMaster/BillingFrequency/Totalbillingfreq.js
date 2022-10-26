import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalBillingFreqapi, DeleteBillingFreqapi } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'

const customStyles = {
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
  

function TotalBillingFreq() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Billing Frequency Id',
            selector: row => row.billing_freq_id,
            sortable: true,
        },
        {
            name: 'Billing Frequency',
            selector: row => row.billing_freq,
            sortable: true,
        },
        {
            name: 'Billing Frequency Description',
            selector: row => row.billing_freq_description,
            sortable: true,
        },
       
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select style={{background:"rgb(222, 222, 222)",border:'none',borderRadius:"2px"}} onChange={async (e) => {
                    const status = e.target.value;
                    const result = await DeleteBillingFreqapi(status, row.sno)
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
            selector: row => row.null,
            cell: (row) => [
                <a title='Edit BillingFreq' href="/EditBillingFreq">
                    <p onClick={() => sessionStorage.setItem('billingfreqsno', `${row.sno}`)} >
                    <AiFillEdit style={{fontSize:"20px",marginBottom:"-13px"}}/>
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalBillingFreqapi();
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
            <Sidebar>
                <div className='main_container' >
                    <div className='m-auto' style={{ overflow: "hidden", width: "97%" }}>
                        <div className=' d-flex justify-content-between mx-5 pt-4 pb-3' >
                            <h2><span style={{ color: "rgb(123,108,200)" }}>Billing Frequency</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Total Billing Frequency</span> </h2>
                            <button className='btn btn-sm btn-voilet' onClick={e => { e.preventDefault(); window.location.href = './AddBillingFreq' }} >Add Billing Frequency <MdAdd /></button>
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
        </>
    )
}
export default TotalBillingFreq;