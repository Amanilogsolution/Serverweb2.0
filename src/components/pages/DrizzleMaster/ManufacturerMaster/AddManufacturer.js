import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { InsertManufacturer } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function AddManufacturer() {
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
        const manufacturername = document.getElementById('manufacturername').value;
        const manufacturer_id = manufacturername.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const remark = document.getElementById('remark').value;
        const username = localStorage.getItem('UserName');
        const org = localStorage.getItem('Database')

        setLoading(true)

        if (!manufacturername) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Manufacturer", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)

            const result = await InsertManufacturer(org, manufacturer_id, manufacturername, remark, username);
            if (result === 'Added') {
                setDatas({ ...datas, message: "Manufacturer Added", title: "success", type: "success", route: "/TotalManufacturer", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
                localStorage.removeItem('seriessno');
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Manufacturer Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/AddManufacturer", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ################### Snackbar ########################## */}
                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ################### Snackbar ########################## */}

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Manufacturer <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Add Manufacturer</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalManufacturer' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Add Manufacturer:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <article className="card-body" >
                                            <form className='px-3' autoComplete='off'>
                                                <div className="form-group">
                                                    <label htmlFor='manufacturername'>Manufacturer Name   <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='manufacturername' />
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor='remark'>Remarks </label>
                                                    <textarea className="form-control" placeholder="Comments" id='remark' rows="3" />
                                                </div>
                                                <div className="form-group mt-3" >
                                                    <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Add Manufacturer</button>
                                                    <button type="reset" className="btn btn-secondary mx-3">Reset</button>

                                                </div>
                                            </form>
                                        </article>
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

export default AddManufacturer;