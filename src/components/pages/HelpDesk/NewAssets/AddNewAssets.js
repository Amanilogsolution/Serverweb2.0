import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight, MdAddCircle } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { FaMinusCircle } from 'react-icons/fa'

import { ActiveDevicetype, ActiveVendorCode } from '../../../../api'
import LoadingPage from '../../../LoadingPage/LoadingPage';

const AddNewAssets = () => {
    const [loading, setLoading] = useState(false)

    const [todatdate, setTodaydate] = useState('')
    const [devicelist, setDevicelist] = useState([])
    const [vendorlist, setVendorlist] = useState([])
    const [devicedetail, setDevicedetail] = useState(true)
    const [purchasesdetail, setPurchasesdetail] = useState(false)
    const [otherdetail, setOtherdetail] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const devices = await ActiveDevicetype();
            console.log(devices)
            setDevicelist(devices)
            const vendor = await ActiveVendorCode()
            console.log(vendor)
            setVendorlist(vendor)
            setLoading(true)
        }
        fetchdata();
        Todaydate()
    }, [])

    const Todaydate = () => {
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        let today = year + "-" + month + "-" + day;
        setTodaydate(today)
    }

    const handleClickDeviceDetail = () => {
        if (devicedetail) {
            document.getElementById('devicedivdetail').style.display = 'none'

        }
        else {
            document.getElementById('devicedivdetail').style.display = 'block'
            document.getElementById('otherdivdetail').style.display = 'none'
            document.getElementById('purchasesdivdetail').style.display = 'none'
            setOtherdetail(false)
            setPurchasesdetail(false)
        }

        setDevicedetail(!devicedetail)
    }
    const handleClickPurchasesDetail = () => {

        if (purchasesdetail) {
            document.getElementById('purchasesdivdetail').style.display = 'none'

        }
        else {
            document.getElementById('purchasesdivdetail').style.display = 'block'
            document.getElementById('devicedivdetail').style.display = 'none'
            document.getElementById('otherdivdetail').style.display = 'none'
            setDevicedetail(false)
            setOtherdetail(false)
        }

        setPurchasesdetail(!purchasesdetail)
    }

    const handleClickOtherDetail = () => {

        if (otherdetail) {
            document.getElementById('otherdivdetail').style.display = 'none'
        }
        else {
            document.getElementById('otherdivdetail').style.display = 'block'
            document.getElementById('purchasesdivdetail').style.display = 'none'
            document.getElementById('devicedivdetail').style.display = 'none'
            setDevicedetail(false)
            setPurchasesdetail(false)
        }

        setOtherdetail(!otherdetail)
    }

    const handleToggleSoftware = (e) => {
        const devicetype = e.target.value;
        if (devicetype === 'Laptop') {
            document.getElementById('softwarediv').style.display = 'block'
        }
        else {
            document.getElementById('softwarediv').style.display = 'none'

        }


        document.getElementById('assetetag').value = devicetype.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
    }

    const handleChnagePurType = (e) => {
        if (e.target.value === 'Rental') {
            document.getElementById('purchasespricediv').style.display = 'none'
            document.getElementById('rentpermonthdiv').style.display = 'block'
        }
        else if (e.target.value === 'Owned') {
            document.getElementById('purchasespricediv').style.display = 'block'
            document.getElementById('rentpermonthdiv').style.display = 'none'
        }
    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>New Assets</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add New Assets</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalNewAssets' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Add New Assets</div>
                                    <article className="card-body" >
                                        <form className='' autoComplete='off'>

                                            <ul>

                                                {/* #################### Device Detail  Box Start #####################*/}
                                                <li>
                                                    <div style={{ cursor: "pointer" }}  >
                                                        <div className="icon" ></div>
                                                        <span style={{ display: "flex" }} >
                                                            <div className="link_text " onClick={handleClickDeviceDetail}>
                                                                {devicedetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                                &nbsp;Assets / Device Details &nbsp;
                                                                {devicedetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id='devicedivdetail'>
                                                        <div className="row mt-2">

                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Device Type <span className='text-danger'>*</span></label>
                                                                <select className="form-select" onChange={handleToggleSoftware}>
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        devicelist.map((item, index) => (
                                                                            <option key={index} value={item.device_type}>{item.device_type}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Asset Tag <span className='text-danger'>*</span></label>
                                                                <input type="text" id='assetetag' className="form-control" placeholder='Auto generated' disabled />
                                                            </div>
                                                            <div className="col-md-4" id='softwarediv' style={{ display: "none" }}>
                                                                <label htmlFor='vendor'>Software <span className='text-danger'>*</span></label>
                                                                <select className="form-select">
                                                                    <option value='' hidden>Select Software</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className="col-md-4">
                                                                <label htmlFor='model'>Serial No. <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='model'>Location <span className='text-danger'>*</span></label>
                                                                <select className="form-select">
                                                                    <option value='' hidden>Select...</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Manufacture <span className='text-danger'>*</span></label>
                                                                <select className="form-select">
                                                                    <option value='' hidden>Select...</option>
                                                                </select>
                                                            </div>

                                                        </div>


                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='model'>Model <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>

                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Device Status <span className='text-danger'>*</span></label>
                                                                <select className="form-select">
                                                                    <option value='' hidden>Select...</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Description</label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </li>
                                                {/* #################### Device Detail  Box End #####################*/}

                                                {/* #################### Purchases Detail  Box Start ############### */}
                                                <li className='mt-3'>
                                                    <div style={{ cursor: "pointer" }}  >
                                                        <div className="icon" ></div>
                                                        <span style={{ display: "flex" }} >
                                                            <div className="link_text " onClick={handleClickPurchasesDetail}>
                                                                {purchasesdetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                                &nbsp;Purchases Details &nbsp;
                                                                {purchasesdetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id='purchasesdivdetail' style={{ display: 'none' }}>
                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Purchase Type <span className='text-danger'>*</span></label>
                                                                <select className="form-select" onChange={handleChnagePurType}>
                                                                    <option value='' hidden>Select...</option>
                                                                    <option value='Rental' >Rental</option>
                                                                    <option value='Owned' >Owned</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Purchase Date <span className='text-danger'>*</span></label>
                                                                <input type="date" id='purchasesdate' className="form-control" defaultValue={todatdate} required />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='model'>Company <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                                <select className="form-select">
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        vendorlist.map((item, index) => (
                                                                            <option key={index} value={item.vendor_name}>{item.vendor_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Invoice No.<span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* #################### Purchases Detail  Box End ############### */}
                                                {/* #################### Other Detail  Box Start ############### */}

                                                <li className='mt-3'>
                                                    <div style={{ cursor: "pointer" }}  >
                                                        <div className="icon" ></div>
                                                        <span style={{ display: "flex" }} >
                                                            <div className="link_text " onClick={handleClickOtherDetail}>
                                                                {otherdetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                                &nbsp;Other Details &nbsp;
                                                                {otherdetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                            </div>
                                                        </span>
                                                    </div>
                                                    <div id='otherdivdetail' style={{ display: 'none' }}>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4" id='purchasespricediv' style={{ display: "none" }}>
                                                                <label htmlFor='model'>Purchase Price <span className='text-danger'>*</span></label>
                                                                <input type="number" className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4" id='rentpermonthdiv' style={{ display: "none" }}>
                                                                <label htmlFor='vendor'>Rent Per Month <span className='text-danger'>*</span></label>
                                                                <input type="number" className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Latest Inventory <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">

                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Asset Name<span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Asset Assign <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" defaultValue={sessionStorage.getItem('UserName')} required />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mt-3">
                                                            <label htmlFor='model'>Remarks </label>
                                                            <textarea className="form-control" rows='3'></textarea>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* #################### Other Detail  Box End ############### */}

                                            </ul>
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn">Add New Assets</button>&nbsp;&nbsp;
                                                <button type="reset" className="btn btn-secondary">Reset</button>
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

export default AddNewAssets;
