import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { getrole,Updaterole } from '../../../../api/index'


function EditRoles() {
    const [loading, setLoading] = useState(false)
    const [rolelist, setRolelist] = useState({})

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })


    useEffect(() => {
        const fetchdata = async () => {
            const getRoles = await getrole(localStorage.getItem('Database'),localStorage.getItem('RoleSno'))
            console.log(getRoles)
            setRolelist(getRoles[0])
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

        // const software_id = software.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);

        let datas = {
            org:localStorage.getItem('Database'),
            role: document.getElementById('role').value,
            remark: document.getElementById('remarks').value,
            role_id: document.getElementById('role').value.substring(0,3).toUpperCase() + Math.floor(Math.random() * 10000),
            sno:localStorage.getItem('RoleSno')
        }
        e.preventDefault();
        // setLoading(false)

        const full = ['assets', 'vendCont', 'ticket', 'master', 'transaction', 'setting', 'reports']
        const arry = ['full', 'view', 'create', 'edit', 'deactive']
            for (let i = 0; i < full.length; i++) {
                for (let j = 0; j < arry.length; j++) {                    
                    let datasss = {}
                    datasss[`${full[i]}${arry[j]}`]= document.getElementById(`${full[i]}-${arry[j]}`).checked;

                    Object.assign(datas,datasss)
                }
            }
            console.log(datas)

        const result = await Updaterole(datas)
        if (result == "Updated"){
                window.location.href = '/TotalRoles'
        }
        // document.getElementById('subnitbtn').disabled = 'true'
        // // const software = document.getElementById('software').checked=== true?true:false;
        // const asset_type = document.getElementById('asset_type').value;
        // const assettype_id = asset_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        // const asset_type_desc = document.getElementById('asset_type_desc').value;

        // const username = localStorage.getItem('UserId');

        // // console.log(software)
        // if (!asset_type) {
        //     setLoading(true)
        //     document.getElementById('subnitbtn').disabled = false
        //     setDatas({ ...datas, message: "Please enter the Asset Type", title: "Error", type: "warning", route: "#", toggle: "true" })
        //     document.getElementById('snackbar').style.display = "block"
        // }
        // else {
        //     setLoading(true)
        //     const org = localStorage.getItem('Database')
        //     const result = await AddAssetTypeapi(org, assettype_id, asset_type, asset_type_desc, username);
        //     if (result === 'Added') {
        //         setDatas({ ...datas, message: "Asset Type Added", title: "success", type: "success", route: "/TotalAssetType", toggle: "true" })
        //         document.getElementById('snackbar').style.display = "block"
        //     }
        //     else if (result === 'Already') {
        //         document.getElementById('subnitbtn').disabled = false
        //         setDatas({ ...datas, message: "This Asset Already Exist", title: "warning", type: "Error" })
        //         document.getElementById('snackbar').style.display = "block"
        //     }
        //     else {
        //         document.getElementById('subnitbtn').disabled = false
        //         setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddAssetType", toggle: "true" })
        //         document.getElementById('snackbar').style.display = "block"
        //     }
        // }

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
                                                <input type="text" className="form-control" id='role' defaultValue={rolelist.role}/>
                                            </div>
                                            <div className="col-md-5" >
                                                <label htmlFor='remarks'>Remarks</label>
                                                <input type="text" className="form-control" id='remarks' defaultValue={rolelist.remark}/>
                                            </div>
                                        </div>
                                        <br />
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    {/* <th scope="col">Category <input type='checkbox' id='allval' style={{ height: '20px', width: '20px' }} onChange={allaccess} /></th> */}
                                                    <th scope="col">View</th>
                                                    <th scope="col">Create</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Deactive</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' checked={rolelist.asset == "true" ? "true":""} id='assets-full' style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('assets')} /> Assets</th>
                                                    <td><input type='checkbox' checked={rolelist.asset_view == "true" ? "true":""}  id='assets-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('assets')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.asset_create == "true" ? "true":""} id='assets-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.asset_edit == "true" ? "true":""} id='assets-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.asset_delete == "true" ? "true":""} id='assets-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='vendCont-full' checked={rolelist.vendor_contract == "true" ? "true":""}  style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('vendCont')} /> Vendor Contract</th>
                                                    <td><input type='checkbox' checked={rolelist.vendor_contract_view == "true" ? "true":""}  id='vendCont-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('vendCont')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.vendor_contract_create == "true" ? "true":""}  id='vendCont-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.vendor_contract_edit == "true" ? "true":""}  id='vendCont-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.vendor_contract_delete == "true" ? "true":""}  id='vendCont-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='ticket-full' checked={rolelist.ticket == "true" ? "true":""} style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('ticket')} /> Ticket</th>
                                                    <td><input type='checkbox' checked={rolelist.ticket_view == "true" ? "true":""} id='ticket-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('ticket')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.ticket_create == "true" ? "true":""} id='ticket-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.ticket_edit == "true" ? "true":""} id='ticket-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.ticket_delete == "true" ? "true":""} id='ticket-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='master-full' checked={rolelist.master == "true" ? "true":""} style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('master')} /> Masters</th>
                                                    <td><input type='checkbox' checked={rolelist.master_view == "true" ? "true":""}  id='master-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('master')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.master_create == "true" ? "true":""}  id='master-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.master_edit == "true" ? "true":""}  id='master-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.master_delete == "true" ? "true":""}  id='master-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='transaction-full' checked={rolelist.transaction_details == "true" ? "true":""} style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('transaction')} /> Transaction</th>
                                                    <td><input type='checkbox' checked={rolelist.transaction_view == "true" ? "true":""} id='transaction-view'  style={{ height: '20px', width: '20px' }} onChange={() => viewoff('transaction')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.transaction_create == "true" ? "true":""} id='transaction-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.transaction_edit == "true" ? "true":""} id='transaction-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.transaction_delete == "true" ? "true":""} id='transaction-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='setting-full' checked={rolelist.setting == "true" ? "true":""} style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('setting')} /> Setting</th>
                                                    <td><input type='checkbox' checked={rolelist.setting_view == "true" ? "true":""} id='setting-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('setting')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.setting_create == "true" ? "true":""} id='setting-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.setting_edit == "true" ? "true":""} id='setting-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.setting_delete == "true" ? "true":""} id='setting-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='reports-full' checked={rolelist.reports == "true" ? "true":""}  style={{ height: '20px', width: '20px' }} onChange={() => fullaccess('reports')} /> Reports</th>
                                                    <td><input type='checkbox' checked={rolelist.reports_view == "true" ? "true":""}  id='reports-view' style={{ height: '20px', width: '20px' }} onChange={() => viewoff('reports')} /></td>
                                                    <td><input type='checkbox' checked={rolelist.reports_create == "true" ? "true":""}  id='reports-create' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.reports_edit == "true" ? "true":""}  id='reports-edit' style={{ height: '20px', width: '20px' }}  /></td>
                                                    <td><input type='checkbox' checked={rolelist.reports_delete == "true" ? "true":""}  id='reports-deactive' style={{ height: '20px', width: '20px' }}  /></td>
                                                </tr>

                                            </tbody>
                                        </table>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Update Role</button>
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

export default EditRoles;