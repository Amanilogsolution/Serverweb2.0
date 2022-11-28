import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetServiceActionType, UpdateServiceActionType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditServiceActionType() {
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
            const org = sessionStorage.getItem('Database')

            const result = await GetServiceActionType(org,sessionStorage.getItem('serviceactiontypesno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateServiceActionType = async (e) => {
        e.preventDefault();
        setLoading(false)
        const service_action_type = document.getElementById('service_action_type').value;
        const remark = document.getElementById('remark').value;
        const UserId = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('serviceactiontypesno')
        const org = sessionStorage.getItem('Database')

        setLoading(true)

        if (!service_action_type) {
            setDatas({ ...datas, message: "Please enter Service Action Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateServiceActionType(org,sno, service_action_type, remark, UserId);

            if (result === 'Updated') {
                sessionStorage.removeItem('serviceactiontypesno');
                setDatas({ ...datas, message: "Service Action Type Updated", title: "success", type: "success", route: "/TotalServiceActionType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Service Action Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditServiceActionType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }

    const handleChangeServiceAction = (e) => {
        setData({ ...data, service_action_type: e.target.value })
    }

    const handleChangeRemark = (e) => {
        setData({ ...data, service_action_type_description: e.target.value })
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h3><span style={{ color: "rgb(123,108,200)" }}>Service Action Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "22px" }}>Edit Service Action Type</span> </h3>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('serviceactiontypesno'); window.location.href = '/TotalServiceActionType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col">
                                            <label htmlFor='service_action_type'> Service Action Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='service_action_type' value={data.service_action_type} onChange={handleChangeServiceAction} />
                                        </div>

                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea type="text" className="form-control" id='remark' rows='3' value={data.service_action_type_description} onChange={handleChangeRemark} />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleUpdateServiceActionType}>Update</button>
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

export default EditServiceActionType;