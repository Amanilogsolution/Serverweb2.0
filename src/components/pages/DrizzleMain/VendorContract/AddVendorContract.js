import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { InsertVendorContract, ActiveLocation, ActiveContractType, ActiveVendorCategory, ActiveVendorCode, ActiveVendSubCate } from '../../../../api'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './vendorcontract.css'

function AddVendorContract() {
    const [refferenceno, setRefferenceno] = useState(false)
    const [locationlist, setLocationlist] = useState([])
    const [contractlist, setContractlist] = useState([])
    const [vendorcatlist, setVendorcatlist] = useState([])
    const [vendorsubcatlist, setVendorsubcatlist] = useState([])
    const [vendorlist, setVendorlist] = useState([])
    const [pincodeCount, setPincodeCount] = useState()


    useEffect(() => {
        const fetchdata = async () => {
            const tablelocation = await ActiveLocation();
            setLocationlist(tablelocation)

            const contract = await ActiveContractType();
            setContractlist(contract)

            const vendorCategory = await ActiveVendorCategory()
            setVendorcatlist(vendorCategory)

            const vendorall = await ActiveVendorCode();
            console.log(vendorall)
            setVendorlist(vendorall)
        }
        fetchdata();

        document.getElementById('ref_no').checked = true;
        document.getElementById('ref_no_input').style.display = "none"
        // document.getElementById('link_id_div').style.display = 'none'

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
        const vendor_contract_id = 'vendId';
        const vendor = document.getElementById('vendor').value;
        const company_address_line1 = document.getElementById('comp_addr1').value;
        const company_address_line2 = document.getElementById('comp_addr2').value;
        const company_city = document.getElementById('company_city').value;
        const company_state = document.getElementById('company_state').value;
        const company_pin_code = document.getElementById('comp_pincode').value;
        const company_gst = document.getElementById('comp_gst').value;
        const company_website = document.getElementById('comp_website').value;
        const company_email = document.getElementById('comp_email').value;
        const type_of_contract = document.getElementById('contract_type').value;
        const major_category = document.getElementById('vendor_category').value;
        const sub_category = document.getElementById('vendor_sub_category').value;
        const location = document.getElementById('location').value;
        const company = document.getElementById('company').value;
        const customer_account_no = document.getElementById('cust_ac_no').value;
        const reference_no = document.getElementById('ref_no_input').value;
        const contact_plain_details = document.getElementById('contact_plan_detail').value;
        const rate_per_month = document.getElementById('rate_per_month').value;
        const contract_start_date = document.getElementById('contract_start_date').value;
        const invoice_generation_date = document.getElementById('invoice_generation_date').value;
        const billing_freq = document.getElementById('billing_freq').value;
        const payee_name = document.getElementById('payee_name').value;
        const tds = document.getElementById('tds').checked ? true : false;
        const link_id_no = document.getElementById('link_id_no').value;
        const help_desk_no = document.getElementById('help_desk_no').value;
        const user_id = sessionStorage.getItem('UserId')



        // console.log(vendor_contract_id, vendor, company_address_line1, company_address_line2,
        //     company_city, company_state, company_pin_code, company_gst, company_website, company_email, type_of_contract,
        //     major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
        //     rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
        //     help_desk_no, user_id)


        if (!vendor || !company_address_line1 || !company_city || !company_state || !company_pin_code || !company_email ||
            !type_of_contract || !major_category || !sub_category || !customer_account_no || !payee_name || !tds || !help_desk_no) {
            alert('In if')

        }
        else {
            const refno = document.getElementById('ref_no').checked ? true : false;
            let errorcount = 0;

            if (type_of_contract === 'Recurring') {
                if (!contact_plain_details || !rate_per_month || !contract_start_date || !invoice_generation_date || !billing_freq) {
                    errorcount = errorcount + 1
                    alert('In else if if Recurring')
                }
            }
            if (!refno) {
                if (!reference_no) {
                    errorcount = errorcount + 1
                    alert('In else if if reference_no ')
                }
            }
            if (major_category === 'Internet' || major_category === 'Data' || major_category === 'Telecom') {
                if (!link_id_no) {
                    errorcount = errorcount + 1
                    alert('In else if if major_category')
                }
            }

            if (errorcount === 0) {
                const callapi = await InsertVendorContract(vendor_contract_id, vendor, company_address_line1, company_address_line2,
                    company_city, company_state, company_pin_code, company_gst, company_website, company_email, type_of_contract,
                    major_category, sub_category, location, company, customer_account_no, reference_no, contact_plain_details,
                    rate_per_month, contract_start_date, invoice_generation_date, billing_freq, payee_name, tds, link_id_no,
                    help_desk_no, user_id)
                    console.log('callapi',callapi)
            }

        }
    }
    return (
        <>
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
                                <div className="row">
                                    <div className="col-md-4">
                                        <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                        <select className="form-select" id='vendor'>
                                            <option value='' hidden>Select Vendor</option>
                                            {
                                                vendorlist.map((item, index) =>
                                                    <option key={index} value={item.vendor_name}>{item.vendor_name}</option>)
                                            }
                                        </select>

                                    </div>

                                    <div className="col-md-4" >
                                        <label htmlFor='company'>Company</label>
                                        <select className="form-select" id='company' required >
                                        </select>
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
                                <div className="row mt-2">
                                    <div className="col-md-4" >
                                        <label htmlFor='company_city'>Company City <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='company_city' required />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='company_state'>Company State <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='company_state' required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='comp_pincode'>Company pincode <span className='text-danger'>*</span></label>
                                        <input type="number" className="form-control" id='comp_pincode' value={pincodeCount} onChange={(e) => {
                                            if (e.target.value.length === 7) return false; else { setPincodeCount(e.target.value) }
                                        }} required />
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4" >
                                        <label htmlFor='comp_gst'>Company GST no.</label>
                                        <input type="text" className="form-control" id='comp_gst' />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor='comp_website'>Company website</label>
                                        <input type="url" className="form-control" id='comp_website' required />
                                    </div>
                                    <div className="col-md-4" >
                                        <label htmlFor='comp_email'>Company Email Id <span className='text-danger'>*</span></label>
                                        <input type="email" className="form-control" id='comp_email' required />
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col">
                                        <label htmlFor='comp_addr1'>Company Address Line 1 <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='comp_addr1' required />
                                    </div>
                                    <div className="col">
                                        <label htmlFor='comp_addr2'>Company Address Line 2 </label>
                                        <input type="text" className="form-control" id='comp_addr2' />
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
                                            <option hidden>Select Contract Type</option>
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
                                            <option >Internet</option>
                                            <option >Abc</option>
                                            <option >Telecome</option>
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
                                            <input type="text" className="form-control" id='contact_plan_detail' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='rate_per_month'>Rate Per Month <span className='text-danger'>*</span></label>
                                            <input type="number" className="form-control" id='rate_per_month' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='contract_start_date'>Contract Start Date <span className='text-danger'>*</span></label>
                                            <input type="date" className="form-control" id='contract_start_date' required />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4" >
                                            <label htmlFor='invoice_generation_date'>Invoice Generation Date <span className='text-danger'>*</span></label>
                                            <input type="date" className="form-control" id='invoice_generation_date' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='billing_freq'>Billing Frequency <span className='text-danger'>*</span></label>
                                            <input type="text" className="form-control" id='billing_freq' required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-4">
                                        <label htmlFor='cust_ac_no'>Customer Account No <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='cust_ac_no' required />
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center" >
                                        <label htmlFor='ref_no' className='col-md-4' >Reference Number <span className='text-danger'>*</span></label>
                                        <input title='Click if Reference Number is same as Account no' type="checkbox" className="" id='ref_no' required style={{ height: "20px", width: "20px", marginRight: "20px" }} onChange={handleChangeRef} />

                                        <div className="col-md-7" >
                                            <p className='col text-danger' id='ref_no_lable'>Same as Account number </p>
                                            <input type="text" className="form-control" id='ref_no_input' required placeholder='Reference no.' />
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
                                        <label htmlFor='tds' className='col-md-3' >TDS <span className='text-danger'>*</span></label>
                                        <input type="checkbox" className="" id='tds' style={{ height: "20px", width: "20px" }} />
                                    </div>
                                </div>
                                <div className="row " id='link_id_div' style={{display:"none"}}>
                                    <div className="col-md-4" >
                                        <label htmlFor='link_id_no'>Link Id No <span className='text-danger'>*</span></label>
                                        <input type="text" className="form-control" id='link_id_no' required />
                                    </div>
                                </div>

                            </article>
                        </div>
                        <div className="form-group" >
                            <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Add Contract</button>
                        </div>
                    </div>


                    {/* <div className="contract-div" style={{ width: "90%" }}>
                        <div className="card ">
                            <div className='card-header'>Vendor Company Details:</div>
                            <article className="card-body" >
                                <form className='px-3' autoComplete='off'>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor='vendor'>Vendor <span className='text-danger'>*</span></label>
                                            <select type="text" className="form-select" id='vendor'>
                                                <option>Test</option>
                                                <option>Test</option>
                                                <option>Test</option>
                                            </select>

                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='company_city'>Company City</label>
                                            <input type="text" className="form-control" id='company_city' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='company_state'>Company State</label>
                                            <input type="text" className="form-control" id='company_state' required />
                                        </div>
                                    </div>

                                    <div className="row pt-2">
                                        <div className="col">
                                            <label htmlFor='comp_addr1'>Company Address Line 1</label>
                                            <input type="text" className="form-control" id='comp_addr1' required />
                                        </div>
                                        <div className="col">
                                            <label htmlFor='comp_addr2'>Company Address Line 2 </label>
                                            <input type="text" className="form-control" id='comp_addr2' />
                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor='comp_pincode'>Company pincode</label>
                                            <input type="text" className="form-control" id='comp_pincode' required />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='comp_gst'>Company GST no.</label>
                                            <input type="text" className="form-control" id='comp_gst' />
                                        </div>
                                    </div>


                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor='comp_website'>Company website</label>
                                            <input type="url" className="form-control" id='comp_website' required />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='comp_email'>Company Email Id</label>
                                            <input type="email" className="form-control" id='comp_email' required />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor='contract_type'>Type of Contract</label>
                                            <input type="url" className="form-control" id='contract_type' required />
                                        </div>

                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor='vendor_category'>Vendor Category</label>
                                            <input type="url" className="form-control" id='vendor_category' required />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='vendor_sub_category'>Vendor Sub Category</label>
                                            <input type="email" className="form-control" id='vendor_sub_category' required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor='location'>Location</label>
                                            <input type="url" className="form-control" id='location' required />
                                        </div>
                                        <div className="col-md-6" >
                                            <label htmlFor='company'>Company</label>
                                            <input type="email" className="form-control" id='company' required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label htmlFor='cust_ac_no'>Customer Account No</label>
                                            <input type="url" className="form-control" id='cust_ac_no' required />
                                        </div>
                                        <div className="col-md-6 d-flex align-items-center" >
                                            <label htmlFor='ref_no' className='col-md-4' >Reference Number</label>
                                            <input type="checkbox" className="" id='ref_no' required style={{ height: "20px", width: "20px", marginRight: "20px" }} />

                                            <div className="col-md-7" >
                                                <input type="url" className="form-control" id='cust_ac_no' required />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <label htmlFor='contact_plan_detail'>Contact Plan Detail</label>
                                            <input type="url" className="form-control" id='contact_plan_detail' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='rate_per_month'>Rate Per Month</label>
                                            <input type="email" className="form-control" id='rate_per_month' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='contract_start_date'>Contract Start Date</label>
                                            <input type="date" className="form-control" id='contract_start_date' required />
                                        </div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-md-4" >
                                            <label htmlFor='invoice_generation_date'>Invoice Generation Date</label>
                                            <input type="date" className="form-control" id='invoice_generation_date' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='billing_freq'>Billing Frequency</label>
                                            <input type="email" className="form-control" id='billing_freq' required />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-3 mt-3 d-flex align-items-center" >
                                            <label htmlFor='vendor_portal' className='col-md-3' >TDS</label>
                                            <input type="checkbox" className="" id='vendor_portal' style={{ height: "20px", width: "20px" }} />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='company'>Payee Name</label>
                                            <input type="email" className="form-control" id='company' required />
                                        </div>
                                        <div className="col-md-4" >
                                            <label htmlFor='link_id_no'>Link Id No</label>
                                            <input type="email" className="form-control" id='link_id_no' required />
                                        </div>
                                    </div>
                                    <div className="row mt-2 col-md-4">
                                        <label htmlFor='help_desk_no'>HelpDesk Number</label>
                                        <input type="number" className="form-control" id='help_desk_no' required />
                                    </div>



                                    <div className="form-group" >
                                        <button type="submit" className="btn btn-voilet float-right mb-4 mt-3" id="subnitbtn" onClick={handleaddinsert}>Submit</button>
                                        <button type="reset" className="btn btn-secondary ml-2 mb-4 mt-3" style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div> */}
                    {/* </div> */}
                </div>
            </Sidebar>
        </>
    )
}

export default AddVendorContract;