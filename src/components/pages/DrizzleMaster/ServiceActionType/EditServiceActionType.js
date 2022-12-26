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
            const org = localStorage.getItem('Database')

            const result = await GetServiceActionType(org, localStorage.getItem('serviceactiontypesno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateServiceActionType = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const service_action_type = document.getElementById('service_action_type').value;
        const remark = document.getElementById('remark').value;
        const UserId = localStorage.getItem('UserId');
        const sno = localStorage.getItem('serviceactiontypesno')
        const org = localStorage.getItem('Database')

        if (!service_action_type) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Service Action Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateServiceActionType(org, sno, service_action_type, remark, UserId);

            if (result === 'Updated') {
                localStorage.removeItem('serviceactiontypesno');
                setDatas({ ...datas, message: "Service Action Type Updated", title: "success", type: "success", route: "/TotalServiceActionType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Service Action Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditServiceActionType", toggle: "true" })
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

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h3><span className='page-type-head1'>Service Action Type <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Service Action Type</span> </h3>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('serviceactiontypesno'); window.location.href = '/TotalServiceActionType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Edit Service Action Type:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col">
                                            <label htmlFor='service_action_type'> Service Action Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='service_action_type' defaultValue={data.service_action_type} />
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea type="text" className="form-control" id='remark' rows='3' defaultValue={data.service_action_type_description} />
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