const LandingFooter = () => {
    return (
        <>
            <div className="landingfooter text-white">
                <div className='copy_write'>
                    Copyright © 2020. All rights reserved.
                </div>
                <ul className='footer-list text-white d-flex'>
                    <li>
                        <a className='footer-link' href='/'>Home</a>
                    </li>
                    <li>
                        <a className='footer-link' href='/#about'>About</a>
                    </li>
                    <li>
                        <a className='footer-link' href='/Signin'>Login</a>
                    </li>
                    {/* <li>
                        <a className='footer-link' href='/Signup'>Signup</a>
                    </li> */}
                </ul>
            </div>
        </>
    )
}

export default LandingFooter;