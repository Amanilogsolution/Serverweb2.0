import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalContractTypeapi, UpdateContractTypeStatus } from '../../../../api'
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

const columns = [
    {
        name: 'Contract Type',
        selector: row => row.contract_type,
        sortable: true,
    },
    {
        name: 'Contract Description',
        selector: row => row.contract_description,
        sortable: true,
    },

    {
        name: 'Status',
        sortable: true,
        cell: (row) => [
            <select style={{ background: "rgb(222, 222, 222)", border: 'none', borderRadius: "2px" }} onChange={async (e) => {
                const status = e.target.value;
                await UpdateContractTypeStatus(status, row.sno)
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
            <a title='Edit ContractType' href="/EditContractType">
                <p onClick={() => sessionStorage.setItem('contracttypesno', `${row.sno}`)} >
                    <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
                </p></a>
        ]
    }

];

function TotalContractType() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const result = await TotalContractTypeapi();
            setData(result)
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
                                    <h2><span style={{ color: "rgb(123,108,200)" }}>ContractType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Total ContractType</span> </h2>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddContractType' }} >Add ContractType <b><MdAdd /></b></button>
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
export default TotalContractType;