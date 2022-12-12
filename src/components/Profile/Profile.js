import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Profile.css'
import { HiUserCircle } from 'react-icons/hi';
import Qrcode from '../../image/qrcode.png';
import {getUserdetails} from '../../api/index'

const Profile = () => {
   const [details,setDetails] = useState({})
   useEffect(()=>{
      const fetchdata = async () =>{
         const org = sessionStorage.getItem('Database')
         const Userdetails = sessionStorage.getItem('UserId')

         const Userdata = await getUserdetails(org,Userdetails)
         setDetails(Userdata)
      }
      fetchdata();

   },[])
   return (
      <>
         <Sidebar>
            <div className='Profile_container bg-light d-flex align-items-center'>

               {/* <div className='pofile_card'> */}
                  <div className='profile d-flex'>
                     <div className='photo_sec d-flex  py-3 text-light position-relative'>
                        <h2 >Profile Details</h2>
                        <HiUserCircle className='profile_log ' />
                     </div>
                     <div className='details px-5 py-3'>
                        <form>
                           <div className='row my-2'>
                              <div className='col-md-6'>
                                 <label>Name</label>
                                 <br />
                                 <input className="form-control" value={details.employee_name} disabled></input>
                              </div>
                              <div className='col-md-6'>
                                 <label>Mobile</label>
                                 <br />
                                 <input className="form-control" value={details.employee_number} disabled></input>
                              </div>
                           </div>
                           <div className='row my-2'>
                              <div className='col-md-6'>
                                 <label>Email</label>
                                 <br />
                                 <input className="form-control" value={details.employee_email} disabled></input>
                              </div>
                              <div className='col-md-6'>
                                 <label>Address</label>
                                 <br />
                                 <input className="form-control" value={details.location} disabled></input>
                              </div>
                           </div>
                           <div className='row my-2'>
                              <div className='col-md-6'>
                                 <label>Location</label>
                                 <br />
                                 <input className="form-control" value={details.location} disabled></input>
                              </div>
                              <div className='col-md-6'>
                                 <label>Organization Name</label>
                                 <br />
                                 <input className="form-control" value={details.company} disabled></input>
                              </div>
                           </div>

                           <hr />
                           <label> TOTP Authentication:- </label>
                           <div className='row mt-0 auth-div' >
                              <div className='auth-inner-div col-md-4 d-flex flex-column'>
                                 <div className='d-flex align-items-center'>
                                    <img src={Qrcode} alt='Qr code for totp' height='100' width='100' />&nbsp;
                                    <input type='text' className="form-control " placeholder='Enter Token' />&nbsp;
                                    <button className='btn btn-voilet' style={{ height: '35px' }}>Verify</button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               {/* </div> */}
            </div>
         </Sidebar>
      </>
   )
}

export default Profile;
