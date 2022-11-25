import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { InsertServiceActionType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddVendorSubCategory() {
    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    const handleinsertdata = async (e) => {
        e.preventDefault();
        setLoading(false)
        const service_action = document.getElementById('service_action').value;
        const service_action_id = service_action.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const remark = document.getElementById('remark').value;
        const username = sessionStorage.getItem('UserId');
        setLoading(true)

        if (!service_action) {
            setDatas({ ...datas, message: "Please enter all mandatory fields", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await InsertServiceActionType(service_action_id, service_action, remark, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Service Action Type Added", title: "success", type: "success", route: "/TotalServiceActionType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Service Action Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddServiceActionType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }
    return (
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>

                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h3><span style={{ color: "rgb(123,108,200)" }}>Service Action Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Add Service Action Type</span> </h3>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalServiceActionType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="col">
                                            <label htmlFor='service_action'>Service Action <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='service_action' />
                                        </div>

                                        <div className="col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" id='remark' rows='3' placeholder='Comments' />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleinsertdata}>Add Action Type</button>
                                            <button type="reset" className="btn btn-secondary" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddVendorSubCategory;