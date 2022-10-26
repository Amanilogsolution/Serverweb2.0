import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { InsertContractType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddContractType() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const contract_type_id = '';
        const contract_type = document.getElementById('contract_type').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');

        if (!contract_type) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await InsertContractType(contract_type_id, contract_type, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                window.location.href = './TotalContractType'
            }
            else {
                alert("Server Error");
            }
        }
    }

    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>ContractType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add ContractType</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalContractType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div">
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="form-group">
                                    <label htmlFor='contract_type'>Contract Type</label>
                                    <input type="text" className="form-control" id='contract_type' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Add</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default AddContractType;