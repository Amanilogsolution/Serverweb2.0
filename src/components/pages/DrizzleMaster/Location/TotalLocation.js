import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalLocation, UpdateLocationStatus } from '../../../../api'
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
        name: 'Location Code',
        selector: row => row.location_code,
        sortable: true,
    },
    {
        name: 'Location Address Line1',
        selector: row => row.location_address_line1,
        sortable: true,
    },

    {
        name: 'Location Name',
        selector: row => row.location_name,
        sortable: true,
    },
    {
        name: 'location_id',
        selector: row => row.location_id,
        sortable: true,
    },
    {
        name: 'location_state',
        selector: row => row.location_state,
        sortable: true,
    },
    {
        name: 'location_gst',
        selector: row => row.location_gst,
        sortable: true,
    },
    {
        name: 'contact_person',
        selector: row => row.contact_person,
        sortable: true,
    },
    {
        name: 'Status',
        sortable: true,
        cell: (row) => [
            <select style={{ background: "rgb(222, 222, 222)", border: 'none', borderRadius: "2px" }} onChange={async (e) => {
                const status = e.target.value;
                await UpdateLocationStatus(status, row.sno)
                window.location.reload()
            }}>
                <option hidden value={row.Status}>{row.Status}</option>
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
            <a title='Edit Series' href="/EditLocation">
                <p onClick={() => sessionStorage.setItem('locationsno', `${row.sno}`)} >
                    <AiFillEdit style={{ fontSize: "20px", marginBottom: "-13px" }} />
                </p></a>
        ]
    }

];

function TotalLocations() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalLocation();
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
            <Sidebar>
                <div className='main_container' >
                    <div className='m-auto' style={{ overflow: "hidden", width: "97%" }}>
                        <div className=' d-flex justify-content-between mx-5 pt-4 pb-3' >
                            <h2><span style={{ color: "rgb(123,108,200)" }}>Locations</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Total Locations</span> </h2>
                            <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddLocation' }} >Add Location <b><MdAdd /></b></button>
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
export default TotalLocations;