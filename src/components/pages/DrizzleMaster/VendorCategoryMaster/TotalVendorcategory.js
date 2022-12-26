import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalVendorCategoryapi, DeleteVendorCategoryapi } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import customStyles from '../../../TableCustomtyle'


function TotalVendorCategory() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Vendor Category',
            selector: 'vendor_category',
            sortable: true,
        },
        {
            name: 'Vendor Category Description',
            selector: 'vendor_category_description',
            sortable: true,
        },

        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select className='border-0' style={{ background: "rgb(222, 222, 222)"}} onChange={async (e) => {
                    const status = e.target.value;
                    const org = localStorage.getItem('Database')

                     await DeleteVendorCategoryapi(org,status, row.sno)
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
                <a title='Edit Vendor Category' href="/EditVendorcategory">
                    <p onClick={() => localStorage.setItem('vendorcatsno', `${row.sno}`)} >
                        <AiFillEdit className='ft-20' style={{  marginBottom: "-13px" }} />
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const tabledata = await TotalVendorCategoryapi(org);
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
                                    <h3><span className='page-type-head1'>Vendor Category <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Total Vendor Category</span> </h3>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddVendorCategory' }} >Add Vendor Category <MdAdd /></button>
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
export default TotalVendorCategory;