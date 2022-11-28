import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { AddSoftwareapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function AddSoftware() {
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
        const software = document.getElementById('software').value;
        const software_id = software.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const software_desc = document.getElementById('software_desc').value;

        const username = sessionStorage.getItem('UserId');
        setLoading(true)

        if (!software) {
            setDatas({ ...datas, message: "Please enter all mandatory fields", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = sessionStorage.getItem('Database')

            const result = await AddSoftwareapi(org,software_id, software, software_desc, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Software Added", title: "success", type: "success", route: "/TotalSoftware", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Software Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddSoftware", toggle: "true" })
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Software</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Software</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalSoftware' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="col" >
                                            <label htmlFor='software'>Software <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='software' />
                                        </div>
                                        <div className="col-md mt-3" >
                                            <label htmlFor='software_desc'>Remarks </label>
                                            <textarea className="form-control" id='software_desc' rows='3'/>
                                        </div>


                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleaddinsert}>Add Software</button>
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

export default AddSoftware;