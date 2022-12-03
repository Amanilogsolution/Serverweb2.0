import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetContractType, UpdateContractType } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';

function EditContractType() {
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

            const result = await GetContractType(org, sessionStorage.getItem('contracttypesno'))
            setData(result[0]);
            setLoading(true)

        }
        fetchdata()
    }, [])

    const handleUpdateContractType = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'

        const contract_type = document.getElementById('contract_type').value;
        const remark = document.getElementById('remark').value;
        setLoading(true)
        const org = sessionStorage.getItem('Database')

        const username = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('contracttypesno')

        if (!contract_type) {
            document.getElementById('subnitbtn').disabled = false

            setDatas({ ...datas, message: "Please enter Contract Type ", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }

        else {
            setLoading(true)
            const result = await UpdateContractType(org, sno, contract_type, remark, username);

            if (result === 'Updated') {
                sessionStorage.removeItem('contracttypesno');
                setDatas({ ...datas, message: "Contract Type Updated", title: "success", type: "success", route: "/TotalContractType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else if (result === 'Already') {
                document.getElementById('subnitbtn').disabled = false

                setDatas({ ...datas, message: " Contract Type Already Exist", title: "warning", type: "Error", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false

                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditContractType", toggle: "true" })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }


    const handlechangeContractType = (e) => {
        setData({ ...data, contract_type: e.target.value })
    }
    const handleChangeRemark = (e) => {
        setData({ ...data, contract_description: e.target.value })
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>ContractType</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit ContractType</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('contracttypesno'); window.location.href = '/TotalContractType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" >

                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group">
                                            <label htmlFor='contract_type'>Contract Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='contract_type' value={data.contract_type} onChange={handlechangeContractType} />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label htmlFor='remark'>Remarks </label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" value={data.contract_description} onChange={handleChangeRemark} />
                                        </div>
                                        <div className="form-group mt-3" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleUpdateContractType}>Update</button>
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

export default EditContractType;