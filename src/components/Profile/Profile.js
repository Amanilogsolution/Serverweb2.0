import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Profile.css'
import { HiUserCircle } from 'react-icons/hi';

export default function Profile() {
  return (
    <>
      <Sidebar>
        <div className='Profile_container'>
           <h2 className='my-4'>Profile Details</h2>
           <div className='pofile_card'>
                <div className='profile'>
                    <div className='photo_sec'>
                        <HiUserCircle className='profile_log'/>
                    </div>
                    <div className='details'>
                        <h4>Profile Details</h4>
                        <form>
                            <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label>Name</label>
                                    <br/>
                                    <input class="form-control" value="Rituraj Pankaj" disabled></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label>Mobile</label>
                                    <br/>
                                    <input class="form-control" value="+1 65224 72112" disabled></input>
                                 </div>
                            </div>
                            <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label>Email</label>
                                    <br/>
                                    <input class="form-control" value="xyz@awl.com" disabled></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label>Address</label>
                                    <br/>
                                    <input class="form-control"value="Gurugram" disabled></input>
                                 </div>
                            </div>
                            <div className='row my-2'>
                                 <div className='col-md-6'>
                                    <label>Location</label>
                                    <br/>
                                    <input class="form-control" value="Gurgaon HO" disabled></input>
                                 </div>
                                 <div className='col-md-6'>
                                    <label>Organization Name</label>
                                    <br/>
                                    <input class="form-control" value="Awl India" disabled></input>
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
