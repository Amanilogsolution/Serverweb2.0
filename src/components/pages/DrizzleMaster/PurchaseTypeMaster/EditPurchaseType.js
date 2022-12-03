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
            const org = sessionStorage.getItem('Database')

            const result = await GetPurchaseTypeapi(org,sessionStorage.getItem('purchasesno'))
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
        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('purchasesno')
      

        if (!purchase_type) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter Purchase Type", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const org = sessionStorage.getItem('Database')

            const result = await UpdatePurchaseapi(org,sno, purchase_type, purchase_type_desc, username);
            if (result === 'Updated') {
                sessionStorage.removeItem('purchasesno');
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

    const handlechangeassetstatus = (e) => {
        setData({ ...data, purchase_type: e.target.value })
    }
    const handlechangeassetstatusdesc = (e) => {
        setData({ ...data, purchase_description: e.target.value })
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>PurchaseType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Purchase Type</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('purchasesno'); window.location.href = '/TotalPurchaseType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>

                                        <div className="form-group col" >
                                            <label htmlFor='purchase_type'>Purchase Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='purchase_type' value={data.purchase_type} onChange={handlechangeassetstatus} />
                                        </div>
                                        <div className="form-group col-md mt-3" >
                                            <label htmlFor='purchase_type_desc'>Remarks</label>
                                            <textarea type="text" className="form-control" id='purchase_type_desc' rows='3' value={data.purchase_description} onChange={handlechangeassetstatusdesc} />
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