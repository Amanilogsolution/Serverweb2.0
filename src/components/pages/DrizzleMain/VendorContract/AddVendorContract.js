import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { InsertVendorContract, ActiveLocation, ActiveContractType, ActiveVendorCategory, ActiveVendorCode, ActiveVendSubCate, ActiveBillingFreq } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './vendorcontract.css'
import LoadingPage from '../../../LoadingPage/LoadingPage';

function AddVendorContract() {
    const [loading, setLoading] = useState(false)

    const [todatdate, setTodaydate] = useState('')
    const [refferenceno, setRefferenceno] = useState(false)
    const [locationlist, setLocationlist] = useState([])
    const [contractlist, setContractlist] = useState([])
    const [vendorcatlist, setVendorcatlist] = useState([])
    const [vendorsubcatlist, setVendorsubcatlist] = useState([])
    const [vendorlist, setVendorlist] = useState([])
    const [billingfreqlist, setBillingfreqlist] = useState([])


    useEffect(() => {
        const fetchdata = async () => {
            const tablelocation = await ActiveLocation();
            setLocationlist(tablelocation)
            console.log(tablelocation)

            const contract = await ActiveContractType();
            setContractlist(contract)

            const vendorCategory = await ActiveVendorCategory()
            setVendorcatlist(vendorCategory)

            const vendorall = await ActiveVendorCode();
            setVendorlist(vendorall)

            const billing = await ActiveBillingFreq();
            setBillingfreqlist(billing)
            console.log(billing)
        }
        fetchdata();
        todaydate()
        setLoading(true)


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
            document.getElementById('link_id_div').style.display = 'block'
        }
        else {
            document.getElementById('link_id_div').style.display = 'none'

        }
        const subcate = await ActiveVendSubCate(e.target.value);
        setVendorsubcatlist(subcate)
    }


    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        let vendor = document.getElementById('vendor').value;
        let vendorlast = vendor.indexOf("sno");
        vendorlast = vendorlast - 1
        vendor = vendor.slice(0, vendorlast)
        const vendor_contract_id = vendor.substring(0, 3).toUpperCase() + 'Cont' + Math.floor(Math.random() * 10000);

        const type_of_contract = document.getElementById('contract_type').value;
        const major_category = document.getElementById('vendor_category').value;
        const sub_category = document.getElementById('vendor_sub_category').value;
        const location = document.getElementById('location').value;
        const company = document.getElementById('company').value;
        const customer_account_no = document.getElementById('cust_ac_no').value;
        let reference_no = document.getElementById('ref_no_input').value;
        let contact_plain_details = document.getElementById('contact_plan_detail').value;
        let rate_per_month = document.getElementById('rate_per_month').value;
        let contract_start_date = document.getElementById('contract_start_date').value;
        let invoice_generation_date = document.getElementById('invoice_generation_date').value;
        let billing_freq = document.getElementById('billing_freq').value;
        const payee_name = document.getElementById('payee_name').value;
        const tds = document.getElementById('tds').checked ? true : false;
        let link_id_no = document.getElementById('link_id_no').value;
        const help_desk_no = document.getElementById('help_desk_no').value;
        const user_id = sessionStorage.getItem('UserId')


        if (!vendor || !company || !type_of_contract || !major_category || !sub_category ||
            !customer_account_no || !payee_name || !help_desk_no) {
            alert("Please enter Mandatory field")
            setLoading(true)
        }
        else {
            const refno = document.getElementById('ref_no').checked ? true : false;
            let errorcount = 0;

            if (type_of_contract === 'Recurring') {
                if (!contact_plain_details || !rate_per_month || !contract_start_date || !invoice_generation_date || !billing_freq) {
                    errorcount = errorcount + 1
                    alert('Please fill the Contract Detail')
                    setLoading(true)
                }
            }
            else {
                contact_plain_details = '';
                rate_per_month = '';
                contract_start_date = '';
                invoice_generation_date = '';
                billing_freq = ''
            }
            if (!refno) {
                if (!reference_no) {
                    errorcount = errorcount + 1
                    alert('Please Enter the Reference no')
                    setLoading(true)
                }
            }
            else {
                reference_no = customer_account_no;
            }
            if (major_category === 'Internet' || major_category === 'Data' || major_category === 'Telecom') {
                if (!link_id_no) {
                    errorcount = errorcount + 1
                    alert('Please Enter the Link id no')
                    setLoading(true)
                }
            }
            else { link_id_no = '' }

            if (errorcount === 0) {
                const callapi = await InsertVendorContract(vendor_contract_id, vendor, type_of_contract,
                    major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
                    rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
                    help_desk_no, user_id)
                if (callapi === 'Added') {
                    alert('Data Added');
                    window.location.href = './TotalVendorContract'
                }
                else {
                    alert('Server not Response')
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
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Contract</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Add Vendor Contract</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/TotalVendorContract' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <div className='card-header'>Vendor Company Details:</div>
                                    <article className="card-body" >
                                        <form className='px-3' autoComplete='off'>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                                    <select className="form-select" id='vendor' >
                                                        <option value='' hidden>Select Vendor</option>
                                                        {
                                                            vendorlist.map((item, index) =>
                                                                <option key={index} value={[`${item.vendor_name},sno${item.sno}`]}>{item.vendor_name}</option>)
                                                        }
                                                    </select>

                                                </div>

                                                <div className="col-md-4" >
                                                    <label htmlFor='company'>Company <span className='text-danger'>*</span></label>
                                                    <input className="form-control" id='company' required />
                                                </div>

                                                <div className="col-md-4">
                                                    <label htmlFor='location'>Location</label>
                                                    <select className="form-select" id='location' required >
                                                        <option value='' hidden>Select Location</option>
                                                        {
                                                            locationlist.map((item, index) =>
                                                                <option key={index}>{item.location_name}</option>
                                                            )
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label htmlFor='contract_type'>Type of Contract <span className='text-danger'>*</span></label>
                                                    <select className="form-select" id='contract_type' onChange={togglerecurrngdiv}>
                                                        <option value='' hidden>Select Contract Type</option>
                                                        {
                                                            contractlist.map((item, index) =>
                                                                <option key={index} value={item.contract_type}>{item.contract_type}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor='vendor_category'>Vendor Category <span className='text-danger'>*</span></label>
                                                    <select type="text" className="form-select" id='vendor_category' required onChange={handleChangeCategory}>
                                                        <option value='' hidden>Select Category</option>
                                                        {
                                                            vendorcatlist.map((item, index) =>
                                                                <option key={index} value={item.vendor_category}>{item.vendor_category}</option>)
                                                        }
                                                    </select>
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='vendor_sub_category'>Vendor Sub Category <span className='text-danger'>*</span></label>
                                                    <select type="text" className="form-select" id='vendor_sub_category' required >
                                                        <option value='' hidden>Select Sub Category</option>
                                                        {
                                                            vendorsubcatlist.map((item, index) =>
                                                                <option key={index} value={item.vendor_sub_category}>{item.vendor_sub_category}</option>)
                                                        }
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-2">
                                                <div className="col-md-4">
                                                    <label htmlFor='cust_ac_no'>Customer Account No <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='cust_ac_no' required />
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center" >
                                                    <label htmlFor='ref_no' className='col-md-4' >Reference Number <span className='text-danger'>*</span></label>
                                                    <input title='Click if Reference Number is same as Account no' type="checkbox" checked={!refferenceno ? true : false} id='ref_no' required style={{ height: "20px", width: "20px", marginRight: "20px" }} onChange={handleChangeRef} />

                                                    <div className="col-md-7" >
                                                        <p className='col text-danger' id='ref_no_lable'>Same as Account number </p>
                                                        <input type="text" className="form-control" id='ref_no_input' required placeholder='Reference no.' style={{ display: "none" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-2">

                                                <div className="col-md-4" >
                                                    <label htmlFor='payee_name'>Payee Name <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='payee_name' required />
                                                </div>
                                                <div className="col-md-4" >
                                                    <label htmlFor='help_desk_no'>HelpDesk Number <span className='text-danger'>*</span></label>
                                                    <input type="number" className="form-control" id='help_desk_no' required />
                                                </div>
                                                <div className="col-md-3 mt-3 d-flex align-items-center" >
                                                    <label htmlFor='tds' className='col-md-3' >TDS </label>
                                                    <input type="checkbox" className="" id='tds' style={{ height: "20px", width: "20px" }} />
                                                </div>
                                            </div>

                                            <div className='mt-2' id='recurringdiv' style={{ display: "none" }}>
                                                <div className="row ">
                                                    <div className="col-md-4">
                                                        <label htmlFor='contact_plan_detail'>Contract Plan Detail <span className='text-danger'>*</span></label>
                                                        <input type="text" className="form-control" id='contact_plan_detail' required />
                                                    </div>
                                                    <div className="col-md-4" >
                                                        <label htmlFor='rate_per_month'>Rate Per Month <span className='text-danger'>*</span></label>
                                                        <input type="number" className="form-control" id='rate_per_month' required />
                                                    </div>
                                                    <div className="col-md-4" >
                                                        <label htmlFor='contract_start_date'>Contract Start Date <span className='text-danger'>*</span></label>
                                                        <input type="date" className="form-control" id='contract_start_date' defaultValue={todatdate} required />
                                                    </div>
                                                </div>

                                                <div className="row mt-2">
                                                    <div className="col-md-4" >
                                                        <label htmlFor='invoice_generation_date'>Invoice Generation Date <span className='text-danger'>*</span></label>
                                                        <input type="date" className="form-control" id='invoice_generation_date' defaultValue={todatdate} required />
                                                    </div>
                                                    <div className="col-md-4" >
                                                        <label htmlFor='billing_freq'>Billing Frequency <span className='text-danger'>*</span></label>
                                                        <select className="form-select" id='billing_freq' required >
                                                            <option value='' hidden>Select Billing Frequency</option>
                                                            {
                                                                billingfreqlist.map((item, index) =>
                                                                    <option key={index} value={item.billing_freq}>{item.billing_freq}</option>)
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-3 " id='link_id_div' style={{ display: "none" }}>
                                                <div className="col-md-4" >
                                                    <label htmlFor='link_id_no'>Link Id No <span className='text-danger'>*</span></label>
                                                    <input type="text" className="form-control" id='link_id_no' required />
                                                </div>
                                            </div>
                                            
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleaddinsert}>Add Contract</button>&nbsp; &nbsp;
                                                <button type="reset" className="btn btn-secondary ">Reset</button>
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

export default AddVendorContract;