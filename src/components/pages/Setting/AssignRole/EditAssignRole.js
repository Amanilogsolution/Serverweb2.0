import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


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

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Assign Role<MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Assign Role</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssignRole' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Edit Assign Role:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="col mt-2" >
                                            <label htmlFor='agent'>Agent <span className='text-danger'>*</span></label>
                                            <select type="text" className="form-select" id='agent' >
                                                <option value='' hiden>Select Agent</option>
                                            </select>
                                        </div>
                                        <div className="col mt-2" >
                                            <label htmlFor='role'>Role <span className='text-danger'>*</span></label>
                                            <select type="text" className="form-select" id='role' >
                                                <option value='' hiden>Select Role</option>
                                            </select>
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='remarks'>Remarks</label>
                                            <textarea className="form-control" id='remarks' rows='3' />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn">Update</button>
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

export default EditAssignRole;