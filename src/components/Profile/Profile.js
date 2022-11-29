import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Profile.css'
import { HiUserCircle } from 'react-icons/hi';
import Qrcode from '../../image/qrcode.png';

const Profile = () => {
   return (
      <>
         <Sidebar>
            <div className='Profile_container'>

               <div className='pofile_card'>
                  <div className='profile'>
                     <div className='photo_sec'>
                        <h2 className='text-light' >Profile Details</h2>
                        <HiUserCircle className='profile_log' />
                     </div>
                     <div className='details'>
                        {/* <h4>Profile Details</h4> */}
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
                           <label> Security:- </label>
                           <div className='row mt-0' >
                              <div className='col-md-4 d-flex flex-column mx-5'>
                                 <label>TOTP Authentication</label>
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
               </div>
            </div>
         </Sidebar>
      </>
   )
}

export default Profile;
