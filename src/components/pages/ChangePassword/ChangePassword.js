import Sidebar from '../../Sidebar/Sidebar';
import React, { useState } from 'react';
import { MdOutlineArrowForward } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import {changePassword} from '../../../api/index'


function ChangePassword() {
    const [currentpass, setCurrentpass] = useState(false)
    const [newpass, setNewpass] = useState(false)
    const [cnfpass, setCnfpass] = useState(false)

    const handleToggleCurrentpass = (e) => {
        e.preventDefault();
        setCurrentpass(!currentpass)
    }
    const handleToggleNewpass = (e) => {
        e.preventDefault();
        setNewpass(!newpass)
    }
    const handleToggleCnfpass = (e) => {
        e.preventDefault();
        setCnfpass(!cnfpass)
    }
    const handleClick = async(e) =>{
        e.preventDefault()
        const userid = sessionStorage.getItem('UserId')
        const CurrentPassword = document.getElementById('current_password').value
        const UpdatePassword = document.getElementById('new-password').value
        const ConfirmPassword = document.getElementById('confirm-password').value

        if(UpdatePassword === ConfirmPassword){

        const result = await changePassword(userid,UpdatePassword,CurrentPassword)
        if(result == 'Password Changed'){
            alert('Password Updated')
            window.location.href='/Dashboard'
        }else{
            alert('Something Broke')

        }
    }
    else{
        alert('Current Password and Confirm Password Not Match')
    }

    }

    return (
        <>

            <Sidebar >
                <div className='main_container pb-2' >
                    <div className=' d-flex justify-content-between mx-5 pt-4 pb-3'>
                        <h2><span style={{ color: "rgb(123,108,200)" }}>Change Password</span> </h2>
                        <button className='btn btn-secondary btn ' onClick={() => { window.location.href = '/Dashboard' }} >Back <MdOutlineArrowForward /></button>
                    </div>
                    <div className="contract-div" style={{ width: "60%" }}>
                        <div className="card inner-card">
                            <header className="card-header" >Change Password</header>
                            <article className="card-body" >
                                <form className='px-3 d-flex flex-column align-items-center' autoComplete='off' >
                                    <div className="form-outline mb-0 col-md-5" >
                                        <label className="form-label" htmlFor="current_password">Current Password</label>
                                        <div className="input-group mb-0">
                                            <input type={currentpass ? "text" : "password"} className="form-control  form-control-lg" placeholder="Current password" id="current_password" required />
                                            <div className="input-group-append" >
                                                <span className="input-group-text h-100 w-100" onClick={handleToggleCurrentpass}>{currentpass ? <AiFillEye style={{ fontSize: "22px" }} /> : <AiFillEyeInvisible style={{ fontSize: "22px" }} />}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-0 col-md-5" >
                                        <label className="form-label" htmlFor="new-password">New Password</label>
                                        <div className="input-group mb-0">
                                            <input type={newpass ? "text" : "password"} id="new-password" className="form-control form-control-lg" placeholder="New Password" required />
                                            <div className="input-group-append" >
                                                <span className="input-group-text h-100 w-100" onClick={handleToggleNewpass}>{newpass ? <AiFillEye style={{ fontSize: "22px" }} /> : <AiFillEyeInvisible style={{ fontSize: "22px" }} />}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-0 col-md-5" >
                                        <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                                        <div className="input-group mb-0">
                                            <input type={cnfpass ? "text" : "password"} id="confirm-password" className="form-control form-control-lg" placeholder="Confirm Password" required />
                                            <div className="input-group-append" >
                                                <span className="input-group-text h-100 w-100" onClick={handleToggleCnfpass}>{cnfpass ? <AiFillEye style={{ fontSize: "22px" }} /> : <AiFillEyeInvisible style={{ fontSize: "22px" }} />}</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-group mt-3 w-100 d-flex justify-content-end " >
                                        <button type="submit" className="btn btn-voilet" id="subnitbtn" onClick={handleClick} >Change Password </button>
                                        <button type="reset" className="btn btn-secondary " style={{ margin: "0px 10px 0px 10px" }}>Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </Sidebar>

        </>
    )
}

export default ChangePassword;