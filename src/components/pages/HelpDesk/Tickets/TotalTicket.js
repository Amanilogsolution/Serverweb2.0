import React,{ useState, useEffect } from 'react'
import 'react-data-table-component-extensions/dist/index.css';
import Sidebar from '../../../Sidebar/Sidebar';
import { AiFillEdit } from 'react-icons/ai';
import { MdAdd, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';


export default function TotalTicket() {

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true)
        }
        fetchdata();
    }, [])

  return (
    <>

{
                loading ?
                    <Sidebar>
                        <div className='main_container' >
                            <div className='m-auto' style={{ overflow: "hidden", width: "97%" }}>
                                <div className=' d-flex justify-content-between mx-5 pt-4 pb-3' >
                                    <h3><span style={{ color: "rgb(123,108,200)" }}>New Ticket</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Total New Assetes</span> </h3>
                                    <button className='btn btn-sm btn-voilet ' onClick={e => { e.preventDefault(); window.location.href = './AddNewTicket' }} >Add New Assetes<MdAdd /></button>
                                </div>
                                <div >
                               
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                 : <LoadingPage />
     }
    </>
  )
}
