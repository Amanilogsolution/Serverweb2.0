import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { AddSoftwareapi } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'


function AddSoftware() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        document.getElementById('subnitbtn').disabled = true;
        const software = document.getElementById('software').value;
        const software_id =software.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const software_desc = document.getElementById('software_desc').value;

        const username = sessionStorage.getItem('UserId');

        if ( !software ) {
            alert("All field are mandatory...")
            document.getElementById('subnitbtn').disabled = false;
        }
        else {
            const result = await AddSoftwareapi(software_id,software,software_desc,username);
            if (result === 'Added') {
                alert('Data Added ')
                window.location.href = './TotalSoftware'
            }
            else {
                alert("Server Error");
                document.getElementById('subnitbtn').disabled = false;
            }
        }
    }
    return (
        <>
            <Sidebar >
             <div className='main_container pb-2' >
                <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Software</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Add Software</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalSoftware'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                        <div className="card card-div" style={{width:"50%"}}>
                            <article className="card-body" >
                                <form className='px-3'  autoComplete='off'>
                                    <div className="row">
                                      
                                        <div className="col-md-6" >
                                            <label htmlFor='seriesid'>Software </label>
                                            <input type="text" className="form-control" id='software' />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md" >
                                            <label htmlFor='taskid'>Description (Optional)</label>
                                            <textarea type="email" className="form-control" id='software_desc' />
                                        </div>
                                       
                                    </div>
                                
                                    <div className="form-group mt-3" >
                                        <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleaddinsert}>Submit</button>
                                        <button type="reset" className="btn btn-secondary " style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
            </Sidebar>
        </>
    )
}

export default AddSoftware;