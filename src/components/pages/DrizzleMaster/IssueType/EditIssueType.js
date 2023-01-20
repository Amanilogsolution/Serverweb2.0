import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetIssueType, UpdateIssueType } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { RiArrowGoBackFill } from 'react-icons/ri'

function EditIssueType() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const result = await GetIssueType(org, localStorage.getItem('IssueTypesno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateIssueType = async (e) => {
        e.preventDefault();

        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const issue_type = document.getElementById('issue_type').value;
        const remark = document.getElementById('remark').value;
        const org = localStorage.getItem('Database')

        const username = localStorage.getItem('UserId');
        const sno = localStorage.getItem('IssueTypesno')
        setLoading(true)

        if (!issue_type) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter All mandatory fields", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateIssueType(org, sno, issue_type, remark, username);
            if (result === 'Updated') {
                localStorage.removeItem('IssueTypesno');
                setDatas({ ...datas, message: "Issue Type Updated", title: "success", type: "success", route: "/TotalIssueType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Issue Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditIssueType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ######################### Sanckbar Start ##################################### */}

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container'>
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>IssueType <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit IssueType</span> </h4>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('IssueTypesno'); window.location.href = '/TotalIssueType' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <div className='card-header'>Edit IssueType:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col-md-5">
                                            <label htmlFor='issue_type'>Issue Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='issue_type' defaultValue={data.issue_type} />
                                        </div>
                                        <div className="form-group col-md-7 mt-3">
                                            <label htmlFor='remark'>Remarks </label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" defaultValue={data.issue_description} />
                                        </div>
                                        <button type="submit" className="btn btn-voilet mt-3" id="subnitbtn" onClick={handleUpdateIssueType}>Update</button>
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

export default EditIssueType;