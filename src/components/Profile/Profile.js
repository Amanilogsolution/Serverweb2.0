import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../LandingPage/Register/organisation.css'

import Qrcode from '../../image/qrcode.png';
import { getUserdetails, updateUserdetails } from '../../api/index'
import Snackbar from '../../Snackbar/Snackbar';
import LoadingPage from '../LoadingPage/LoadingPage';
import { RiUserFill,RiBuilding4Fill } from 'react-icons/ri';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail,MdSecurity } from 'react-icons/md';
import {ImLocation } from 'react-icons/im';
import { IoMdHome } from 'react-icons/io';
import './Profile.css'

const Profile = () => {
   const [details, setDetails] = useState({})
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
         const Userdetails = localStorage.getItem('UserId')

         const Userdata = await getUserdetails(org, Userdetails)
         setDetails(Userdata)
         setLoading(true)

      }
      fetchdata();

   }, [])

   const handleadddevice = async (e) => {
      e.preventDefault();
      setLoading(false)

      document.getElementById('subnitbtn').disabled = true

      const org = localStorage.getItem('Database')
      const employee_name = document.getElementById('employee_name').value
      const employee_number = document.getElementById('employee_number').value
      const employee_email = document.getElementById('employee_email').value
      const location = document.getElementById('location').value
      const company = document.getElementById('company').value
      const user_id = localStorage.getItem('UserId')

      if (!employee_name) {
         setLoading(true)

         document.getElementById('subnitbtn').disabled = false
         setDatas({ ...datas, message: "Please enter Name", title: "Error", type: "warning", route: "#", toggle: "true" })
         document.getElementById('snackbar').style.display = "block"

      }
      else {
         setLoading(true)
         const result = await updateUserdetails(org, employee_name, location, employee_email, employee_number, company, user_id)
         if (result === 'Updated') {
            setDatas({ ...datas, message: "Profile Updated", title: "success", type: "success", route: "/Dashboard", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
         }
         else {
            document.getElementById('subnitbtn').disabled = false
            setDatas({ ...datas, message: "Server Error", title: "Error", type: "danger", route: "/Profile", toggle: "true" })
            document.getElementById('snackbar').style.display = "block"
         }
      }
   }

   const handleToggleQr = () => {
      const checkboxval = document.getElementById('authdivbox').checked == true ? true : false;
      if (checkboxval) {
         document.getElementById('auth-qr').style.display = 'flex'
      }
      else {
         document.getElementById('auth-qr').style.display = 'none'

      }
   }


   const handlechangeempno = (e) => {
      if (e.target.value.length === 11) return false;
      setDetails({ ...details, employee_number: e.target.value })
   }


   return (
      <>
         {
            loading ?
               <Sidebar>
                  {/* ######################### Sanckbar start ##################################### */}

                  <div id="snackbar" style={{ display: "none" }}>
                     <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                  </div>
                  {/* ######################### Sanckbar End ##################################### */}

                  <div className='profile_container' >
                    <div className='d-flex' style={{padding:"0 113px"}}><h2 style={{color:"white"}}>Profile</h2><h2 style={{margin:"0 14px"}}>Details</h2></div>
                   <div className='profile_div'>
                     <div className='profile_photo'>
                        <RiUserFill style={{fontSize:"125px",color:"white",background:"gray",borderRadius:"70px",padding:"27px"}}/>
                        <h4 className='mt-4'>{details.employee_name}</h4>
                     </div>
                     <div className='profile_content'>
                        <div className='profile_details'>
                            <label><BsFillTelephoneFill style={{margin:"0 5px",color:'#7c7c7c'}}/>Mobile</label>
                            <p>{details.employee_number}</p>
                            <label><MdEmail style={{margin:"-3px 5px 0",fontSize:"20px",color:'#7c7c7c'}}/>Email</label>
                            <p>{details.employee_email}</p>
                            <label><IoMdHome style={{margin:"-5px 5px 0",fontSize:"20px",color:'#7c7c7c'}}/>Address</label>
                            <p>{details.location}</p>
                            <label><ImLocation style={{margin:"-5px 5px 0",fontSize:"20px",color:'#7c7c7c'}}/>Location</label>
                            <p>{details.location}</p>
                            <label><RiBuilding4Fill style={{margin:"-5px 5px 0",fontSize:"18px",color:'#7c7c7c'}}/>Organization Name</label>
                            <p>{details.company}</p>
                        </div>
                        <div className='profile_scan'>
                        <label htmlFor='authdivbox'><MdSecurity style={{margin:"-5px 5px 0",fontSize:"18px",color:'#7c7c7c'}}/> TOTP Authentication </label>&nbsp;
                              <input type='checkbox' id='authdivbox' style={{ height: '20px', width: '20px' }} onChange={handleToggleQr} />
                              <div className='row mt-0 auth-div' id='auth-qr' style={{ display: 'none', transition: '0.5s all linear' }}>
                                 <div className='auth-inner-div col-md-4 d-flex flex-column'>
                                    <div className='d-flex align-items-center'>
                                       <img src={Qrcode} alt='Qr code for totp' height='100' width='100' />&nbsp;
                                       <input type='text' className="form-control " placeholder='Enter Token' />&nbsp;
                                       <button className='btn btn-voilet' style={{ height: '35px' }}>Verify</button>
                                    </div>
                                 </div>
                              </div>
                        </div>
                     </div>
                   </div>







                     {/* <div className='profile d-flex rounded15'>
                        <div className='photo_sec d-flex  py-3 text-light position-relative'>
                           <h2 className='photo_sec-title'>Profile Details</h2>
                           <HiUserCircle className='profile_log position-absolute' />
                        </div>
                        <div className='details bg-white px-5 py-3'>
                           <form>
                              <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label htmlFor='employee_name'>Name</label>
                                    <input className="form-control" id='employee_name' defaultValue={details.employee_name} ></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label htmlFor='employee_number'>Mobile</label>
                                    <input className="form-control" id='employee_number' value={details.employee_number} onChange={handlechangeempno}></input>
                                 </div>
                              </div>
                              <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label htmlFor='employee_email'>Email</label>
                                    <input className="form-control" id='employee_email' defaultValue={details.employee_email}></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label htmlFor='Address'>Address</label>
                                    <input className="form-control" id="Address" value={details.location} disabled></input>
                                 </div>
                              </div>
                              <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label htmlFor='location'>Location</label>
                                    <input className="form-control" id="location" value={details.location} disabled></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label htmlFor='company'>Organization Name</label>
                                    <input className="form-control" id="company" value={details.company} disabled></input>
                                 </div>
                              </div>

                              <hr />
                              <label htmlFor='authdivbox'> TOTP Authentication </label>&nbsp;
                              <input type='checkbox' id='authdivbox' style={{ height: '20px', width: '20px' }} onChange={handleToggleQr} />
                              <div className='row mt-0 auth-div' id='auth-qr' style={{ display: 'none', transition: '0.5s all linear' }}>
                                 <div className='auth-inner-div col-md-4 d-flex flex-column'>
                                    <div className='d-flex align-items-center'>
                                       <img src={Qrcode} alt='Qr code for totp' height='100' width='100' />&nbsp;
                                       <input type='text' className="form-control " placeholder='Enter Token' />&nbsp;
                                       <button className='btn btn-voilet' style={{ height: '35px' }}>Verify</button>
                                    </div>
                                 </div>
                              </div>

                              <div className="form-group mt-3 d-flex justify-content-end " >
                                 <button type="submit" className="btn btn-voilet " id="subnitbtn"
                                    onClick={handleadddevice}
                                 >Update</button>
                              </div>

                           </form>
                        </div>
                     </div> */}
                  </div>
               </Sidebar >
               : <LoadingPage />
         }
      </>
   )
}

export default Profile;
