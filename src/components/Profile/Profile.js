import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Profile.css'
import { HiUserCircle } from 'react-icons/hi';
import Qrcode from '../../image/qrcode.png';
import { getUserdetails, updateUserdetails } from '../../api/index'
import Snackbar from '../../Snackbar/Snackbar';
import LoadingPage from '../LoadingPage/LoadingPage';

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
         const org = sessionStorage.getItem('Database')
         const Userdetails = sessionStorage.getItem('UserId')

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

      const org = sessionStorage.getItem('Database')
      const employee_name = document.getElementById('employee_name').value
      const employee_number = document.getElementById('employee_number').value
      const employee_email = document.getElementById('employee_email').value
      const location = document.getElementById('location').value
      const company = document.getElementById('company').value
      const user_id = sessionStorage.getItem('UserId')

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
   const handlechangeempname = (e) => {
      setDetails({ ...details, employee_name: e.target.value })
   }

   const handlechangeempno = (e) => {
      if (e.target.value.length === 11) return false;
      setDetails({ ...details, employee_number: e.target.value })
   }
   const handlechangeempemail = (e) => {
      setDetails({ ...details, employee_email: e.target.value })
   }

   return (
      <>
         {
            loading ?
               <Sidebar>
                  <div id="snackbar" style={{ display: "none" }}>
                     <Snackbar message={datas.message} title={datas.title} type={datas.type} Route={datas.route} toggle={datas.toggle} />
                  </div>

                  <div className='Profile_container bg-light d-flex align-items-center'>

                     {/* <div className='pofile_card'> */}
                     <div className='profile d-flex'>
                        <div className='photo_sec d-flex  py-3 text-light position-relative'>
                           <h2 className='mt-4'>Profile Details</h2>
                           <HiUserCircle className='profile_log ' />
                        </div>
                        <div className='details px-5 py-3'>
                           <form>
                              <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label>Name</label>
                                    <br />
                                    <input className="form-control" id='employee_name' value={details.employee_name} onChange={handlechangeempname} ></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label>Mobile</label>
                                    <br />
                                    <input className="form-control" id='employee_number' value={details.employee_number} onChange={handlechangeempno}></input>
                                 </div>
                              </div>
                              <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label>Email</label>
                                    <br />
                                    <input className="form-control" id='employee_email' value={details.employee_email} onChange={handlechangeempemail} ></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label>Address</label>
                                    <br />
                                    <input className="form-control" id="Address" value={details.location} disabled></input>
                                 </div>
                              </div>
                              <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label>Location</label>
                                    <br />
                                    <input className="form-control" id="location" value={details.location} disabled></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label>Organization Name</label>
                                    <br />
                                    <input className="form-control" id="company" value={details.company} disabled></input>
                                 </div>
                              </div>
                              {/* </div> */}

                              <hr />
                              <label> TOTP Authentication </label>&nbsp;
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
                     </div>
                     {/* </div> */}
                  </div>
               </Sidebar >
               : <LoadingPage />
         }
      </>
   )
}

export default Profile;
