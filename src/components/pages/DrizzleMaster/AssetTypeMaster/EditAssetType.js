import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetAssetTypeapi, UpdateAssettypeapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function EditAssetType() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    const [datas, setDatas] = useState({
        message: "abc",
        title: "title",
        type: "type",
        route: '#',
        toggle: "true",
    })

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')
            const result = await GetAssetTypeapi(org, localStorage.getItem('assettypesno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
        setLoading(true)
        document.getElementById('subnitbtn').disabled = 'true'
        const asset_type = document.getElementById('asset_type').value;
        const asset_type_desc = document.getElementById('asset_type_desc').value;
        const username = localStorage.getItem('UserName');
        const sno = localStorage.getItem('assettypesno')
        const org = localStorage.getItem('Database')

        setLoading(true)

        if (!asset_type) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Please enter the Asset Type", title: "Error", type: "warning" , route: "#", toggle: "true"})
            document.getElementById('snackbar').style.display = "block"
        }
        else {
            setLoading(true)
            const result = await UpdateAssettypeapi(org, sno, asset_type, asset_type_desc, username);
            if (result === 'Updated') {
                localStorage.removeItem('assettypesno');
                setDatas({ ...datas, message: "Asset Type Updated", title: "success", type: "success", route: "/TotalAssetType", toggle: "true"  })
                document.getElementById('snackbar').style.display = "block"
            }
            else {
                document.getElementById('subnitbtn').disabled = false
                setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/EditAssetType",toggle: "true"  })
                document.getElementById('snackbar').style.display = "block"
            }
        }

    }

    const handlechangeassettype = (e) => {
        setData({ ...data, asset_type: e.target.value })
    }
    const handlechangeassettypedesc = (e) => {
        setData({ ...data, asset_description: e.target.value })
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div id="snackbar" style={{ display: "none" }}>
                            <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle}/>
                        </div>

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Asset Type <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Asset Type</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { localStorage.removeItem('assettypesno'); window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "50%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Edit Asset Type:</div>

                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="form-group col" >
                                                <label htmlFor='asset_type'> Asset Type <span className='text-danger'>*</span></label>
                                                <input type="text" className="form-control" id='asset_type' value={data.asset_type} onChange={handlechangeassettype} />
                                            </div>
                                            <div className="form-group col-md mt-3" >
                                                <label htmlFor='asset_type_desc'>Remarks</label>
                                                <textarea className="form-control" id='asset_type_desc' rows='3' value={data.asset_description} onChange={handlechangeassettypedesc} />
                                            </div>


                                            <div className="form-group" >
                                                <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleadddevice}>Update</button>
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

export default EditAssetType;