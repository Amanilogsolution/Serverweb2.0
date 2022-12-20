import React, { useState, useEffect } from 'react';
import 'react-data-table-component-extensions/dist/index.css';
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { TotalNewAssets,DeleteNewAssets } from '../../../../api'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';


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
            // fontWeight:'600',
            background: 'rgb(242,242,242)',
            borderBottom: "1px solid silver"
        },
    },
};

const columns = [
    {
        name: 'Asset Name',
        selector: 'asset_name',
        sortable: true,
    },
    {
        name: 'asset_tag',
        selector: 'asset_tag',
        sortable: true,
    },
    {
        name: 'asset_type',
        selector: 'asset_type',
        sortable: true,
    },
    {
        name: 'asset_assign',
        selector: 'asset_assign',
        sortable: true,
    },
    {
        name: 'Asset Status',
        selector: 'asset_status',
        sortable: true,
    },
  
    // {
    //     name: 'Status',
    //     sortable: true,
    //     cell: (row) => [
    //         <select style={{ background: "rgb(222, 222, 222)", border: 'none', borderRadius: "2px" }} 
    //         onChange={async (e) => {
        // const org = localStorage.getItem('Database')

    //             const status = e.target.value;
    //             await DeleteNewAssets(org,status, row.sno)
    //             window.location.reload()
    //         }}
    //         >
    //             <option hidden value={row.status}>{row.status}</option>
    //             <option value='Active'>Active</option>
    //             <option value='Deactive'>Deactive</option>
    //         </select>
    //     ],
    // },
    {
        name: "Actions",
        sortable: false,
        selector: 'null',
        cell: (row) => [
            <a title='Edit Asset' href="/EditAsset">
                <p onClick={() => localStorage.setItem('newassetsno', `${row.sno}`)} >
                    <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
                </p></a>
        ]
    }

];



function TotalNewAssetes() {
    const [loading, setLoading] = useState(false)

    const [data, setdata] = useState([])


    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const datas = await TotalNewAssets(org)
            setdata(datas)
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
                                    <h3><span style={{ color: "rgb(123,108,200)" }}> Asset</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Total  Asset</span> </h3>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddNewAssets' }} >Add Asset<MdAdd /></button>
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
export default TotalNewAssetes;