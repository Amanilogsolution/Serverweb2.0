import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight, MdAddCircle } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { FaMinusCircle } from 'react-icons/fa'

import { ActiveAssetesType, ActiveVendorCode, ActiveManufacturer, ActiveLocation, ActiveAssetStatus, ActiveSoftware, ActiveEmployees, InsertNewAssets, CountNewAssets,ActivePurchaseTypeapi } from '../../../../api'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { GiLuger } from 'react-icons/gi';

const AddNewAssets = () => {
    const [loading, setLoading] = useState(false)

    const [todatdate, setTodaydate] = useState('')
    const [assettypelist, setAssettypelist] = useState([])
    const [vendorlist, setVendorlist] = useState([])
    const [manufacturerlist, setManufacturerlist] = useState([])
    const [locationlist, setLocationlist] = useState([])
    const [assetstatuslist, setAssetstatuslist] = useState([])
    const [softwarelist, setSoftwarelist] = useState([])
    const [employeelist, setEmployeelist] = useState([])
    const [purchaseslist, setPurchaseslist] = useState([])


    const [devicedetail, setDevicedetail] = useState(true)
    const [purchasesdetail, setPurchasesdetail] = useState(false)
    const [otherdetail, setOtherdetail] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            const devices = await ActiveAssetesType();
            setAssettypelist(devices)
            const vendor = await ActiveVendorCode()
            setVendorlist(vendor)

            const manufacture = await ActiveManufacturer();
            setManufacturerlist(manufacture)

            const location = await ActiveLocation();
            setLocationlist(location)

            const assetstatus = await ActiveAssetStatus();
            setAssetstatuslist(assetstatus)

            const software = await ActiveSoftware();
            setSoftwarelist(software)

            const employee = await ActiveEmployees()
            setEmployeelist(employee)

            const purchase= await ActivePurchaseTypeapi()
            setPurchaseslist(purchase)

            setLoading(true)
        }
        fetchdata();
        todaydate()
    }, [])

    const todaydate = () => {
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

    const handleToggleSoftware = async (e) => {
        const devicetype = e.target.value;
        if (devicetype === 'Laptop') {
            document.getElementById('softwarediv').style.display = 'block'
        }
        else {
            document.getElementById('softwarediv').style.display = 'none'

        }

        const count = await CountNewAssets(devicetype)
        let asset_count = Number(count.count) + 1 + '';
        document.getElementById('assetetag').value = devicetype.substring(0, 3).toUpperCase() + '-' + asset_count.padStart(6, '0');
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

    const handleInsertData = async (e) => {
        e.preventDefault();
        setLoading(false)

        const asset_type = document.getElementById('asset_type').value;
        const asset_id = asset_type.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 10000);
        const assetetag = document.getElementById('assetetag').value;
        let software = document.getElementById('software').value;
        const serialno = document.getElementById('serialno').value;
        const location = document.getElementById('location').value;
        const manufacture = document.getElementById('manufacture').value;
        const model = document.getElementById('model').value;
        const assetstatus = document.getElementById('assetstatus').value;
        const description = document.getElementById('description').value;
        const purchase_type = document.getElementById('purchase_type').value;
        const purchasesdate = document.getElementById('purchasesdate').value;
        const company = document.getElementById('company').value;
        const vendor = document.getElementById('vendor').value;
        const invoiceno = document.getElementById('invoiceno').value;
        let purchaseprice = document.getElementById('purchaseprice').value;
        let rentpermonth = document.getElementById('rentpermonth').value;
        const latestinventory = document.getElementById('latestinventory').value;
        const assetname = document.getElementById('assetname').value;
        let  asset_assign_empid = document.getElementById('assetassign');
        const assetassign=asset_assign_empid.options[asset_assign_empid.selectedIndex].text;
        asset_assign_empid= asset_assign_empid.value
        const remark = document.getElementById('remark').value;

        if (!asset_type || !serialno || !location || !manufacture || !model || !assetstatus || !purchase_type || !purchasesdate ||
            !company || !vendor || !invoiceno || !latestinventory || !assetname || !asset_assign_empid) {
            alert('Please enter the Mandatory field')
            setLoading(true)
            return false;
        }
        else {
            let errorcount = 0;
            if (asset_type === 'Laptop') {
                if (!software) {
                    alert('Please enter the Software Field')
                    setLoading(true)
                    errorcount = errorcount + 1;
                    return false;
                }

            }
            else {
                software = '';
            }
            if (purchase_type === 'Rental') {
                if (!rentpermonth) {
                    alert('Please enter the RentPerMonth Field')
                    setLoading(true)
                    errorcount = errorcount + 1;
                    return false;
                }

            }
            else {
                rentpermonth = '';
            }
            if (purchase_type === 'Owned') {
                if (!purchaseprice) {
                    alert('Please enter the Purchase Price Field')
                    setLoading(true)
                    errorcount = errorcount + 1;
                    return false;
                }

            }
            else {
                purchaseprice = '';
            }

            if (errorcount === 0) {
                const result = await InsertNewAssets(asset_id, asset_type, assetetag, serialno, location, manufacture, software,
                    model, assetstatus, description, purchase_type, purchasesdate, company, vendor, invoiceno,
                    rentpermonth, purchaseprice, latestinventory, assetname, assetassign,asset_assign_empid, remark, sessionStorage.getItem('UserId'))
                if (result === 'Data Added') {
                    alert('Data Added')
                    window.location.reload();
                }
                else {
                    alert('Server Not Response')
                    setLoading(true)
                }
            }
        }
    }

    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}> Assets</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Assets</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalNewAssets' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Add Assets</div>
                                    <article className="card-body" >
                                        <form className='' autoComplete='off'>

                                            <ul>

                                                {/* #################### Device Detail  Box Start #####################*/}
                                                <li>
                                                    <div style={{ cursor: "pointer" }}  >
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
                                                                <label htmlFor='asset_type'>Asset Type <span className='text-danger'>*</span></label>
                                                                <select id='asset_type' className="form-select" onChange={handleToggleSoftware}>
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        assettypelist.map((item, index) => (
                                                                            <option key={index} value={item.asset_type}>{item.asset_type}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>

                                                            <div className="col-md-4">
                                                                <label htmlFor='assetetag'>Asset Tag <span className='text-danger'>*</span></label>
                                                                <input type="text" id='assetetag' className="form-control" placeholder='Auto generated' disabled />
                                                            </div>
                                                            <div className="col-md-4" id='softwarediv' style={{ display: "none" }}>
                                                                <label htmlFor='software'>Software <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='software'>
                                                                    <option value='' hidden>Select Software</option>
                                                                    {
                                                                        softwarelist.map((item, index) => (
                                                                            <option key={index} value={item.software_name}>{item.software_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <div className='row mt-3'>
                                                            <div className="col-md-4">
                                                                <label htmlFor='serialno'>Serial No. <span className='text-danger'>*</span></label>
                                                                <input type="text" id='serialno' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='location'>
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        locationlist.map((item, index) =>
                                                                            <option key={index}>{item.location_name}</option>
                                                                        )
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='manufacture'>Manufacture <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='manufacture'>
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        manufacturerlist.map((item, index) => (
                                                                            <option key={index} value={item.manufacturer_name}>{item.manufacturer_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>

                                                        </div>


                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='model'>Model <span className='text-danger'>*</span></label>
                                                                <input type="text" id='model' className="form-control" required />
                                                            </div>

                                                            <div className="col-md-4">
                                                                <label htmlFor='assetstatus'>Asset Status <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='assetstatus'>
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        assetstatuslist.map((item, index) => (
                                                                            <option key={index} value={item.asset_status}>{item.asset_status}</option>
                                                                        ))
                                                                    }

                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='description'>Description</label>
                                                                <input type="text" id='description' className="form-control" required />
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
                                                                <label htmlFor='purchase_type'>Purchase Type <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='purchase_type' onChange={handleChnagePurType}>
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        purchaseslist.map((item, index) => (
                                                                            <option key={index} value={item.purchase_type}>{item.purchase_type}</option>
                                                                        ))
                                                                    }

                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='purchasesdate'>Purchase Date <span className='text-danger'>*</span></label>
                                                                <input type="date" id='purchasesdate' className="form-control" defaultValue={todatdate} required />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-md-4">
                                                                <label htmlFor='company'>Company <span className='text-danger'>*</span></label>
                                                                <input type="text" id='company' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                                <select id='vendor' className="form-select">
                                                                    <option value='' hidden>Select...</option>
                                                                    {
                                                                        vendorlist.map((item, index) => (
                                                                            <option key={index} value={item.vendor_name}>{item.vendor_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='invoiceno'>Invoice No.<span className='text-danger'>*</span></label>
                                                                <input type="text" id='invoiceno' className="form-control" required />
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
                                                                <label htmlFor='purchaseprice'>Purchase Price <span className='text-danger'>*</span></label>
                                                                <input type="number" id='purchaseprice' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4" id='rentpermonthdiv' style={{ display: "none" }}>
                                                                <label htmlFor='rentpermonth'>Rent Per Month <span className='text-danger'>*</span></label>
                                                                <input type="number" id='rentpermonth' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='latestinventory'>Latest Inventory <span className='text-danger'>*</span></label>
                                                                <input type="text" id='latestinventory' className="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">

                                                            <div className="col-md-4">
                                                                <label htmlFor='assetname'>Asset Name<span className='text-danger'>*</span></label>
                                                                <input type="text" id='assetname' className="form-control" required />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='assetassign'>Asset Assign <span className='text-danger'>*</span></label>
                                                                <select id='assetassign' className="form-select" >
                                                                    <option value={sessionStorage.getItem('UserId')} hidden>{sessionStorage.getItem('UserName')}</option>
                                                                    {
                                                                        employeelist.map((item, index) => (
                                                                            <option key={index} value={item.employee_id}>{item.employee_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mt-3">
                                                            <label htmlFor='remark'>Remarks </label>
                                                            <textarea id='remark' className="form-control" rows='3'></textarea>
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* #################### Other Detail  Box End ############### */}

                                            </ul>
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleInsertData}>Add Assets</button>&nbsp;&nbsp;
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