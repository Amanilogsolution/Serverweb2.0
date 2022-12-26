import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetEmployees, UpdateEmployees, ActiveLocation } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditEmployee() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({});
    const [locationlist, setLocationlist] = useState([])

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
            const result = await GetEmployees(org, localStorage.getItem('employeesno'))
            console.log(result)
            setData(result[0]);
            const tablelocation = await ActiveLocation(org);
            setLocationlist(tablelocation)
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const employee_name = document.getElementById('employee_name').value;
        const employee_email = document.getElementById('employee_email').value;
        const employee_number = document.getElementById('employee_number').value;
        const company = document.getElementById('company').value;
        const location = document.getElementById('location').value;
        const username = localStorage.getItem('UserName');
        const sno = localStorage.getItem('employeesno')
        setLoading(true)

        if (!location || !employee_name || !employee_email) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter all mandatory fields", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = localStorage.getItem('Database')

            const result = await UpdateEmployees(org, sno, employee_name, location, employee_email, employee_number, company, username);

            if (result === 'Updated') {
                localStorage.removeItem('employeesno');
                setDatas({ ...datas, message: "Employee Updated", title: "success", type: "success", route: "/TotalEmployee", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditEmployee", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }


    // const handlechangeempname = (e) => {
    //     setData({ ...data, employee_name: e.target.value })
    // }
    // const handlechangeempemail = (e) => {
    //     setData({ ...data, employee_email: e.target.value })
    // }
    const handlechangeempno = (e) => {
        if (e.target.value.length === 11) return false;
        setData({ ...data, employee_number: e.target.value })
    }
    // const handlechangecompany = (e) => {
    //     setData({ ...data, company: e.target.value })
    // }

    // const handlechangelocation = (e) => {
    //     setData({ ...data, location: e.target.value })
    // }



    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ################# Snackbar ##################### */}

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>

                        {/* ################# Snackbar ##################### */}

                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Employee <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Employee</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('employeesno'); window.location.href = '/TotalEmployee' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "70%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Edit Employee</div>
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="row">
                                                <div className="form-group col-md-6" >
                                                    <label htmlFor='groupid'>Company</label>
                                                    <input type="text" className="form-control" id='company' defaultValue={data.company}  />
                                                </div>

                                                <div className="form-group col-md-6" >
                                                    <label htmlFor='osid'>Location <span className='text-danger'>*</span></label>
                                                    <select className="form-select" id='location' required >
                                                        <option value={data.location} hidden>{data.location}</option>
                                                        {
                                                            locationlist.map((item, index) =>
                                                                <option key={index}>{item.location_name}</option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="form-group col-md-6" >
                                                    <label htmlFor='seriesid'> Employee Name <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='employee_name' defaultValue={data.employee_name}  />
                                                </div>
                                                <div className="form-group col-md-6" >
                                                    <label htmlFor='taskid'>Employee Email <span className='text-danger'>*</span></label>
                                                    <input type="email" className="form-control" id='employee_email' defaultValue={data.employee_email}  />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="form-group col-md-6" >
                                                    <label htmlFor='agentid'>Employee Number</label>
                                                    <input type="number" className="form-control" id='employee_number' value={data.employee_number} onChange={handlechangeempno} />
                                                </div>
                                                <div className="col-md-6 d-flex flex-column justify-content-center" >
                                                    <div className="d-flex  align-items-center" >
                                                        <label htmlFor='portal_access' className='col-md-3'>Agent</label>
                                                        <input type="checkbox" className="" id='portal_access' checked={data.user_id ? true : false} style={{ width: "18px", height: "18px" }} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleadddevice}>Update</button>
                                            </div>
                                        </form>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default EditEmployee;