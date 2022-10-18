import React, { useState, useEffect } from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { TotalDevicegroup, DeviceGroupStatus } from '../../../../api'
import { AiFillEdit } from 'react-icons/ai';

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
        fontSize: '15px',
        background:'rgb(105,59,233)',
        color:'white',
        paddingLeft:"5%"
      },
    },
    cells: {
      style: {
        fontSize: '15px',
        // fontWeight:'600',
        background:'rgb(242,242,242)	',
        borderBottom:"1px solid silver",
        paddingLeft:"5%"
      },
    },
  };

function Showdevicegroup() {
    const [data, setData] = useState([])
    const columns = [
        {
            name: 'Device Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Device Group',
            selector: row => row.device_group,
            sortable: true,
        },
        {
            name: 'Remark',
            selector: row => row.remark,
            sortable: true,
        },
        {
            name: 'Status',
            sortable: true,
            cell: (row) => [
                <select style={{background:"rgb(222, 222, 222)",border:'none',borderRadius:"2px"}} onChange={async (e) => {
                    const status = e.target.value;
                    await DeviceGroupStatus(status, row.sno)
                    window.location.reload()
                }}>
                    <option hidden value={row.status}>{row.status}</option>
                    <option value='Active'>Active</option>
                    <option value='Deavtive'>Deactive</option>
                </select>
            ],
        },
        {
            name: "Actions",
            sortable: false,
            selector: row => row.null,
            cell: (row) => [
                <a title='Edit Device Type' href="/EditDevicegroup">
                    <p onClick={() => sessionStorage.setItem('devicegroupSno', `${row.sno}`)} >
                    <AiFillEdit style={{fontSize:"20px",marginBottom:"-13px"}}/>
                    </p></a>
            ]
        }

    ];


    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await TotalDevicegroup();
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
                    <div className='innermain_container m-auto'>
                    <div className='d-flex justify-content-between pt-4'>
                        <h3>Total Device Group</h3>
                        <button className='btn btn-voilet btn-sm' onClick={e => { e.preventDefault(); window.location.href = './AddDevicegroup' }}>Add Group</button>
                    </div>
                    <DataTableExtensions {...tableData}>
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
        </>
    )
}
export default Showdevicegroup;