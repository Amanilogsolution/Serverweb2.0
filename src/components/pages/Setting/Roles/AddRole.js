import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
// import { ActiveAgent } from '../../../../api/index'


function AddRoles() {
    const [loading, setLoading] = useState(false)
    // const [agentlist, setAgentlist] = useState({})

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })


    useEffect(() => {
        const fetchdata = async () => {
            // const agents = await ActiveAgent()
            // console.log(agents)
            // setAgentlist(agents)
            setLoading(true)

        }
        fetchdata()
    }, [])

    const allaccess = () => {
        const allval = document.getElementById('allval').checked === true ? true : false;
        const full = ['assets', 'vendCont', 'ticket', 'master', 'transaction', 'setting', 'reports']
        const arry = ['full', 'view', 'create', 'edit', 'deactive']
        if (allval) {
            for (let i = 0; i < full.length; i++) {
                for (let j = 0; j < arry.length; j++) {
                    document.getElementById(`${full[i]}-${arry[j]}`).checked = true;
                    document.getElementById(`${full[i]}-${arry[j]}`).disabled = false;
                }
            }
        }
        else {
            for (let i = 0; i < full.length; i++) {
                for (let j = 0; j < arry.length; j++) {
                    if (arry[j] === 'full' || arry[j] === 'view') {
                        document.getElementById(`${full[i]}-${arry[j]}`).checked = false;
                    }
                    else {
                        document.getElementById(`${full[i]}-${arry[j]}`).checked = false;
                        document.getElementById(`${full[i]}-${arry[j]}`).disabled = true;
                    }
                }

            }
        }

    }

    const fullaccess = (fullaccess) => {
        const fullval = document.getElementById(`${fullaccess}-full`).checked === true ? true : false;
        const arry = ['view', 'create', 'edit', 'deactive']
        const arry2 = ['create', 'edit', 'deactive']
        if (fullval === true) {
            for (let i = 0; i < arry.length; i++) {
                document.getElementById(`${fullaccess}-${arry[i]}`).disabled = false;
                document.getElementById(`${fullaccess}-${arry[i]}`).checked = true;
            }
        }
        else {
            for (let i = 0; i < arry.length; i++) {
                document.getElementById(`${fullaccess}-${arry[i]}`).checked = false;
            }
            for (let j = 0; j <= arry2.length; j++) {
                document.getElementById(`${fullaccess}-${arry2[j]}`).disabled = true;
            }
        }
    }

    const viewoff = (viewtype) => {
        const view_val = document.getElementById(`${viewtype}-view`).checked === true ? true : false
        if (view_val) {
            document.getElementById(`${viewtype}-edit`).disabled = false;
            document.getElementById(`${viewtype}-deactive`).disabled = false;
        }
        else {
            document.getElementById(`${viewtype}-full`).checked = false;
            document.getElementById(`${viewtype}-create`).checked = false;
            document.getElementById(`${viewtype}-edit`).checked = false;
            document.getElementById(`${viewtype}-deactive`).checked = false;

            document.getElementById(`${viewtype}-create`).disabled = true;
            document.getElementById(`${viewtype}-edit`).disabled = true;
            document.getElementById(`${viewtype}-deactive`).disabled = true;
        }
    }

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const role = document.getElementById('role').value;
        const remarks = document.getElementById('remarks').value;

        const assetsfull = document.getElementById('assets-full').checked === true ? true : false
        const assetsview = document.getElementById('assets-view').checked === true ? true : false
        const assetscreate = document.getElementById('assets-create').checked === true ? true : false
        const assetsedit = document.getElementById('assets-edit').checked === true ? true : false
        const assetsedeactive = document.getElementById('assets-deactive').checked === true ? true : false

        const vendContfull = document.getElementById('vendCont-full').checked === true ? true : false
        const vendContview = document.getElementById('vendCont-view').checked === true ? true : false
        const vendContcreate = document.getElementById('vendCont-create').checked === true ? true : false
        const vendContedit = document.getElementById('vendCont-edit').checked === true ? true : false
        const vendContedeactive = document.getElementById('vendCont-deactive').checked === true ? true : false

        const ticketfull = document.getElementById('ticket-full').checked === true ? true : false
        const ticketview = document.getElementById('ticket-view').checked === true ? true : false
        const ticketcreate = document.getElementById('ticket-create').checked === true ? true : false
        const ticketedit = document.getElementById('ticket-edit').checked === true ? true : false
        const ticketedeactive = document.getElementById('ticket-deactive').checked === true ? true : false

        const masterfull = document.getElementById('master-full').checked === true ? true : false
        const masterview = document.getElementById('master-view').checked === true ? true : false
        const mastercreate = document.getElementById('master-create').checked === true ? true : false
        const masteredit = document.getElementById('master-edit').checked === true ? true : false
        const masteredeactive = document.getElementById('master-deactive').checked === true ? true : false

        const transactionfull = document.getElementById('transaction-full').checked === true ? true : false
        const transactionview = document.getElementById('transaction-view').checked === true ? true : false
        const transactioncreate = document.getElementById('transaction-create').checked === true ? true : false
        const transactionedit = document.getElementById('transaction-edit').checked === true ? true : false
        const transactionedeactive = document.getElementById('transaction-deactive').checked === true ? true : false

        const settingfull = document.getElementById('setting-full').checked === true ? true : false
        const settingview = document.getElementById('setting-view').checked === true ? true : false
        const settingcreate = document.getElementById('setting-create').checked === true ? true : false
        const settingedit = document.getElementById('setting-edit').checked === true ? true : false
        const settingedeactive = document.getElementById('setting-deactive').checked === true ? true : false

        const reportsfull = document.getElementById('reports-full').checked === true ? true : false
        const reportsview = document.getElementById('reports-view').checked === true ? true : false
        const reportscreate = document.getElementById('reports-create').checked === true ? true : false
        const reportsedit = document.getElementById('reports-edit').checked === true ? true : false
        const reportsedeactive = document.getElementById('reports-deactive').checked === true ? true : false

        setLoading(true)


    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ################## Snackbar ####################### */}
                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ################## Snackbar ####################### */}

                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Role <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>New Role</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalRoles' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "90%" }}>
                                <header className="card-header" >Add Role</header>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        {/* <div className='row'>
                                                <div className="col-md-5" >
                                                    <label htmlFor='role'>Agent <span className='text-danger'>*</span></label>
                                                    <select className="form-select" id='agent'>
                                                        <option value='' hidden>Select Agent</option>
                                                        {
                                                            agentlist.map((item, index) =>
                                                                <option key={index} value={item.agent_name}>{item.agent_name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-5 mt-4" >
                                                    <button className='btn btn-voilet' onClick={(e) => { e.preventDefault(); window.location.href = './AddEmployee' }}> + Add Agent</button>
                                                </div>
                                            </div> */}
                                        <div className='row'>
                                            <div className="col-md-5" >
                                                <label htmlFor='role'>Role <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='role' />
                                            </div>
                                            <div className="col-md-5" >
                                                <label htmlFor='remarks'>Remarks</label>
                                                <input type="text" className="form-control" id='remarks' />
                                            </div>
                                        </div>
                                        <br />
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Category <input type='checkbox' id='allval' style={{ height: '20px', width: '20px' }} onChange={allaccess} /></th>
                                                    <th scope="col">View</th>
                                                    <th scope="col">Create</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Deactive</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='assets-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('assets')} /> Assets</th>
                                                    <td><input type='checkbox' id='assets-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('assets')} /></td>
                                                    <td><input type='checkbox' id='assets-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='assets-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='assets-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='vendCont-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('vendCont')} /> Vendor Contract</th>
                                                    <td><input type='checkbox' id='vendCont-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('vendCont')} /></td>
                                                    <td><input type='checkbox' id='vendCont-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='vendCont-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='vendCont-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='ticket-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('ticket')} /> Ticket</th>
                                                    <td><input type='checkbox' id='ticket-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('ticket')} /></td>
                                                    <td><input type='checkbox' id='ticket-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='ticket-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='ticket-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='master-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('master')} /> Masters</th>
                                                    <td><input type='checkbox' id='master-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('master')} /></td>
                                                    <td><input type='checkbox' id='master-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='master-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='master-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='transaction-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('transaction')} /> Transaction</th>
                                                    <td><input type='checkbox' id='transaction-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('transaction')} /></td>
                                                    <td><input type='checkbox' id='transaction-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='transaction-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='transaction-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='setting-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('setting')} /> Setting</th>
                                                    <td><input type='checkbox' id='setting-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('setting')} /></td>
                                                    <td><input type='checkbox' id='setting-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='setting-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='setting-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='reports-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('reports')} /> Reports</th>
                                                    <td><input type='checkbox' id='reports-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('reports')} /></td>
                                                    <td><input type='checkbox' id='reports-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='reports-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    <td><input type='checkbox' id='reports-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                </tr>

                                            </tbody>
                                        </table>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Role</button>
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

export default AddRoles;