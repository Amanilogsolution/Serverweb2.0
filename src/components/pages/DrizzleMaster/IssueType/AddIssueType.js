import Sidebar from '../../../Sidebar/Sidebar';
import React from 'react';
import { InsertIssueType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function AddIssueType() {

    const handleaddinsert = async (e) => {
        e.preventDefault();
        const issue_type_id='';
        const issue_type = document.getElementById('issue_type').value;
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserName');

        if (!issue_type) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await InsertIssueType(issue_type_id, issue_type, remark, username);
            if (result === 'Added') {
                alert('Data Added')
                window.location.href = './TotalIssueType'
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
                        <h2><span style={{ color: "rgb(123,108,200)" }}>IssueType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add IssueType</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => {window.location.href = '/TotalIssueType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div">
                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='issue_type'>Issue Type</label>
                                            <input type="text" className="form-control" id='issue_type' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor='remark'>Remarks (Optional)</label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3"/>
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

export default AddIssueType;