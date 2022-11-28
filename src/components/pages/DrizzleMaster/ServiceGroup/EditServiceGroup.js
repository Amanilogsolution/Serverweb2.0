import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetServiceGroup, UpdateServiceGroup } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditServiceGroup() {
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
            const result = await GetServiceGroup(sessionStorage.getItem('servicegroupsno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateServiceGroupType = async (e) => {
        e.preventDefault();
        setLoading(false)
        const service_group_type = document.getElementById('service_group_type').value;
        const remark = document.getElementById('remark').value;
        const UserId = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('servicegroupsno')
        setLoading(true)

        if (!service_group_type) {
            setDatas({ ...datas, message: "Please enter the Service Group Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateServiceGroup(sno, service_group_type, remark, UserId);

            if (result === 'Updated') {
                sessionStorage.removeItem('servicegroupsno');
                setDatas({ ...datas, message: "Service Group Type Updated", title: "success", type: "success", route: "/TotalServiceGroup", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Service Group Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditServiceGroup", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }

    const handleChangeGroup = (e) => {
        setData({ ...data, service_group_type: e.target.value })
    }

    const handleChangeRemark = (e) => {
        setData({ ...data, service_group_description: e.target.value })
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Service Action Group</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Service Action Group</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('servicegroupsno'); window.location.href = '/TotalServiceGroup' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col">
                                            <label htmlFor='service_group_type'> Service Group Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='service_group_type' value={data.service_group_type} onChange={handleChangeGroup} />
                                        </div>

                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea type="text" className="form-control" id='remark' value={data.service_group_description} onChange={handleChangeRemark} />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleUpdateServiceGroupType}>Update</button>
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

export default EditServiceGroup;