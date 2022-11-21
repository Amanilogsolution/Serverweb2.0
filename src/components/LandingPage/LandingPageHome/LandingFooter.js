import { MdFacebook } from 'react-icons/md';
import { BsLinkedin,BsYoutube,BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const LandingFooter = () => {
    return (
        <>
        <div className='landingfooter_main'>
            <div className="landingfooter justify-content-around">
                 <div className="div_for_list">
                    <ul>
                        <li style={{fontWeight:"600",margin:"10px 0"}}>Company</li>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Locations</li>
                        <li>Suppliers</li>
                        <li>Investors</li>
                        <li>Newsrooms</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight:"600",margin:"10px 0"}}>Service and support</li>
                        <li>Service</li>
                        <li>Not Support portal</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight:"600",margin:"10px 0"}}>Resources</li>
                        <li>Customer stories</li>
                        <li>ServiceNow Research</li>
                        <li>Now on Now</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight:"600",margin:"10px 0"}}>My Account</li>
                        <li>Sign in</li>
                        <li>Register</li>
                    </ul>
                 </div>
                 </div>
                 {/* <hr/> */}
                 <div className='div_for_icon d-flex justify-content-center py-3'>
                    <h7>Connect with Us</h7>
                    <MdFacebook style={{fontSize:"30px",margin:"-7px 5px 0 5px",cursor:"pointer"}}/>
                    <BsLinkedin style={{fontSize:"24px",margin:"-4px 5px 0 5px",cursor:"pointer"}}/>
                    <BsYoutube style={{fontSize:"25px",margin:"-3px 5px 0 5px",cursor:"pointer"}}/>
                    <FaInstagramSquare style={{fontSize:"26px",margin:"-6px 5px 0 5px",cursor:"pointer"}}/>
                    <BsTwitter style={{fontSize:"25px",margin:"-7px 5px 0 5px",cursor:"pointer"}}/>
                 </div>
            </div>
        </>
    )
}

export default LandingFooter;