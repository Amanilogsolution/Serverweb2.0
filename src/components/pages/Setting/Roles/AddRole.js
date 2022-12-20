import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { ActiveAgent } from '../../../../api/index'


function AddRoles() {
    const [loading, setLoading] = useState(false)
    const [agentlist, setAgentlist] = useState({})

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })



    useEffect(() => {
        const fetchdata = async () => {
            const agents = await ActiveAgent()
            console.log(agents)
            setAgentlist(agents)
            setLoading(true)
        }
        fetchdata()
    }, [])

    const fullaccess = (fullaccess) => {
        const fullval = document.getElementById(`${fullaccess}-full`).checked === true ? true : false;
        if (fullval === true) {
            document.getElementById(`${fullaccess}-view`).disabled = false;
            document.getElementById(`${fullaccess}-create`).disabled = false;
            document.getElementById(`${fullaccess}-edit`).disabled = false;
            document.getElementById(`${fullaccess}-deactive`).disabled = false;

            document.getElementById(`${fullaccess}-view`).checked = true;
            document.getElementById(`${fullaccess}-create`).checked = true;
            document.getElementById(`${fullaccess}-edit`).checked = true;
            document.getElementById(`${fullaccess}-deactive`).checked = true;
        }
        else {
            // document.getElementById(`${fullaccess}-view`).disabled = true;
            document.getElementById(`${fullaccess}-create`).disabled = true;
            document.getElementById(`${fullaccess}-edit`).disabled = true;
            document.getElementById(`${fullaccess}-deactive`).disabled = true;

            document.getElementById(`${fullaccess}-view`).checked = false;
            document.getElementById(`${fullaccess}-create`).checked = false;
            document.getElementById(`${fullaccess}-edit`).checked = false;
            document.getElementById(`${fullaccess}-deactive`).checked = false;
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
                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>

                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Role</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>New Role</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <header className="card-header" >Add Role</header>
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className='row'>
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
                                            </div>
                                            <div className='row mt-2'>
                                                <div className="col-md-5" >
                                                    <label htmlFor='role'>Role <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='role' />
                                                </div>
                                                <div className="col-md-5" >
                                                    <label htmlFor='remark'>Remarks</label>
                                                    <input type="text" className="form-control" id='remark' />
                                                </div>
                                            </div>
                                            <br />
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Category</th>
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
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" >Add Role</button>
                                                <button type="reset" className="btn btn-secondary" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddRoles;