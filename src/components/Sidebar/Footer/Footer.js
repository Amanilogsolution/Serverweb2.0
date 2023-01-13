import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer mt-4 d-flex justify-content-between px-5">
               <h6 >© 2022 Drizzle. All rights reserved</h6> 
               <div className=''>
                <Link to='' className='text-decoration-none'>Drizzle</Link>
                <Link to='' className='mx-3 text-decoration-none'>Contact Us</Link>
                <Link to='' className='text-decoration-none'>Upgrade</Link>
               </div> 
            </div>

        </>
    )
}

export default Footer;