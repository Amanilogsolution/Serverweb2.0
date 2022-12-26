import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetManufacturer, UpdateManufacturer } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditManufacturer() {
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
            const org = localStorage.getItem('Database')

            const result = await GetManufacturer(org, localStorage.getItem('manufacturersno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleUpdateManufacturer = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const manufacturername = document.getElementById('manufacturername').value;
        const remark = document.getElementById('remark').value;

        const username = localStorage.getItem('UserName');
        const sno = localStorage.getItem('manufacturersno')
        const org = localStorage.getItem('Database')

        setLoading(true)

        if (!manufacturername) {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Manfacturer", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateManufacturer(org, sno, manufacturername, remark, username);
            if (result === 'Updated') {
                localStorage.removeItem('manufacturersno');
                setDatas({ ...datas, message: "Manfacturer Updated", title: "success", type: "success", route: "/TotalManufacturer", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Manfacturer Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditManufacturer", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ######################### Sanckbar Start ##################################### */}

                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                        </div>
                        {/* ######################### Sanckbar End ##################################### */}

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Manufacturer</span> <MdOutlineKeyboardArrowRight /><span className='page-type-head2'>Edit Manufacturer</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('manufacturersno'); window.location.href = '/TotalManufacturer' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Edit Manufacturer:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='manufacturername'>Manufacturer Name <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='manufacturername' defaultValue={data.manufacturer_name} />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor='remark'>Remarks</label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" defaultValue={data.manufacturer_description} />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleUpdateManufacturer}>Update</button>
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

export default EditManufacturer;