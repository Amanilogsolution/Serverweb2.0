import Sidebar from '../../../Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { GetAssetTypeapi, UpdateAssettypeapi } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Snackbar from '../../../../Snackbar/Snackbar';


function EditAssetType() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)
    const [datas,setDatas] = useState({
        message:"abc",
        title:"title",
        type:"type",
        route:null
    })

    useEffect(() => {
        const fetchdata = async () => {
            const result = await GetAssetTypeapi(sessionStorage.getItem('assettypesno'))
            setData(result[0]);
            setLoading(true)
        }
        fetchdata()
    }, [])

    const handleadddevice = async (e) => {
        e.preventDefault();
  
        const asset_type = document.getElementById('asset_type').value;
        const asset_type_desc = document.getElementById('asset_type_desc').value;
        const username = sessionStorage.getItem('UserName');
        const sno = sessionStorage.getItem('assettypesno')

        if (!asset_type) {
            alert("All field are mandatory...")
            setLoading(true)
        }
        else {
            const result = await UpdateAssettypeapi(sno, asset_type, asset_type_desc, username);

            if (result === 'Updated') {
               setDatas({...datas,message:"Asset Type Updated",title:"success",type:"success",route:"/TotalAssetType"})
               document.getElementById('snackbar').style.display="block"    
               sessionStorage.removeItem('assettypesno');
      
              }
            else {
                setDatas({...datas,message:"Server Error",title:"Error",type:"danger",route:"/EditAssetType"})
                document.getElementById('snackbar').style.display="block"   
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
                        <div id="snackbar" style={{display:"none"}}>
                                <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route}/> 
                                </div>

                        <div className='main_container pb-2'>
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Asset Type</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Asset Type</span> </h2>
                                <button className='btn btn-secondary ' onClick={() => { sessionStorage.removeItem('assettypesno'); window.location.href = '/TotalAssetType' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="card card-div" style={{ width: "50%" }}>

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
                    </Sidebar>
                    : <LoadingPage />
            }
        </>
    )
}

export default EditAssetType;