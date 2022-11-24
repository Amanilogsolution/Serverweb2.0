import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalVendSubCateapi, DeleteVendSubCateStatus } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

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
            background: 'rgb(105,59,233)',
            color: 'white',
        },
    },
    cells: {
        style: {
            fontSize: '14px',
            background: 'rgb(242,242,242)',
            borderBottom: "1px solid silver"
        },
    },
};


function TotalVendSubCate() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Vendor Category',
            selector: 'vendor_category',
            sortable: true,
        },
        {
            name: 'Vendor Sub_category',
            selector: 'vendor_sub_category',
            sortable: true,
        },
        {
            name: 'Vendor Sub Category Description',
            selector: 'vendor_sub_category_description',
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select style={{ background: "rgb(222, 222, 222)", border: 'none', borderRadius: "2px" }} onChange={async (e) => {
                    const status = e.target.value;
                    const result = await DeleteVendSubCateStatus(status, row.sno)
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
                <a title='Edit Vendor Sub Category' href="/EditVendorSubCategory">
                    <p onClick={() => sessionStorage.setItem('vendsubcatesno', `${row.sno}`)} >
                        <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalVendSubCateapi();
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
                                    <h3><span style={{ color: "rgb(123,108,200)" }}>Vendor Sub Category</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Total Vendor Sub Category</span> </h3>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddVendorSubCategory' }} >Add Vendor Sub Category<MdAdd /></button>
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
export default TotalVendSubCate;