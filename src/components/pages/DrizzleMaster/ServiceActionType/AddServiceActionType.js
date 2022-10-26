import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { InsertServiceActionType } from '../../../../api'
import {MdOutlineArrowForward,MdOutlineKeyboardArrowRight} from 'react-icons/md'


function AddVendorSubCategory() {

    const handleinsertdata = async (e) => {
        e.preventDefault();
        const service_action_id ='';
        const service_action=  document.getElementById('service_action').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');

        if (!service_action  ) {
            alert("All field are mandatory...")
        }
        else {
            // service_action_id,service_action_type,service_action__description,user_id
            console.log(service_action_id,service_action,remark,username)
            const result = await InsertServiceActionType(service_action_id,service_action,remark,username);
            if (result === 'Added') {
                alert('Data Added ')
                // window.location.href = './TotalServiceActionType'
            }
            else {
                alert("Server Error");
            }
        }

    }
    return (
        <>
            <Sidebar >
             <div className='main_container pb-2' >
                <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{color:"rgb(123,108,200)"}}>Service Action Type</span> <MdOutlineKeyboardArrowRight/><span style={{fontSize:"25px"}}>Add Service Action Type</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalServiceActionType'  }} >Back <MdOutlineArrowForward/></button>
                    </div>
                        <div className="card card-div" style={{width:"50%"}}>
                            <article className="card-body" >
                                <form className='px-3'  autoComplete='off'>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor='service_action'>Service Action </label>
                                            <input type="text" className="form-control" id='service_action' />
                                        </div>
                                       
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md" >
                                            <label htmlFor='remark'>Description</label>
                                            <textarea  className="form-control" id='remark' rows='3'/>
                                        </div>
                                       
                                    </div>
                                
                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleinsertdata}>Submit</button>
                                        <button type="reset" className="btn btn-secondary ml-2 mb-4 mt-3" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
            </Sidebar>
        </>
    )
}

export default AddVendorSubCategory;