import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { ActiveEmployees, EmployeesDetail, ActiveIssue, ActiveTicketStatus, ActiveLocation, ActivePriority, GetNewAssetAssign, InsertTicket, CountTickets,getTickets } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';

export default function EditTicket() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const [employeelist, setEmployeelist] = useState([])
    const [employeedetail, setEmployeedetail] = useState([])
    const [issuelist, setIssuelist] = useState([])
    const [ticketstatuslist, setTicketstatuslist] = useState([])
    const [locationlist, setLocationlist] = useState([])
    const [prioritylist, setPrioritylist] = useState([])
    const [assettypelist, setAssettypelist] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            const result = await getTickets(sessionStorage.getItem('TicketSno'))
            console.log(result)
            setData(result[0]);

            const employee = await ActiveEmployees()
            setEmployeelist(employee)

            const location = await ActiveLocation();
            setLocationlist(location)

            const allissue = await ActiveIssue();
            setIssuelist(allissue)

            const ticketstatus = await ActiveTicketStatus();
            setTicketstatuslist(ticketstatus)

            const priority = await ActivePriority();
            setPrioritylist(priority)



            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleGetEmpDetail = async (e) => {
        let employee_id = e.target.value;
        const detail = await EmployeesDetail(employee_id);
        setEmployeedetail(detail)
        const assetall = await GetNewAssetAssign(employee_id)
        setAssettypelist(assetall)
    }

    const handleAssetTypeChange = (e) => {
        document.getElementById('assetserial').value = e.target.value
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Tickets</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Tickets</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/Dashboard' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Tickets Details:</div>
                                    <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Employee Name <span className='text-danger'>*</span></label>
                                                    <select id='employee' className="form-select" onChange={handleGetEmpDetail}>
                                                        <option value={data.emp_id} hidden >{data.emp_name}</option>
                                                        {
                                                            employeelist.map((item, index) => (
                                                                <option key={index} value={item.employee_id}>{item.employee_name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='assettype'>Asset Type <span className='text-danger'>*</span></label>
                                                    <select className="form-select" id='assettype' onChange={handleAssetTypeChange}>
                                                        <option value={data.asset_serial} hidden>{`${data.asset_type}, (${data.asset_serial})`}</option>

                                                        {
                                                            assettypelist.length ?
                                                                assettypelist.map((item, index) => (
                                                                    <option key={index} value={item.serial_no}>{`${item.asset_type}, (${item.serial_no})`}</option>
                                                                ))
                                                                : <option value=''>Please Assign the asset to this Employee</option>
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='assetserial'>Asset Serial</label>
                                                    <input type="text" id='assetserial' className="form-control" defaultValue={data.asset_serial} disabled />
                                                </div>

                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                    <select id='location' className="form-select">
                                                        <option value={employeedetail.location} hidden>{employeedetail.location}</option>
                                                        {
                                                            locationlist.map((item, index) =>
                                                                <option key={index}>{item.location_name}</option>
                                                            )
                                                        }
                                                    </select>
                                                </div>

                                                <div className="col-md-4" >
                                                    <label htmlFor='assignticket'>Assign Ticket </label>
                                                    <input type="text" id='assignticket' className="form-control" disabled />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='typeofissue'>Type of Issue</label>
                                                    <select id='typeofissue' className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                        {
                                                            issuelist.map((item, index) => (
                                                                <option key={index} value={item.issue_type}>{item.issue_type}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4" >
                                                    <label htmlFor='email'>Email ID</label>
                                                    <input type="email" id='email' className="form-control" disabled defaultValue={employeedetail.employee_email} />
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='ticketdate'>Date </label>
                                                    <input type="date" id='ticketdate' className="form-control" required />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='ticketstatus'>Ticket Status <span className='text-danger'>*</span></label>
                                                    <select id='ticketstatus' className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                        {
                                                            ticketstatuslist.map((item, index) => (
                                                                <option key={index} value={item.ticket_status}>{item.ticket_status}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col">
                                                    <label htmlFor='ticketsubject'>Ticket Subject <span className='text-danger'>*</span></label>
                                                    <input type="text" id='ticketsubject' className="form-control" required />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor='priority'>Priority</label>
                                                    <select id='priority' className="form-select">
                                                        <option value='' hidden>Select...</option>
                                                        {
                                                            prioritylist.map((item, index) => (
                                                                <option key={index} value={item.priority_type}>{item.priority_type}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-6 form-group">
                                                    <label htmlFor="issuedesc">Issue Discription</label>
                                                    <textarea className="form-control" id="issuedesc" rows="3"></textarea>
                                                </div>
                                                <div className="col-md-6 form-group">
                                                    <label htmlFor="remark">Resolution/Pending Remarks</label>
                                                    <textarea className="form-control" id="remark" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" >Edit Tickets</button>
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
