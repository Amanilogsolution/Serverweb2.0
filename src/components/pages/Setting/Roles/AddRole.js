import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddRoles() {
    const [loading, setLoading] = useState(false)
    const [togglecheck,setTogglecheck]= useState(false)
    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })



    useEffect(() => {
        setLoading(true)
    }, [])

    const changeDisabledBox = (type) => {
        if(!togglecheck){
            document.getElementById(`${type}-create`).disabled = false
            document.getElementById(`${type}-edit`).disabled = false
            document.getElementById(`${type}-deactive`).disabled = false
        }
        else{
            document.getElementById(`${type}-create`).disabled = true
            document.getElementById(`${type}-edit`).disabled = true
            document.getElementById(`${type}-deactive`).disabled = true
        }
    
        setTogglecheck(!togglecheck)
    }

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        // document.getElementById('subnitbtn').disabled = 'true'
        // // const software = document.getElementById('software').checked=== true?true:false;
        // const asset_type = document.getElementById('asset_type').value;
        // const assettype_id = asset_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        // const asset_type_desc = document.getElementById('asset_type_desc').value;

        // const username = sessionStorage.getItem('UserId');

        // // console.log(software)
        // if (!asset_type) {
        //     setLoading(true)
        //     document.getElementById('subnitbtn').disabled = false
        //     setDatas({ ...datas, message: "Please enter the Asset Type", title: "Error", type: "warning", route: "#", toggle: "true" })
        //     document.getElementById('snackbar').style.display = "block"
        // }
        // else {
        //     setLoading(true)
        //     const org = sessionStorage.getItem('Database')
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
                                                        <th scope="col">#</th>
                                                        <th scope="col">Create</th>
                                                        <th scope="col">Edit</th>
                                                        <th scope="col">Deactive</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row"><input type='checkbox' style={{ height: '20px', width: '20px' }} onChange={()=>changeDisabledBox('assets')} /> Assets</th>
                                                        <td><input type='checkbox' id='assets-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                        <td><input type='checkbox' id='assets-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                        <td><input type='checkbox' id='assets-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><input type='checkbox' style={{ height: '20px', width: '20px' }} onChange={()=>changeDisabledBox('vendCont')} /> Vendor Contract</th>
                                                        <td><input type='checkbox' id='vendCont-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                        <td><input type='checkbox' id='vendCont-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                        <td><input type='checkbox' id='vendCont-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row"><input type='checkbox' style={{ height: '20px', width: '20px' }} onChange={()=>changeDisabledBox('ticket')} /> Ticket</th>
                                                        <td><input type='checkbox'  id='ticket-create' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                        <td><input type='checkbox'  id='ticket-edit' style={{ height: '20px', width: '20px' }} disabled /></td>
                                                        <td><input type='checkbox'  id='ticket-deactive' style={{ height: '20px', width: '20px' }} disabled /></td>
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