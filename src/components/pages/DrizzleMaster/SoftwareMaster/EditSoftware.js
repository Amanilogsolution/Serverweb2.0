import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetSoftwareapi, UpdateSoftwareapi } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'
// import './Editemployee.css'

function EditSoftware() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetSoftwareapi(sessionStorage.getItem('softwaresno'))
            console.log(result)
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        const software = document.getElementById('software').value;
        const software_desc = document.getElementById('software_desc').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('softwaresno')

        const result = await UpdateSoftwareapi(sno,software,software_desc,username);

        if (result === 'Updated') {
            alert('Data Updated')
            sessionStorage.removeItem('softwaresno');
            window.location.href = './TotalSoftware'
        }
        else {
            alert("Server Error");
        }

    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, software_name: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, software_description: e.target.value })
    }
   
 


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Series</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Edit Asset Type</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('assettypesno'); window.location.href = '/TotalAssetType'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                    <div className="card card-div" style={{width:"50%"}}>
                       
                        <article className="card-body" >
                            <form className='px-3'  autoComplete='off'>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor='typeid'> Asset Status ID </label>
                                        <input type="text" className="form-control" id='software_id' disabled value={data.software_id} />
                                    </div>
                                    <div className="form-group col-md-6" >
                                        <label htmlFor='seriesid'> Asset Status </label>
                                        <input type="text" className="form-control" id='software' value={data.software_name} onChange={handlechangeassetstatus} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='taskid'>Description</label>
                                        <textarea type="text" className="form-control" id='software_desc' value={data.software_description} onChange={handlechangeassetstatusdesc} />
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

export default EditSoftware;