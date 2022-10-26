import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetServiceActionType, UpdateServiceActionType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditServiceActionType() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetServiceActionType(sessionStorage.getItem('serviceactiontypesno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleUpdateServiceActionType = async (e) => {
        e.preventDefault();
        const service_action_type = document.getElementById('service_action_type').value;
        const remark = document.getElementById('remark').value;
        const UserId = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('serviceactiontypesno')

        if (!service_action_type) {
            alert('Please fill the Mandatory Field!')
        }
        else {
            const result = await UpdateServiceActionType(sno, service_action_type, remark, UserId);

            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('serviceactiontypesno');
                window.location.href = './TotalServiceActionType'
            }
            else {
                alert("Server Error");
            }
        }

    }

    const handleChangeServiceAction = (e) => {
        setData({ ...data, service_action_type: e.target.value })
    }

    const handleChangeRemark = (e) => {
        setData({ ...data, service_action_type_description: e.target.value })
    }


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h3><span style={{ color: "rgb(123,108,200)" }}>Service Action Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Edit Service Action Type</span> </h3>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('serviceactiontypesno'); window.location.href = '/TotalServiceActionType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor='service_action_type'> Service Action Type </label>
                                        <input type="text" className="form-control" id='service_action_type' value={data.service_action_type} onChange={handleChangeServiceAction} />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='remark'>Description</label>
                                        <textarea type="text" className="form-control" id='remark' rows='3' value={data.service_action_type_description} onChange={handleChangeRemark} />
                                    </div>
                                </div>

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleUpdateServiceActionType}>Update</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditServiceActionType;