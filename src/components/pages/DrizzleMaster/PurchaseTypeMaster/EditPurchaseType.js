import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetPurchaseTypeapi, UpdatePriorityapi } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'
// import './Editemployee.css'

function EditPurchaseType() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetPurchaseTypeapi(sessionStorage.getItem('purchasesno'))
            console.log(result)
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const purchase_type = document.getElementById('purchase_type').value;
        const purchase_type_desc = document.getElementById('purchase_type_desc').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('purchasesno')

        const result = await UpdatePriorityapi(sno,purchase_type,purchase_type_desc,username);

        if (result === 'Updated') {
            alert('Data Updated')
            sessionStorage.removeItem('purchasesno');
            window.location.href = './TotalPurchaseType'
        }
        else {
            alert("Server Error");
        }

    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, purchase_type: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, purchase_description: e.target.value })
    }
   
 


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Series</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Edit Purchase Type</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('assettypesno'); window.location.href = '/TotalPurchaseType'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                    <div className="card card-div" style={{width:"50%"}}>
                       
                        <article className="card-body" >
                            <form className='px-3'  autoComplete='off'>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor='typeid'>Purchae Type ID </label>
                                        <input type="text" className="form-control" id='purchase_id' disabled value={data.purchase_id} />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label htmlFor='seriesid'>Purchase Type </label>
                                        <input type="text" className="form-control" id='purchase_type' value={data.purchase_type} onChange={handlechangeassetstatus} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="text" className="form-control" id='purchase_type_desc' value={data.purchase_description} onChange={handlechangeassetstatusdesc} />
                                    </div>
                                   
                                </div>
                           
                             
                               

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
                                    {/* <button type="button" onClick={() => { sessionStorage.removeItem('seriessno'); window.location.href = '/Totalseries' }} className="btn btn-secondary mr-4 float-right mb-4 mt-3">Cancel</button> */}

                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditPurchaseType;