import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetIssueType, UpdateIssueType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'

function EditIssueType() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetIssueType(sessionStorage.getItem('IssueTypesno'))
            setData(result[0]);
        }
        fetchdata()
    }, [])

    const handleUpdateIssueType = async (e) => {
        e.preventDefault();
        const issue_type = document.getElementById('issue_type').value;
        const remark = document.getElementById('remark').value;

        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('IssueTypesno')

        if (!issue_type) {
            alert('Please Enter Mandatory Field')
        }
        else {
            const result = await UpdateIssueType(sno, issue_type, remark, username);
            if (result === 'Updated') {
                alert('Data Updated')
                sessionStorage.removeItem('IssueTypesno');
                window.location.href = './TotalIssueType'
            }
            else {
                alert("Server Error");
            }
        }

    }


    const handlechangeIssueType= (e) => {
        setData({ ...data, issue_type: e.target.value })
    }
    const handleChangeRemark = (e) => {
        setData({ ...data, issue_description: e.target.value })
    }


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2'>
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>IssueType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit IssueType</span> </h2>
                        <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('IssueTypesno'); window.location.href = '/TotalIssueType' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="card card-div" >

                        <article className="card-body" >
                            <form className='px-3' autoComplete='off'>
                                <div className="form-group">
                                    <label htmlFor='issue_type'>Issue Type</label>
                                    <input type="text" className="form-control" id='issue_type' value={data.issue_type} onChange={handlechangeIssueType} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='remark'>Remarks (Optional)</label>
                                    <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.issue_description} onChange={handleChangeRemark} />
                                </div>
                                <div className="form-group" >
                                    <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleUpdateIssueType}>Update</button>
                                </div>
                            </form>
                        </article>
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

export default EditIssueType;