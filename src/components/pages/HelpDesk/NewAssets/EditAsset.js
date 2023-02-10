import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect, useContext } from 'react';
import { MdOutlineKeyboardArrowRight, MdAddCircle } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { FaMinusCircle } from 'react-icons/fa'

import { ActiveAssetesType, ActiveVendorCode, ActiveManufacturer, ActiveLocation, ActiveAssetStatus, ActiveSoftware, ActiveEmployees, ActivePurchaseTypeapi, GetNewAssets, CountNewAssets, UpdateNewAssets } from '../../../../api'
import LoadingPage from '../../../LoadingPage/LoadingPage';
// import { GrFormClose } from "react-icons/gr"
import { GlobalAlertInfo } from '../../../../App';
import Modal from '../../AlertModal/Modal';

const EditAsset = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

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

    // ########################### Modal Alert #############################################
    // const [datas, setDatas] = useState({
    //     message: "abc",
    //     title: "title",
    //     type: "type",
    //     route: "#",
    //     toggle: "true",
    // })

    const { tooglevalue, callfun } = useContext(GlobalAlertInfo)
    // ########################### Modal Alert #############################################

    useEffect(() => {
        const fetchdata = async () => {
            const org = localStorage.getItem('Database')

            const getdata = await GetNewAssets(org, localStorage.getItem('newassetsno'))
            setData(getdata[0])
            console.log(getdata)

            const devices = await ActiveAssetesType(org);
            setAssettypelist(devices)
            const vendor = await ActiveVendorCode(org)
            setVendorlist(vendor)

            const manufacture = await ActiveManufacturer(org);
            setManufacturerlist(manufacture)

            const location = await ActiveLocation(org);
            setLocationlist(location)

            const assetstatus = await ActiveAssetStatus(org);
            setAssetstatuslist(assetstatus)

            const software = await ActiveSoftware(org);
            setSoftwarelist(software)

            const employee = await ActiveEmployees(org)
            setEmployeelist(employee)

            const purchase = await ActivePurchaseTypeapi(org)
            setPurchaseslist(purchase)


            setLoading(true)

            if (getdata[0].asset_type === 'Laptop') {
                document.getElementById('softwarediv').style.display = 'block'
            }
            else {
                document.getElementById('softwarediv').style.display = 'none'
            }

            if (getdata[0].purchase_type === 'Rental') {
                document.getElementById('purchasespricediv').style.display = 'none'
                document.getElementById('rentpermonthdiv').style.display = 'block'
                document.getElementById('invoicenodiv').style.display = 'none'
            }
            else if (getdata[0].purchase_type === 'Owned') {
                document.getElementById('purchasespricediv').style.display = 'block'
                document.getElementById('rentpermonthdiv').style.display = 'none'
                document.getElementById('invoicenodiv').style.display = 'block'
            }
        }
        fetchdata();
    }, [])


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
        if (devicetype === data.asset_type) {
            document.getElementById('assetetag').value = data.asset_tag
        }
        else {
            const org = localStorage.getItem('Database')

            const count = await CountNewAssets(org, devicetype)
            let asset_count = Number(count.count) + 1 + '';
            document.getElementById('assetetag').value = devicetype.substring(0, 3).toUpperCase() + '-' + asset_count.padStart(6, '0');
        }

    }

    const handleChnagePurType = (e) => {
        if (e.target.value === 'Rental') {
            document.getElementById('purchasespricediv').style.display = 'none'
            document.getElementById('rentpermonthdiv').style.display = 'block'
            document.getElementById('invoicenodiv').style.display = 'none'
        }
        else if (e.target.value === 'Owned') {
            document.getElementById('purchasespricediv').style.display = 'block'
            document.getElementById('rentpermonthdiv').style.display = 'none'
            document.getElementById('invoicenodiv').style.display = 'block'
        }
    }


    const handleUpdateData = async (e) => {
        e.preventDefault();
        setLoading(false)
        document.getElementById('subnitbtn').disabled = 'true'
        const asset_type = document.getElementById('asset_type').value;
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
        let invoiceno = document.getElementById('invoiceno').value;
        let purchaseprice = document.getElementById('purchaseprice').value;
        let rentpermonth = document.getElementById('rentpermonth').value;
        const latestinventory = document.getElementById('latestinventory').value;
        const assetname = document.getElementById('assetname').value;
        let asset_assign_empid = document.getElementById('assetassign');
        const assetassign = asset_assign_empid.options[asset_assign_empid.selectedIndex].text;
        asset_assign_empid = asset_assign_empid.value
        const remark = document.getElementById('remark').value;

        const userid = localStorage.getItem('UserId')
        const sno = localStorage.getItem('newassetsno')

        if (!asset_type || !serialno || !location || !manufacture || !model || !assetstatus || !purchase_type || !purchasesdate ||
            !company || !vendor || !latestinventory || !assetname || !asset_assign_empid) {
            setLoading(true)
            document.getElementById('subnitbtn').disabled = false
            callfun('Please enter all mandatory fields', 'warning', 'self')

            // setDatas({ ...datas, message: "Please enter the Mandatory Field", title: "Error", type: "warning", route: "#", toggle: "true" })
            // document.getElementById('snackbar').style.display = "block"
            return false;
        }
        else {
            let errorcount = 0;
            if (asset_type === 'Laptop') {
                if (!software) {
                    document.getElementById('subnitbtn').disabled = false
                    setLoading(true)
                    callfun('Please enter the Software Field', 'warning', 'self')
                    document.getElementById('subnitbtn').disabled = false

                    // setDatas({ ...datas, message: "Please enter the Software Field", title: "Error", type: "warning", route: "#", toggle: "true" })
                    // document.getElementById('snackbar').style.display = "block"
                    errorcount = errorcount + 1;
                    return false;
                }

            }
            else {
                software = '';
            }
            if (purchase_type === 'Rental') {
                if (!rentpermonth) {
                    setLoading(true)
                    document.getElementById('subnitbtn').disabled = false
                    callfun('Please enter the RentPerMonth Field', 'warning', 'self')

                    // setDatas({ ...datas, message: "Please enter the Rent Per Month Field", title: "Error", type: "warning", route: "#", toggle: "true" })
                    // document.getElementById('snackbar').style.display = "block"
                    errorcount = errorcount + 1;
                    return false;
                }

            }
            else {
                rentpermonth = '';
            }
            if (purchase_type === 'Owned') {
                if (!purchaseprice) {
                    setLoading(true)
                    document.getElementById('subnitbtn').disabled = false
                    callfun('Please enter the Purchase Price Field', 'warning', 'self')

                    // setDatas({ ...datas, message: "Please enter the Purchase Price Field", title: "Error", type: "warning", route: "#", toggle: "true" })
                    // document.getElementById('snackbar').style.display = "block"
                    errorcount = errorcount + 1;
                    return false;
                }
                if (!invoiceno) {
                    setLoading(true)
                    document.getElementById('subnitbtn').disabled = false
                    callfun('Please enter the Invoice no.', 'warning', 'self')

                    // setDatas({ ...datas, message: "Please enter the Invoice no.", title: "Error", type: "warning", route: "#", toggle: "true" })
                    // document.getElementById('snackbar').style.display = "block"
                    errorcount = errorcount + 1;
                    return false;
                }

            }
            else {
                purchaseprice = '';
                invoiceno = '';
            }

            if (errorcount === 0) {
                const org = localStorage.getItem('Database')
                setLoading(true)

                const result = await UpdateNewAssets(org, asset_type, assetetag, serialno, location, manufacture, software,
                    model, assetstatus, description, purchase_type, purchasesdate, company, vendor, invoiceno,
                    rentpermonth, purchaseprice, latestinventory, assetname, assetassign, asset_assign_empid, remark, userid, sno)

                if (result === 'Data Updated') {
                    localStorage.removeItem('newassetsno')
                    callfun("Asset Updated", 'success', '/TotalNewAssets')

                    // setDatas({ ...datas, message: "Asset Updated", title: "success", type: "success", route: "/TotalNewAssets", toggle: "true" })
                    // document.getElementById('snackbar').style.display = "block"
                }
                else {
                    document.getElementById('subnitbtn').disabled = false
                    callfun('Server Error', 'danger', 'self')

                    // setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "#", toggle: "true" })
                    // document.getElementById('snackbar').style.display = "block"
                }
            }
        }
    }
    return (
        <>
            {
                loading ?
                    <Sidebar >
                        {/* ############## Snackbar  ###########################*/}

                        {/* <div id="snackbar" style={{ display: "none" }}>
                            <div className={`${datas.toggle === "true" ? "received" : ""} notification`}>
                                <div className={`notification__message message--${datas.type}`}>
                                    <h1>{datas.title}</h1>
                                    <p>{datas.message}</p>

                                    <button
                                        onClick={() => {
                                            setDatas({ ...datas, toggle: 'false' });
                                            window.location.href = datas.route
                                        }}>
                                        <GrFormClose />
                                    </button>
                                </div>
                            </div>
                        </div> */}

                        <Modal
                            theme={tooglevalue.theme}
                            text={tooglevalue.message}
                            show={tooglevalue.modalshowval}
                            url={tooglevalue.url}
                        />
                        {/* ############## Snackbar  ###########################*/}

                        <div className='main_container' >
                            <div className=' d-flex justify-content-between pt-4 pb-3'>
                                <h2><span className='page-type-head1'>Assets <MdOutlineKeyboardArrowRight /></span> <span className='page-type-head2'>Edit Asset</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { localStorage.removeItem('newassetsno'); window.location.href = '/TotalNewAssets' }} >Back <RiArrowGoBackFill /></button>
                            </div>
                            <div className="card inner-card shadow1-silver rounded15  mt-3 py-2">
                                <article className="card-body" >
                                    <form autoComplete='off'>
                                        <ul className='px-2'>

                                            {/* #################### Device Detail  Box Start #####################*/}
                                            <li style={{ listStyle: "none" }}>
                                                <div className='cursor-pointer'>
                                                    <span>
                                                        <div className="link_text " onClick={handleClickDeviceDetail}>
                                                            {devicedetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                            &nbsp;Assets / Device Details &nbsp;
                                                            {devicedetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                        </div>
                                                    </span>
                                                </div>
                                                <div id='devicedivdetail' className='px-3'>
                                                    <div className="row mt-2">

                                                        <div className="col-md-4">
                                                            <label htmlFor='asset_type'>Asset Type <span className='text-danger'>*</span></label>
                                                            <select id='asset_type' className="form-select" onChange={handleToggleSoftware}>
                                                                <option value={data.asset_type} hidden>{data.asset_type}</option>
                                                                {
                                                                    assettypelist.map((item, index) => (
                                                                        <option key={index} value={item.asset_type}>{item.asset_type}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label htmlFor='assetetag'>Asset Tag <span className='text-danger'>*</span></label>
                                                            <input type="text" id='assetetag' className="form-control" placeholder='Auto generated' defaultValue={data.asset_tag} disabled />
                                                        </div>
                                                        <div className="col-md-4" id='softwarediv' style={{ display: "none" }}>
                                                            <label htmlFor='software'>Software <span className='text-danger'>*</span></label>
                                                            <select className="form-select" id='software'>
                                                                <option value={data.software} hidden>{data.software}</option>
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
                                                            <input type="text" id='serialno' className="form-control" defaultValue={data.serial_no} required />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor='location'>Location <span className='text-danger'>*</span></label>
                                                            <select className="form-select" id='location'>
                                                                <option value={data.location} hidden>{data.location}</option>
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
                                                                <option value={data.manufacture} hidden>{data.manufacture}</option>
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
                                                            <input type="text" id='model' className="form-control" defaultValue={data.model} required />
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label htmlFor='assetstatus'>Asset Status <span className='text-danger'>*</span></label>
                                                            <select className="form-select" id='assetstatus'>
                                                                <option value={data.asset_status} hidden>{data.asset_status} </option>
                                                                {
                                                                    assetstatuslist.map((item, index) => (
                                                                        <option key={index} value={item.asset_status}>{item.asset_status}</option>
                                                                    ))
                                                                }

                                                            </select>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor='description'>Description</label>
                                                            <input type="text" id='description' className="form-control" defaultValue={data.description} required />
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                            {/* #################### Device Detail  Box End #####################*/}

                                            {/* #################### Purchases Detail  Box Start ############### */}
                                            <li className='mt-3' style={{ listStyle: "none" }}>
                                                <div className='cursor-pointer'>
                                                    <div className="icon" ></div>
                                                    <span >
                                                        <div className="link_text " onClick={handleClickPurchasesDetail}>
                                                            {purchasesdetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                            &nbsp;Purchases Details &nbsp;
                                                            {purchasesdetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                        </div>
                                                    </span>
                                                </div>
                                                <div id='purchasesdivdetail' className='px-3' style={{ display: 'none' }}>
                                                    <div className="row mt-2">
                                                        <div className="col-md-4">
                                                            <label htmlFor='purchase_type'>Purchase Type <span className='text-danger'>*</span></label>
                                                            <select className="form-select" id='purchase_type' onChange={handleChnagePurType}>
                                                                <option value={data.purchase_type} hidden>{data.purchase_type}</option>
                                                                {
                                                                    purchaseslist.map((item, index) => (
                                                                        <option key={index} value={item.purchase_type}>{item.purchase_type}</option>
                                                                    ))
                                                                }

                                                            </select>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor='purchasesdate'>Purchase Date <span className='text-danger'>*</span></label>
                                                            <input type="date" id='purchasesdate' className="form-control" defaultValue={data.Assetdate} required />
                                                        </div>
                                                    </div>

                                                    <div className="row mt-3">
                                                        <div className="col-md-4">
                                                            <label htmlFor='company'>Company <span className='text-danger'>*</span></label>
                                                            <input type="text" id='company' className="form-control" defaultValue={data.company} required />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                            <select id='vendor' className="form-select">
                                                                <option value={data.vendor} hidden>{data.vendor}</option>
                                                                {
                                                                    vendorlist.map((item, index) => (
                                                                        <option key={index} value={item.vendor_name}>{item.vendor_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                        <div className="col-md-4" id='invoicenodiv' >
                                                            <label htmlFor='invoiceno'>Invoice No.<span className='text-danger'>*</span></label>
                                                            <input type="text" id='invoiceno' className="form-control" defaultValue={data.invoice_no} required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* #################### Purchases Detail  Box End ############### */}
                                            {/* #################### Other Detail  Box Start ############### */}

                                            <li className='mt-3' style={{ listStyle: "none" }}>
                                                <div className='cursor-pointer'>
                                                    <div className="icon" ></div>
                                                    <span>
                                                        <div className="link_text " onClick={handleClickOtherDetail}>
                                                            {otherdetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                            &nbsp;Other Details &nbsp;
                                                            {otherdetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                        </div>
                                                    </span>
                                                </div>
                                                <div id='otherdivdetail' className='px-3' style={{ display: 'none' }}>

                                                    <div className="row mt-2">
                                                        <div className="col-md-4" id='purchasespricediv' style={{ display: "none" }}>
                                                            <label htmlFor='purchaseprice'>Purchase Price <span className='text-danger'>*</span></label>
                                                            <input type="number" id='purchaseprice' className="form-control" defaultValue={data.purchases_price} required />
                                                        </div>
                                                        <div className="col-md-4" id='rentpermonthdiv' style={{ display: "none" }}>
                                                            <label htmlFor='rentpermonth'>Rent Per Month <span className='text-danger'>*</span></label>
                                                            <input type="number" id='rentpermonth' className="form-control" defaultValue={data.rent_per_month} required />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor='latestinventory'>Latest Inventory <span className='text-danger'>*</span></label>
                                                            <input type="date" id='latestinventory' className="form-control" defaultValue={data.latest_inventory} required />
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3">

                                                        <div className="col-md-4">
                                                            <label htmlFor='assetname'>Asset Name<span className='text-danger'>*</span></label>
                                                            <input type="text" id='assetname' className="form-control" defaultValue={data.asset_name} required />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label htmlFor='assetassign'>Asset Assign <span className='text-danger'>*</span></label>
                                                            <select id='assetassign' className="form-select" >
                                                                <option value={data.asset_assign_empid} hidden>{data.asset_assign}</option>
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
                                                        <textarea id='remark' className="form-control" rows='3' defaultValue={data.remarks}></textarea>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* #################### Other Detail  Box End ############### */}

                                        </ul>
                                        <div className="form-group mt-3 mx-4" >
                                            <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleUpdateData}>Update Assets</button>
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

export default EditAsset;
