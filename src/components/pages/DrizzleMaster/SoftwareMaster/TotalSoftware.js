import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalSoftwareapi, DeleteSoftwaresapi } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import customStyles from '../../../TableCustomtyle'

function TotalSoftware() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Software',
            selector: 'software_name',
            sortable: true,
        },
        {
            name: 'Software Description',
            selector: 'software_description',
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select className='border-0' style={{ background: "rgb(222, 222, 222)"}} onChange={async (e) => {
                    const status = e.target.value;
                    const org = localStorage.getItem('Database')

                     await DeleteSoftwaresapi(org,status, row.sno)
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
                <a title='Edit Software' href="/EditSoftware">
                    <p onClick={() => localStorage.setItem('softwaresno', `${row.sno}`)} >
                        <AiFillEdit className='ft-20'  style={{ marginBottom: "-13px" }} />
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const tabledata = await TotalSoftwareapi(org);
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
                        <div className='main_container'>
                                <div className='main-inner-container  d-flex justify-content-between pt-4 pb-3' >
                                    <h4><span className='page-type-head1'>Software <MdOutlineKeyboardArrowRight /></span> <span  className='page-type-head2'>Total Software</span> </h4>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddSoftware' }} >Add Software <b>+</b></button>
                                </div>
                                <div className='bg-white pb-1 pt-2 px-2 shadow1-silver rounded15'>
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
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}
export default TotalSoftware;