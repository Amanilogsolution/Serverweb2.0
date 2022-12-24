import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalAssetTypeapi, DeleteAssetTypeapi } from '../../../../api'
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import customStyles from '../../../TableCustomtyle'

// const customStyles = {
//     title: {
//       style: {
//         fontColor: 'red',
//         fontWeight: '900',
//       }
//     },
//     rows: {
//       style: {
//         minHeight: '35px'
//       }
//     },
//     headCells: {
//       style: {
//         fontSize: '14px',
//         background:'rgb(105,59,233)',
//         color:'white',
//       },
//     },
//     cells: {
//       style: {
//         fontSize: '14px',
//         // fontWeight:'600',
//         background:'rgb(242,242,242)	',
//         borderBottom:"1px solid silver"
//       },
//     },
//   };
  

function TotalAssetType() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            name: 'Asset Type',
            selector: 'asset_type',
            sortable: true,
        },
        {
            name: 'Asset Type Description',
            selector: 'asset_description',
            sortable: true,
        },
       
     
      
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select className='border-0' style={{background:"rgb(222, 222, 222)"}} onChange={async (e) => {
                    const status = e.target.value;
                    const org = localStorage.getItem('Database')

                     await DeleteAssetTypeapi(org,status, row.sno)
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
                <a title='Edit Series' href="/EditAssetType">
                    <p onClick={() => localStorage.setItem('assettypesno', `${row.sno}`)} >
                    <AiFillEdit className='ft-20' style={{marginBottom:"-13px"}}/>
                    </p></a>
            ]
        }

    ];

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const tabledata = await TotalAssetTypeapi(org);
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
                            <h2><span className='page-type-head1'>Asset Type <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Total Asset Type</span> </h2>
                            <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddAssetType' }} >Add Asset Type <MdAdd /></button>
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
export default TotalAssetType;