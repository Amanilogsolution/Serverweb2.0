import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetContractType, UpdateContractType } from '../../../../api'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';
import { RiArrowGoBackFill } from 'react-icons/ri'

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
            const org = localStorage.getItem('Database')

            const result = await GetContractType(org, localStorage.getItem('contracttypesno'))
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
        const org = localStorage.getItem('Database')

        const username = localStorage.getItem('UserId');
        const sno = localStorage.getItem('contracttypesno')

        if (!contract_type) {
            document.getElementById('subnitbtn').disabled = false

            setDatas({ ...datas, message: "Please enter Contract Type ", title: "Error", type: "warning", route: "#", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
        }

        else {
            setLoading(true)
            const result = await UpdateContractType(org, sno, contract_type, remark, username);

            if (result === 'Updated') {
                localStorage.removeItem('contracttypesno');
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


                        <div className='main_container'>
                            <div className='main-inner-container d-flex justify-content-between  pt-4 pb-3'>
                                <h4><span className='page-type-head1'>Contract Type <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit ContractType</span> </h4>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('contracttypesno'); window.location.href = '/TotalContractType' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="bg-white shadow1-silver rounded15 mt-1 card inner-card pb-3">
                                <div className='card-header'>Edit Contract Type:</div>
                                <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                        <div className="form-group col-md-5">
                                            <label htmlFor='contract_type'>Contract Type <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='contract_type' defaultValue={data.contract_type} />
                                        </div>
                                        <div className="form-group mt-3 col-md-7">
                                            <label htmlFor='remark'>Remarks </label>
                                            <textarea className="form-control" placeholder="Comments" type="text" id='remark' rows="3" defaultValue={data.contract_description} />
                                        </div>
                                        <button type="submit" className="btn btn-voilet mt-3" id="subnitbtn" onClick={handleUpdateContractType}>Update</button>
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