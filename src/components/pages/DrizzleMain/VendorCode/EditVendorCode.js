import Sidebar from '../../../Sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { GetVendorCode, UpdateVendorCode,TotalCountry ,TotalState,TotalCity} from '../../../../api'
import LoadingPage from '../../../LoadingPage/LoadingPage';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import { MdOutlineArrowForward, MdOutlineKeyboardArrowRight, MdAddCircle } from 'react-icons/md'
import { FaMinusCircle } from 'react-icons/fa'


function EditVendorCode() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const [vendordetail, setVendordetail] = useState(true)
    const [persondetail, setPersondetail] = useState(false)

    const [countrylist, setCountrylist] = useState([]);
    const [statelist, setStatelist] = useState([]);
    const [citylist, setCitylist] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const tabledata = await GetVendorCode(sessionStorage.getItem('VendorCodeSno'))
            setData(tabledata[0])
            console.log(tabledata[0])
            const totalCountry = await TotalCountry();
            setCountrylist(totalCountry)

            setLoading(true)
            if (tabledata[0].venodr_portal === 'true') {
                document.getElementById('vendor_portal').checked = true
            }

        }
        fetchdata()

    }, [])


    const handleaddinsert = async (e) => {
        e.preventDefault();
        setLoading(false)
        const vendor_code = document.getElementById('vendor_code').value;
        const vendor_name = document.getElementById('vendor_name').value;
        const comp_gst = document.getElementById('comp_gst').value;
        const comp_website = document.getElementById('comp_website').value;
        const comp_email = document.getElementById('comp_email').value;
        const comp_phone = document.getElementById('comp_phone').value;
        
        let comp_country = document.getElementById('comp_country');
        comp_country = comp_country.options[comp_country.selectedIndex].text;

        let comp_state = document.getElementById('comp_state');
        comp_state = comp_state.options[comp_state.selectedIndex].text;

        const comp_city = document.getElementById('comp_city').value;

        const comp_addr1 = document.getElementById('comp_addr1').value;
        const comp_addr2 = document.getElementById('comp_addr2').value;
        const comp_pincode = document.getElementById('comp_pincode').value;
        const vendor_portal = document.getElementById('vendor_portal').checked ? true : false;
        const contact_person = document.getElementById('contact_person').value;
        const contact_no = document.getElementById('contact_no').value;
        const contact_email = document.getElementById('contact_email').value;
        const user_id = sessionStorage.getItem('UserId');
        const sno = sessionStorage.getItem('VendorCodeSno')

        if (!vendor_code || !vendor_name || !comp_addr1 || !comp_city || !comp_state || !comp_pincode || !comp_email) {
            alert("Please enter Mandatory field")
            setLoading(true)
        }
        else {
            const result = await UpdateVendorCode(sno, vendor_code, vendor_name, comp_addr1, comp_addr2,
                 comp_city, comp_state, comp_pincode, comp_gst, comp_website, comp_email,
                  vendor_portal,comp_phone,comp_country,contact_person,contact_no,contact_email, user_id);

            if (result === 'Updated') {
                alert('Data Updated ')
                sessionStorage.removeItem('VendorCodeSno');
                window.location.href = './TotalVendorCode'
            }
            else {
                alert("Server Error");
                setLoading(true)
            }
        }

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



    const handleToggleVendorDetail = (e) => {
        e.preventDefault();
        if (vendordetail) {
            document.getElementById('vendordetaildiv').style.display = 'none'
            document.getElementById('persondetaildiv').style.display = 'block'
            setPersondetail(!persondetail)
        }
        else {
            document.getElementById('vendordetaildiv').style.display = 'block'
            document.getElementById('persondetaildiv').style.display = 'none'
            setPersondetail(!persondetail)
        }
        setVendordetail(!vendordetail)
    }

    const handleTogglePersonDetail = (e) => {
        e.preventDefault();
        if (persondetail) {
            document.getElementById('persondetaildiv').style.display = 'none'
            document.getElementById('vendordetaildiv').style.display = 'block'
            setVendordetail(!vendordetail)
        }
        else {
            document.getElementById('persondetaildiv').style.display = 'block'
            document.getElementById('vendordetaildiv').style.display = 'none'
            setVendordetail(!vendordetail)
        }
        setPersondetail(!persondetail)
    }

    const handleGetState = async (e) => {
        const result = await TotalState(e.target.value)
        console.log(result)
        setStatelist(result)
    }
    const handleGetCity = async (e) => {
        const result = await TotalCity(e.target.value)
        console.log(result)
        setCitylist(result)

    }


    return (
        <>
            {
                loading ?
                    <Sidebar >
                        <div className='main_container pb-2' >
                            <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                                <h2><span style={{ color: "rgb(123,108,200)" }}>Vendor Code</span> <MdOutlineKeyboardArrowRight /><span style={{ fontSize: "25px" }}>Edit Vendor Code</span> </h2>
                                <button className='btn btn-secondary btn ' onClick={() => { sessionStorage.removeItem('VendorCodeSno'); window.location.href = '/TotalVendorCode' }} >Back <MdOutlineArrowForward /></button>
                            </div>
                            <div className="contract-div" style={{ width: "90%" }}>
                                <div className="card inner-card">
                                    <header className="card-header" >
                                        Edit Vendor Code
                                    </header>
                                    <article className="card-body" >
                                    <form className='px-3' autoComplete='off'>
                                            <ul>

                                                {/* #################### Device Detail  Box Start #####################*/}
                                                <li>
                                                    <div>
                                                        <span style={{ display: "flex", cursor: "pointer" }} onClick={handleToggleVendorDetail}>
                                                            <div className="link_text " >
                                                                {vendordetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                                &nbsp;Vendor / Company Details &nbsp;
                                                                {vendordetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className='mx-3' id='vendordetaildiv'>
                                                        <div className="row mt-1">
                                                            <div className="col-md-4">
                                                                <label htmlFor='vendor_code'>Vendor Code <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" id='vendor_code' defaultValue={data.vendor_code} required />
                                                            </div>
                                                            <div className="col-md-4" >
                                                                <label htmlFor='vendor_name'>Vendor Name <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" id='vendor_name' defaultValue={data.vendor_name}  required />
                                                            </div>
                                                            <div className="col-md-4" >
                                                                <label htmlFor='comp_email'>Company Email Id <span className='text-danger'>*</span></label>
                                                                <input type="email" className="form-control" id='comp_email' defaultValue={data.company_email} required />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-2">
                                                            <div className="col-md-4">
                                                                <label htmlFor='comp_website'>Company website</label>
                                                                <input type="url" className="form-control" id='comp_website' defaultValue={data.company_website} required />
                                                            </div>

                                                            <div className="col-md-4" >
                                                                <label htmlFor='comp_gst'>Company GST no.</label>
                                                                <input type="text" className="form-control" id='comp_gst' defaultValue={data.company_gst}/>
                                                            </div>
                                                            <div className="col-md-4" >
                                                                <label htmlFor='comp_phone'>Phone no.<span className='text-danger'>*</span></label>
                                                                <input type="number" className="form-control" id='comp_phone' defaultValue={data.company_phone}/>
                                                            </div>

                                                        </div>
                                                        <div className='row mt-2'>
                                                            <div className="col-md-4">
                                                                <label htmlFor='comp_country'>Country<span className='text-danger'>*</span></label>
                                                                <select type="text" className="form-select" id='comp_country' required onChange={handleGetState}>
                                                                    <option value={data.company_country}>{data.company_country}</option>
                                                                    {
                                                                        countrylist.map((item, index) => (
                                                                            <option key={index} value={item.country_id}>{item.country_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                            </div>
                                                            <div className="col-md-4" >
                                                                <label htmlFor='comp_state'> State <span className='text-danger'>*</span></label>
                                                                <select className="form-select" id='comp_state' required
                                                                    onChange={handleGetCity}
                                                                >
                                                                    <option value={data.company_state}>{data.company_state}</option>
                                                                    {
                                                                        statelist.length ?
                                                                            statelist.map((item, index) => (
                                                                                <option key={index} value={item.state_id}>{item.state_name}</option>
                                                                            ))
                                                                            : <option value=''> Please Select Country</option>
                                                                    }
                                                                </select>

                                                            </div>
                                                            <div className="col-md-4">
                                                                <label htmlFor='comp_city'> City <span className='text-danger'>*</span></label>
                                                                <select type="text" className="form-select" id='comp_city' required >
                                                                    <option value={data.company_city}>{data.company_city}</option>
                                                                    {
                                                                        citylist.length ?
                                                                            citylist.map((item, index) => (
                                                                                <option key={index} value={item.city_name}>{item.city_name}</option>
                                                                            ))
                                                                            : <option value=''> Please Select State</option>
                                                                    }
                                                                </select>

                                                            </div>
                                                        </div>

                                                        <div className="row mt-2">
                                                            <div className="col-md-4">
                                                                <label htmlFor='comp_pincode'> Pincode <span className='text-danger'>*</span></label>
                                                                <input type="number" className="form-control" id='comp_pincode' defaultValue={data.company_pin_code} required />
                                                            </div>
                                                            <div className=" col-md-2 d-flex align-items-center" >
                                                                <label htmlFor='vendor_portal' className='col' >Vendor Portal</label>
                                                                <input type="checkbox" className="" id='vendor_portal' style={{ height: "20px", width: "20px" }} />
                                                            </div>
                                                        </div>

                                                        <div className='row mt-2'>
                                                            <div className="col ">
                                                                <label htmlFor='comp_addr1'>Company Address Line 1 <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" id='comp_addr1' defaultValue={data.company_address_line1}  required />
                                                            </div>

                                                            <div className="col">
                                                                <label htmlFor='comp_addr2'>Company Address Line 2</label>
                                                                <input type="text" className="form-control" defaultValue={data.company_address_line2}  id='comp_addr2' />
                                                            </div>
                                                        </div>


                                                    </div>
                                                </li>

                                                <li>
                                                    <div>
                                                        <span style={{ display: "flex", cursor: "pointer" }} onClick={handleTogglePersonDetail}>
                                                            <div className="link_text mt-2" >
                                                                {persondetail ? <FaMinusCircle /> : <MdAddCircle />}
                                                                &nbsp;Contact Person Details &nbsp;
                                                                {persondetail ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                                            </div>
                                                        </span>
                                                    </div>

                                                    <div className='mx-3' id='persondetaildiv' style={{ display: 'none' }}>
                                                        <div className="row mt-1">
                                                            <div className="col-md-4">
                                                                <label htmlFor='contact_person'>Name <span className='text-danger'>*</span></label>
                                                                <input type="text" className="form-control" id='contact_person' defaultValue={data.contact_person_name}  required />
                                                            </div>
                                                            <div className="col-md-4" >
                                                                <label htmlFor='contact_no'>Contact no <span className='text-danger'>*</span></label>
                                                                <input type="number" className="form-control" id='contact_no' defaultValue={data.contact_person_phone}  required />
                                                            </div>
                                                            <div className="col-md-4" >
                                                                <label htmlFor='contact_email'> Email Id <span className='text-danger'>*</span></label>
                                                                <input type="email" className="form-control" id='contact_email' defaultValue={data.contact_person_email}  required />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="form-group mt-3" >
                                                <button type="submit" className="btn btn-voilet " id="subnitbtn" onClick={handleaddinsert}>Edit Vendor Code </button>
                                                <button type="reset" className="btn btn-secondary " style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
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

export default EditVendorCode;