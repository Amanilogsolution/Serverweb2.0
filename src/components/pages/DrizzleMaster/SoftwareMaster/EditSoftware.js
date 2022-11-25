import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetSoftwareapi, UpdateSoftwareapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditSoftware() {
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
            const result = await GetSoftwareapi(sessionStorage.getItem('softwaresno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        const software = document.getElementById('software').value;
        const software_desc = document.getElementById('software_desc').value;
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('softwaresno')
        setLoading(true)

        if (!software) {
            setDatas({ ...datas, message: "Please enter all mandatory fields", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateSoftwareapi(sno, software, software_desc, username);

            if (result === 'Updated') {
                sessionStorage.removeItem('softwaresno');
                setDatas({ ...datas, message: "Software Updated", title: "success", type: "success", route: "/TotalSoftware", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                setDatas({ ...datas, message: "Software Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditSoftware", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }


    const handlechangeassetstatus = (e) => {
        setData({ ...data, software_name: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, software_description: e.target.value })
    }

    return (    
        <>
            {
                loading ?
                    <Sidebar >

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Software</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Software</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('softwaresno'); window.location.href = '/TotalSoftware' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col" >
                                            <label htmlFor='seriesid'> Software <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='software' value={data.software_name} onChange={handlechangeassetstatus} />
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='software_desc'>Remarks</label>
                                            <textarea className="form-control" id='software_desc' rows='3' value={data.software_description} onChange={handlechangeassetstatusdesc} />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleadddevice}>Update</button>
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

export default EditSoftware;