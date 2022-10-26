import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetServiceGroup, UpdateServiceGroup } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditServiceGroup() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetServiceGroup(sessionStorage.getItem('servicegroupsno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleUpdateServiceGroupType = async (e) => {
        e.preventDefault();
        const service_group_type = document.getElementById('service_group_type').value;
        const remark = document.getElementById('remark').value;
        const UserId = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('servicegroupsno')

        if (!service_group_type) {
            alert('Please fill the Mandatory Field!')
        }
        else {
            // sno,service_group_type,service_group_description,user_id
            const result = await UpdateServiceGroup(sno, service_group_type, remark, UserId);

            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('servicegroupsno');
                window.location.href = './TotalServiceGroup'
            }
            else {
                alert("Server Error");
            }
        }

    }

    const handleChangeGroup = (e) => {
        setData({ ...data, service_group_type: e.target.value })
    }

    const handleChangeRemark = (e) => {
        setData({ ...data, service_group_description: e.target.value })
    }


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Service Action Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Service Action Type</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('servicegroupsno'); window.location.href = '/TotalServiceGroup' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" style={{ width: "50%" }}>
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                            <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor='service_group_id'> Service Group id </label>
                                        <input type="text" className="form-control" id='service_group_id' value={data.service_group_id} disabled />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <label htmlFor='service_group_type'> Service Group Type </label>
                                        <input type="text" className="form-control" id='service_group_type' value={data.service_group_type} onChange={handleChangeGroup} />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="form-group col-md" >
                                        <label htmlFor='remark'>Description</label>
                                        <textarea type="text" className="form-control" id='remark' value={data.service_group_description} onChange={handleChangeRemark} />
                                    </div>
                                </div>

                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleUpdateServiceGroupType}>Update</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditServiceGroup;