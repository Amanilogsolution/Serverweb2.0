import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddPurchaseTypeeapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddPurchaseType() {
    const [loading, setLoading] = useState(true)

    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: "#",
        toggle: "true",
    })

    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const purchase_type = document.getElementById('purchase_type').value;
        const purchase_type_id = purchase_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const purchase_type_desc = document.getElementById('purchase_type_desc').value;
        // setLoading(true)

        const username = sessionStorage.getItem('UserId');

        if (!purchase_type) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Purchase Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = sessionStorage.getItem('Database')
            const result = await AddPurchaseTypeeapi(org,purchase_type_id, purchase_type, purchase_type_desc, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Purchase Type Added", title: "success", type: "success", route: "/TotalPurchaseType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Purchase Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddPurchaseType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Purchase Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Purchase Type</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalPurchaseType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="col" >
                                            <label htmlFor='seriesid'>Purchase Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='purchase_type' />
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='taskid'>Remarks</label>
                                            <textarea type="email" className="form-control" id='purchase_type_desc' rows='3' />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Purchase Type</button>
                                            <button type="reset" className="btn btn-secondary " style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default AddPurchaseType;