import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import {GetVendorContract, ActiveLocation, ActiveContractType, ActiveVendorCategory, ActiveVendorCode, ActiveVendSubCate } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'


function EditVendorCode() {
    const [data, setData] = useState({})
    const [refferenceno, setRefferenceno] = useState(false)
    const [locationlist, setLocationlist] = useState([])
    const [contractlist, setContractlist] = useState([])
    const [vendorcatlist, setVendorcatlist] = useState([])
    const [vendorsubcatlist, setVendorsubcatlist] = useState([])
    const [vendorlist, setVendorlist] = useState([])


    useEffect(() => {
        const fetchdata = async () => {
            const vendcontract= await GetVendorContract(sessionStorage.getItem('VendorContractSno'));
            console.log(vendcontract);
            setData(vendcontract[0])

            const tablelocation = await ActiveLocation();
            setLocationlist(tablelocation)

            const contract = await ActiveContractType();
            setContractlist(contract)

            const vendorCategory = await ActiveVendorCategory()
            setVendorcatlist(vendorCategory)

            const vendorall = await ActiveVendorCode();
            setVendorlist(vendorall)
        }
        fetchdata()
    }, [])
    const togglerecurrngdiv = (e) => {
        if (e.target.value === 'Recurring') {
            document.getElementById('recurringdiv').style.display = "block"
        }
        else {
            document.getElementById('recurringdiv').style.display = "none"
        }
    }
    const handleChangeRef = () => {

        if (!refferenceno) {
            document.getElementById('ref_no_input').style.display = "flex"
            document.getElementById('ref_no_lable').style.display = "none"
        }
        else {
            document.getElementById('ref_no_input').style.display = "none"
            document.getElementById('ref_no_lable').style.display = "flex"

        }
        setRefferenceno(!refferenceno)
    }

    const handleChangeCategory = async (e) => {

        const val = e.target.value;

        if (val === 'Internet' || val === 'Data' || val === 'Telecom') {
            console.log('if',)
            document.getElementById('link_id_div').style.display = 'block'
        }
        else {
            console.log('inELse')
            document.getElementById('link_id_div').style.display = 'none'

        }
        const subcate = await ActiveVendSubCate(e.target.value);
        setVendorsubcatlist(subcate)
    }


    const handleaddinsert = async (e) => {
        e.preventDefault();


    }

    const handleChangeVendorName = (e) => {
        setData({ ...data, vendor_name: e.target.value })
    }


    const handleChangeAddressLine1 = (e) => {
        setData({ ...data, company_address_line1: e.target.value })
    }

    const handleChangeAddressLine2 = (e) => {
        setData({ ...data, company_address_line2: e.target.value })
    }

    const handleChangeCompCity = (e) => {
        setData({ ...data, company_city: e.target.value })
    }
    const handleChangeCompState = (e) => {
        setData({ ...data, company_state: e.target.value })
    }
    const handleChangePinCode = (e) => {
        setData({ ...data, company_pin_code: e.target.value })
    }

    const handleChangeGst = (e) => {
        setData({ ...data, company_gst: e.target.value })
    }

    const handleChangeCompWebsite = (e) => {
        setData({ ...data, company_website: e.target.value })
    }
    const handleChangeCompEmail = (e) => {
        setData({ ...data, company_email: e.target.value })
    }


    return (
        <>
            <Sidebar >
                <div className='main_container pb-2' >
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Contract</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Vendor Contract</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorContract' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="contract-div" style={{ width: "90%" }}>
                        <div className="card inner-card">
                            <div className='card-header'>Vendor Company Details:</div>
                            <article className="card-body" >
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                        <select className="form-select" id='vendor'>
                                            <option value={data.vendor} hidden>{data.vendor}</option>
                                            {
                                                vendorlist.map((item, index) =>
                                                    <option key={index} value={item.vendor_name}>{item.vendor_name}</option>)
                                            }
                                        </select>

                                    </div>

                                    <div className="col-md-4" >
                                        <label htmlFor='company'>Company</label>
                                        <select className="form-select" id='company' required >
                                        <option value={data.company} hidden>{data.company}</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='location'>Location</label>
                                        <select className="form-select" id='location' required >
                                            <option value={data.location} hidden>{data.location}</option>
                                            {
                                                locationlist.map((item, index) =>
                                                    <option key={index}>{item.location_name}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4" >
                                        <label htmlFor='company_city'>Company City <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='company_city' required value={data.company_city}/>
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='company_state'>Company State <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='company_state' required value={data.company_state}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='comp_pincode'>Company pincode <span className='text-danger'>*</span></label>
                                        <input type="number" className="form-control" id='comp_pincode' value={data.company_pin_code}  required />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4" >
                                        <label htmlFor='comp_gst'>Company GST no.</label>
                                        <input type="text" className="form-control" id='comp_gst' value={data.company_gst}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='comp_website'>Company website</label>
                                        <input type="url" className="form-control" id='comp_website' required value={data.company_website}/>
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='comp_email'>Company Email Id <span className='text-danger'>*</span></label>
                                        <input type="email" className="form-control" id='comp_email' required value={data.company_email}/>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col">
                                        <label htmlFor='comp_addr1'>Company Address Line 1 <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='comp_addr1' required value={data.company_address_line1}/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor='comp_addr2'>Company Address Line 2 </label>
                                        <input type="text" className="form-control" id='comp_addr2' value={data.company_address_line2}/>
                                    </div>

                                </div>
                            </article>
                        </div>

                        <div className="card mt-3 inner-card">
                            <div className='card-header'>Other Details:</div>
                            <article className="card-body" >
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor='contract_type'>Type of Contract <span className='text-danger'>*</span></label>
                                        <select className="form-select" id='contract_type' onChange={togglerecurrngdiv}>
                                            <option value={data.type_of_contract} hidden>{data.type_of_contract}</option>
                                            {
                                                contractlist.map((item, index) =>
                                                    <option key={index} value={item.contract_type}>{item.contract_type}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='vendor_category'>Vendor Category <span className='text-danger'>*</span></label>
                                        <select type="text" className="form-select" id='vendor_category' required onChange={handleChangeCategory}>
                                            <option value={data.major_category} hidden>{data.major_category}</option>
                                            <option value='Internet'>Internet</option>
                                            <option value='Telecome'>Telecome</option>
                                            {
                                                vendorcatlist.map((item, index) =>
                                                    <option key={index} value={item.vendor_category}>{item.vendor_category}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='vendor_sub_category'>Vendor Sub Category <span className='text-danger'>*</span></label>
                                        <select type="text" className="form-select" id='vendor_sub_category' required >
                                            <option value={data.sub_category} hidden>{data.sub_category}</option>
                                            <option value='abc' >Abc</option>
                                            {
                                                vendorsubcatlist.map((item, index) =>
                                                    <option key={index} value={item.vendor_sub_category}>{item.vendor_sub_category}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='mt-2' id='recurringdiv' style={{ display: "none" }}>
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <label htmlFor='contact_plan_detail'>Contact Plan Detail <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='contact_plan_detail' required value={data.contatct_plain_details}/>
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='rate_per_month'>Rate Per Month <span className='text-danger'>*</span></label>
                                            <input type="number" className="form-control" id='rate_per_month' required value={data.rate_per_month}/>
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='contract_start_date'>Contract Start Date <span className='text-danger'>*</span></label>
                                            <input type="date" className="form-control" id='contract_start_date' required value={data.contract_start_date}/>
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4" >
                                            <label htmlFor='invoice_generation_date'>Invoice Generation Date <span className='text-danger'>*</span></label>
                                            <input type="date" className="form-control" id='invoice_generation_date' required value={data.invoice_generation_date}/>
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='billing_freq'>Billing Frequency <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='billing_freq' required value={data.billling_freq}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <label htmlFor='cust_ac_no'>Customer Account No <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='cust_ac_no' required value={data.customer_account_no}/>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center" >
                                        <label htmlFor='ref_no' className='col-md-4' >Reference Number <span className='text-danger'>*</span></label>
                                        <input title='Click if Reference Number is same as Account no' type="checkbox" checked={data.reference_no? true:false} id='ref_no' required style={{ height: "20px", width: "20px", marginRight: "20px" }} onChange={handleChangeRef} />

                                        <div className="col-md-7" >
                                            <p className='col text-danger' id='ref_no_lable'>Same as Account number </p>
                                            <input type="text" className="form-control" id='ref_no_input' required placeholder='Reference no.' value={data.reference_no}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">

                                    <div className="col-md-4" >
                                        <label htmlFor='payee_name'>Payee Name <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='payee_name' required value={data.payee_name}/>
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='help_desk_no'>HelpDesk Number <span className='text-danger'>*</span></label>
                                        <input type="number" className="form-control" id='help_desk_no' required value={data.help_desk_no}/>
                                    </div>
                                    <div className="col-md-3 mt-3 d-flex align-items-center" >
                                        <label htmlFor='tds' className='col-md-3' >TDS <span className='text-danger'>*</span></label>
                                        <input type="checkbox" className="" id='tds' style={{ height: "20px", width: "20px" }} checked={data.tds?true:false} />
                                    </div>
                                </div>
                                <div className="row " id='link_id_div' style={{ display: "none" }}>
                                    <div className="col-md-4" >
                                        <label htmlFor='link_id_no'>Link Id No <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='link_id_no' required value={data.link_id_no}/>
                                    </div>
                                </div>

                            </article>
                        </div>
                        <div className="form-group" >
                            <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Add Contract</button>
                        </div>
                    </div>

                </div>
            </Sidebar>
        </>
    )
}

export default EditVendorCode;