import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Profile.css'
import { HiUserCircle } from 'react-icons/hi';
import Qrcode from '../../image/qrcode.png';

const Profile = () => {
   const handleToggleQr = () => {
      const checkboxval = document.getElementById('authdivbox').checked == true ? true : false;
      if (checkboxval) {
         document.getElementById('auth-qr').style.display = 'flex'
      }
      else {
         document.getElementById('auth-qr').style.display = 'none'

      }
   }
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
                              <input className="form-control" value="Rituraj Pankaj" disabled></input>
                           </div>
                           <div className='col-md-6'>
                              <label>Mobile</label>
                              <br />
                              <input className="form-control" value="+1 65224 72112" disabled></input>
                           </div>
                        </div>
                        <div className='row my-2'>
                           <div className='col-md-6'>
                              <label>Email</label>
                              <br />
                              <input className="form-control" value="xyz@awl.com" disabled></input>
                           </div>
                           <div className='col-md-6'>
                              <label>Address</label>
                              <br />
                              <input className="form-control" value="Gurugram" disabled></input>
                           </div>
                        </div>
                        <div className='row my-2'>
                           <div className='col-md-6'>
                              <label>Location</label>
                              <br />
                              <input className="form-control" value="Gurgaon HO" disabled></input>
                           </div>
                           <div className='col-md-6'>
                              <label>Organization Name</label>
                              <br />
                              <input className="form-control" value="Awl India" disabled></input>
                           </div>
                        </div>

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
