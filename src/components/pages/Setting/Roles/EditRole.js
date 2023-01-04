import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { getrole, Updaterole } from '../../../../api/index'


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

    const checkboxStyle = {
        width: '20px',
        height: '20px'
    }

    useEffect(() => {
        const fetchdata = async () => {
            const getRoles = await getrole(localStorage.getItem('Database'), localStorage.getItem('RoleSno'))
            console.log(getRoles)
            setRolelist(getRoles[0])
            setLoading(true)

        }
        fetchdata()
    }, [])

    // const allaccess = () => {
    //     const allval = document.getElementById('allval').checked === true ? true : false;
    //     const full = ['assets', 'vendCont', 'ticket', 'master', 'transaction', 'setting', 'reports']
    //     const arry = ['full', 'view', 'create', 'edit', 'deactive']
    //     if (allval) {
    //         for (let i = 0; i < full.length; i++) {
    //             for (let j = 0; j < arry.length; j++) {
    //                 document.getElementById(`${full[i]}-${arry[j]}`).checked = true;
    //                 document.getElementById(`${full[i]}-${arry[j]}`).disabled = false;
    //             }
    //         }
    //     }
    //     else {
    //         for (let i = 0; i < full.length; i++) {
    //             for (let j = 0; j < arry.length; j++) {
    //                 if (arry[j] === 'full' || arry[j] === 'view') {
    //                     document.getElementById(`${full[i]}-${arry[j]}`).checked = false;

    //                 }
    //                 else {
    //                     document.getElementById(`${full[i]}-${arry[j]}`).checked = false;
    //                     document.getElementById(`${full[i]}-${arry[j]}`).disabled = true;
    //                 }
    //             }

    //         }
    //     }

    // }

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
            org: localStorage.getItem('Database'),
            role: document.getElementById('role').value,
            remark: document.getElementById('remarks').value,
            role_id: document.getElementById('role').value.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000),
            sno: localStorage.getItem('RoleSno')
        }
        e.preventDefault();
        // setLoading(false)

        const full = ['assets', 'vendCont', 'ticket', 'master', 'transaction', 'setting', 'reports']
        const arry = ['full', 'view', 'create', 'edit', 'deactive']
        for (let i = 0; i < full.length; i++) {
            for (let j = 0; j < arry.length; j++) {
                let datasss = {}
                datasss[`${full[i]}${arry[j]}`] = document.getElementById(`${full[i]}-${arry[j]}`).checked;

                Object.assign(datas, datasss)
            }
        }
        console.log(datas)

        const result = await Updaterole(datas)
        if (result === "Updated") {
            localStorage.removeItem('RoleSno')
            window.location.href = '/TotalRoles'
        }
        else {
            alert('server errror')
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

    const togglemasterdiv = () => {
        const val = document.getElementById('mastercheck').checked === true ? true : false
        if (val) {
            document.getElementById('masteralldiv').style.display = 'table-row-group'
        }
        else {
            document.getElementById('masteralldiv').style.display = 'none'
        }
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
                                <h2><span className='page-type-head1'>Role <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Role</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { localStorage.removeItem('RoleSno'); window.location.href = '/TotalRoles' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "90%" }}>
                                <header className="card-header" >Edit Role</header>
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
                                                <input type="text" className="form-control" id='role' defaultValue={rolelist.role} disabled />
                                            </div>
                                            <div className="col-md-5" >
                                                <label htmlFor='remarks'>Remarks</label>
                                                <input type="text" className="form-control" id='remarks' defaultValue={rolelist.remark} />
                                            </div>
                                        </div>
                                        <br />
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    {/* <th scope="col">Category <input type='checkbox' id='allval' style={checkboxStyle} onChange={allaccess} /></th> */}
                                                    <th scope="col">Category</th>
                                                    <th scope="col">View</th>
                                                    <th scope="col">Create</th>
                                                    <th scope="col">Edit</th>
                                                    <th scope="col">Deactive</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' defaultChecked={rolelist.asset === "true" ? "true" : ""} id='assets-full' style={checkboxStyle} onChange={() => fullaccess('assets')} /> Assets</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.asset_view === "true" ? "true" : ""} id='assets-view' style={checkboxStyle} onChange={() => viewoff('assets')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.asset_create === "true" ? "true" : ""} id='assets-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.asset_edit === "true" ? "true" : ""} id='assets-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.asset_delete === "true" ? "true" : ""} id='assets-deactive' style={checkboxStyle} /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='vendCont-full' defaultChecked={rolelist.vendor_contract === "true" ? "true" : ""} style={checkboxStyle} onChange={() => fullaccess('vendCont')} /> Vendor Contract</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.vendor_contract_view === "true" ? "true" : ""} id='vendCont-view' style={checkboxStyle} onChange={() => viewoff('vendCont')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.vendor_contract_create === "true" ? "true" : ""} id='vendCont-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.vendor_contract_edit === "true" ? "true" : ""} id='vendCont-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.vendor_contract_delete === "true" ? "true" : ""} id='vendCont-deactive' style={checkboxStyle} /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='ticket-full' defaultChecked={rolelist.ticket === "true" ? "true" : ""} style={checkboxStyle} onChange={() => fullaccess('ticket')} /> Ticket</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.ticket_view === "true" ? "true" : ""} id='ticket-view' style={checkboxStyle} onChange={() => viewoff('ticket')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.ticket_create === "true" ? "true" : ""} id='ticket-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.ticket_edit === "true" ? "true" : ""} id='ticket-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.ticket_delete === "true" ? "true" : ""} id='ticket-deactive' style={checkboxStyle} /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='master-full' defaultChecked={rolelist.master === "true" ? "true" : ""} style={checkboxStyle} onChange={() => fullaccess('master')} /> Masters</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.master_view === "true" ? "true" : ""} id='master-view' style={checkboxStyle} onChange={() => viewoff('master')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.master_create === "true" ? "true" : ""} id='master-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.master_edit === "true" ? "true" : ""} id='master-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.master_delete === "true" ? "true" : ""} id='master-deactive' style={checkboxStyle} /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='transaction-full' defaultChecked={rolelist.transaction_details === "true" ? "true" : ""} style={checkboxStyle} onChange={() => fullaccess('transaction')} /> Transaction</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.transaction_view === "true" ? "true" : ""} id='transaction-view' style={checkboxStyle} onChange={() => viewoff('transaction')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.transaction_create === "true" ? "true" : ""} id='transaction-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.transaction_edit === "true" ? "true" : ""} id='transaction-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.transaction_delete === "true" ? "true" : ""} id='transaction-deactive' style={checkboxStyle} /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='setting-full' defaultChecked={rolelist.setting === "true" ? "true" : ""} style={checkboxStyle} onChange={() => fullaccess('setting')} /> Setting</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.setting_view === "true" ? "true" : ""} id='setting-view' style={checkboxStyle} onChange={() => viewoff('setting')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.setting_create === "true" ? "true" : ""} id='setting-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.setting_edit === "true" ? "true" : ""} id='setting-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.setting_delete === "true" ? "true" : ""} id='setting-deactive' style={checkboxStyle} /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='reports-full' defaultChecked={rolelist.reports === "true" ? "true" : ""} style={checkboxStyle} onChange={() => fullaccess('reports')} /> Reports</th>
                                                    <td><input type='checkbox' defaultChecked={rolelist.reports_view === "true" ? "true" : ""} id='reports-view' style={checkboxStyle} onChange={() => viewoff('reports')} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.reports_create === "true" ? "true" : ""} id='reports-create' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.reports_edit === "true" ? "true" : ""} id='reports-edit' style={checkboxStyle} /></td>
                                                    <td><input type='checkbox' defaultChecked={rolelist.reports_delete === "true" ? "true" : ""} id='reports-deactive' style={checkboxStyle} /></td>
                                                </tr>

                                                {/* ################################## Master ################################### */}
                                                <tr >
                                                    <th scope="row">
                                                        Master &nbsp; <input type='checkbox' id='mastercheck' style={checkboxStyle} onChange={togglemasterdiv} /></th>
                                                    <th colSpan='4'></th>
                                                </tr>
                                            </tbody>
                                            <tbody style={{ display: 'none' }} id='masteralldiv'>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='location-full' style={checkboxStyle} onChange={() => fullaccess('location')} /> Location</th>
                                                    <td><input type='checkbox' id='location-view' style={checkboxStyle} onChange={() => viewoff('location')} /></td>
                                                    <td><input type='checkbox' id='location-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='location-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='location-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='employee-full' style={checkboxStyle} onChange={() => fullaccess('employee')} /> Employee</th>
                                                    <td><input type='checkbox' id='employee-view' style={checkboxStyle} onChange={() => viewoff('employee')} /></td>
                                                    <td><input type='checkbox' id='employee-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='employee-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='employee-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='assettype-full' style={checkboxStyle} onChange={() => fullaccess('assettype')} /> Asset Type</th>
                                                    <td><input type='checkbox' id='assettype-view' style={checkboxStyle} onChange={() => viewoff('assettype')} /></td>
                                                    <td><input type='checkbox' id='assettype-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='assettype-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='assettype-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='assetstatus-full' style={checkboxStyle} onChange={() => fullaccess('assetstatus')} /> Asset Status</th>
                                                    <td><input type='checkbox' id='assetstatus-view' style={checkboxStyle} onChange={() => viewoff('assetstatus')} /></td>
                                                    <td><input type='checkbox' id='assetstatus-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='assetstatus-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='assetstatus-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='manufacturer-full' style={checkboxStyle} onChange={() => fullaccess('manufacturer')} /> Manufacturer </th>
                                                    <td><input type='checkbox' id='manufacturer-view' style={checkboxStyle} onChange={() => viewoff('manufacturer')} /></td>
                                                    <td><input type='checkbox' id='manufacturer-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='manufacturer-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='manufacturer-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='software-full' style={checkboxStyle} onChange={() => fullaccess('software')} /> Software </th>
                                                    <td><input type='checkbox' id='software-view' style={checkboxStyle} onChange={() => viewoff('software')} /></td>
                                                    <td><input type='checkbox' id='software-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='software-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='software-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='issuetype-full' style={checkboxStyle} onChange={() => fullaccess('issuetype')} /> Issue Type </th>
                                                    <td><input type='checkbox' id='issuetype-view' style={checkboxStyle} onChange={() => viewoff('issuetype')} /></td>
                                                    <td><input type='checkbox' id='issuetype-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='issuetype-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='issuetype-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='purchasetype-full' style={checkboxStyle} onChange={() => fullaccess('purchasetype')} /> Purchase Type </th>
                                                    <td><input type='checkbox' id='purchasetype-view' style={checkboxStyle} onChange={() => viewoff('purchasetype')} /></td>
                                                    <td><input type='checkbox' id='purchasetype-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='purchasetype-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='purchasetype-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='contracttype-full' style={checkboxStyle} onChange={() => fullaccess('contracttype')} /> Contract Type </th>
                                                    <td><input type='checkbox' id='contracttype-view' style={checkboxStyle} onChange={() => viewoff('contracttype')} /></td>
                                                    <td><input type='checkbox' id='contracttype-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='contracttype-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='contracttype-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='priority-full' style={checkboxStyle} onChange={() => fullaccess('priority')} /> Priority</th>
                                                    <td><input type='checkbox' id='priority-view' style={checkboxStyle} onChange={() => viewoff('priority')} /></td>
                                                    <td><input type='checkbox' id='priority-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='priority-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='priority-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='ticketstatus-full' style={checkboxStyle} onChange={() => fullaccess('ticketstatus')} /> Ticket Status</th>
                                                    <td><input type='checkbox' id='ticketstatus-view' style={checkboxStyle} onChange={() => viewoff('ticketstatus')} /></td>
                                                    <td><input type='checkbox' id='ticketstatus-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='ticketstatus-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='ticketstatus-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='billingfrq-full' style={checkboxStyle} onChange={() => fullaccess('billingfrq')} /> Billing Frequency</th>
                                                    <td><input type='checkbox' id='billingfrq-view' style={checkboxStyle} onChange={() => viewoff('billingfrq')} /></td>
                                                    <td><input type='checkbox' id='billingfrq-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='billingfrq-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='billingfrq-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='vendcate-full' style={checkboxStyle} onChange={() => fullaccess('vendcate')} /> Vendor Category</th>
                                                    <td><input type='checkbox' id='vendcate-view' style={checkboxStyle} onChange={() => viewoff('vendcate')} /></td>
                                                    <td><input type='checkbox' id='vendcate-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='vendcate-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='vendcate-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='vendsubcate-full' style={checkboxStyle} onChange={() => fullaccess('vendsubcate')} /> Vendor Sub Category</th>
                                                    <td><input type='checkbox' id='vendsubcate-view' style={checkboxStyle} onChange={() => viewoff('vendsubcate')} /></td>
                                                    <td><input type='checkbox' id='vendsubcate-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='vendsubcate-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='vendsubcate-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='serviceactiontype-full' style={checkboxStyle} onChange={() => fullaccess('serviceactiontype')} /> Service Action Type</th>
                                                    <td><input type='checkbox' id='serviceactiontype-view' style={checkboxStyle} onChange={() => viewoff('serviceactiontype')} /></td>
                                                    <td><input type='checkbox' id='serviceactiontype-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='serviceactiontype-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='serviceactiontype-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='servicegrouptype-full' style={checkboxStyle} onChange={() => fullaccess('servicegrouptype')} /> Service Group Type</th>
                                                    <td><input type='checkbox' id='servicegrouptype-view' style={checkboxStyle} onChange={() => viewoff('servicegrouptype')} /></td>
                                                    <td><input type='checkbox' id='servicegrouptype-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='servicegrouptype-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='servicegrouptype-deactive' style={checkboxStyle} disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input type='checkbox' id='vendormaster-full' style={checkboxStyle} onChange={() => fullaccess('vendormaster')} /> Vendor Master</th>
                                                    <td><input type='checkbox' id='vendormaster-view' style={checkboxStyle} onChange={() => viewoff('vendormaster')} /></td>
                                                    <td><input type='checkbox' id='vendormaster-create' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='vendormaster-edit' style={checkboxStyle} disabled /></td>
                                                    <td><input type='checkbox' id='vendormaster-deactive' style={checkboxStyle} disabled /></td>
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