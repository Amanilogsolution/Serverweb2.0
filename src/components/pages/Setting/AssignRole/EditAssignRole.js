import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { RiArrowGoBackFill } from 'react-icons/ri'


function EditAssignRole() {
    const [loading, setLoading] = useState(true)
    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })


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
                                <h4><span className='page-type-head1'>Assign Role<MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Assign Role</span> </h4>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssignRole' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <div className='card-header'>Edit Assign Role:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="col mt-2" >
                                            <label htmlFor='agent'>Agent <span className='text-danger'>*</span></label>
                                            <select type="text" className="form-select" id='agent' >
                                                <option value='' hidden>Select Agent</option>
                                            </select>
                                        </div>
                                        <div className="col mt-2" >
                                            <label htmlFor='role'>Role <span className='text-danger'>*</span></label>
                                            <select type="text" className="form-select" id='role' >
                                                <option value='' hidden>Select Role</option>
                                            </select>
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='remarks'>Remarks</label>
                                            <textarea className="form-control" id='remarks' rows='3' />
                                        </div>

                                        <button type="submit" className="btn btn-voilet mt-3" id="subnitbtn">Update</button>
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

export default EditAssignRole;