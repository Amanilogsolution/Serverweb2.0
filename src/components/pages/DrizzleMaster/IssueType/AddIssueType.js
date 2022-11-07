import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { InsertIssueType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function AddIssueType() {
    const [loading, setLoading] = useState(true)

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)

        const issue_type = document.getElementById('issue_type').value;
        const issue_type_id = issue_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');

        if (!issue_type) {
            alert('Please Enter Mandatory Field')
            setLoading(true)
        }
        else {
            const result = await InsertIssueType(issue_type_id, issue_type, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                window.location.href = './TotalIssueType'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>IssueType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add IssueType</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalIssueType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div">
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='issue_type'>Issue Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='issue_type' />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add IssueType</button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default AddIssueType;