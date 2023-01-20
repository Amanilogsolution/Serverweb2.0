import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetServiceGroup, UpdateServiceGroup } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { RiArrowGoBackFill } from 'react-icons/ri'

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
            const org = localStorage.getItem('Database')

            const result = await GetServiceGroup(org, localStorage.getItem('servicegroupsno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleUpdateServiceGroupType = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const service_group_type = document.getElementById('service_group_type').value;
        const remark = document.getElementById('remark').value;
        const UserId = localStorage.getItem('UserId');
        const sno = localStorage.getItem('servicegroupsno')
        const org = localStorage.getItem('Database')

        if (!service_group_type) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter the Service Group Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateServiceGroup(org, sno, service_group_type, remark, UserId);
            if (result === 'Updated') {
                localStorage.removeItem('servicegroupsno');
                setDatas({ ...datas, message: "Service Group Type Updated", title: "success", type: "success", route: "/TotalServiceGroup", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Service Group Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditServiceGroup", toggle: "true" })
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
                                <h4><span className='page-type-head1'>Service Action Group <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Service Action Group</span> </h4>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('servicegroupsno'); window.location.href = '/TotalServiceGroup' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <div className='card-header'>Edit Service Action Group:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col">
                                            <label htmlFor='service_group_type'> Service Group Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='service_group_type' defaultValue={data.service_group_type} />
                                        </div>

                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea type="text" className="form-control" id='remark' defaultValue={data.service_group_description} />
                                        </div>

                                        <button type="submit" className="btn btn-voilet mt-3" id="subnitbtn" onClick={handleUpdateServiceGroupType}>Update</button>
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