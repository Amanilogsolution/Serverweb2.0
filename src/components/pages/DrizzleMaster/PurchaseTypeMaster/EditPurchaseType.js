import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetPurchaseTypeapi, UpdatePurchaseapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditPurchaseType() {
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

            const result = await GetPurchaseTypeapi(org, localStorage.getItem('purchasesno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const purchase_type = document.getElementById('purchase_type').value;
        const purchase_type_desc = document.getElementById('purchase_type_desc').value;
        const username = localStorage.getItem('UserId');
        const sno = localStorage.getItem('purchasesno')


        if (!purchase_type) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Purchase Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = localStorage.getItem('Database')

            const result = await UpdatePurchaseapi(org, sno, purchase_type, purchase_type_desc, username);
            if (result === 'Updated') {
                localStorage.removeItem('purchasesno');
                setDatas({ ...datas, message: "Purchase Type Updated", title: "success", type: "success", route: "/TotalPurchaseType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Purchase Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditPurchaseType", toggle: "true" })
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
                                <h2><span className='page-type-head1'>Purchase Type <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Purchase Type</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('purchasesno'); window.location.href = '/TotalPurchaseType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card m-auto" style={{ width: "50%" }}>
                                <div className='card-header'>Edit Purchase Type:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col" >
                                            <label htmlFor='purchase_type'>Purchase Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='purchase_type' defaultValue={data.purchase_type} />
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='purchase_type_desc'>Remarks</label>
                                            <textarea type="text" className="form-control" id='purchase_type_desc' rows='3' defaultValue={data.purchase_description} />
                                        </div>

                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleadddevice}>Update</button>

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

export default EditPurchaseType;