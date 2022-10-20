import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetContractType, UpdateContractType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditContractType() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetContractType(sessionStorage.getItem('contracttypesno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleUpdateContractType = async (e) => {
        e.preventDefault();
        const contract_type = document.getElementById('contract_type').value;
        const remark = document.getElementById('remark').value;

        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('contracttypesno')

        if (!contract_type) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await UpdateContractType(sno, contract_type, remark, username);
            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('contracttypesno');
                window.location.href = './TotalContractType'
            }
            else {
                alert("Server Error");
            }
        }

    }


    const handlechangeContractType= (e) => {
        setData({ ...data, contract_type: e.target.value })
    }
    const handleChangeRemark = (e) => {
        setData({ ...data, contract_description: e.target.value })
    }


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>ContractType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit ContractType</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('contracttypesno'); window.location.href = '/TotalContractType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" >

                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="form-group">
                                    <label htmlFor='contract_type'>Contract Type</label>
                                    <input type="text" className="form-control" id='contract_type' value={data.contract_type} onChange={handlechangeContractType} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.contract_description} onChange={handleChangeRemark} />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleUpdateContractType}>Update</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditContractType;