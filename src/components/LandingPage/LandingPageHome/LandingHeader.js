import './landing.css'
import {Link} from 'react-router-dom'
import logo from '../../../image/drizzle_logo.jpg'

const LandingHeader = () => {
    return (
        <>
            <div className="landingnav">
                    <div className='brand_name'>
                    <img style={{width:"120px"}} src={logo} alt='Drizzle Logo'/>
                    </div>
                    <ul className='nav-list'>
                        <li>
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li>
                            <a className='nav-link' href='/#about'>About</a>
                        </li>
                        {/* <li>
                            <Link className='nav-link'  to='/Login'>Login</Link>
                        </li> */}
                        <li>
                            <Link className='btn btn-voilet' to='/Signin' >Signin</Link>
                        </li>
                    </ul>
            </div>

        </>
    )
}

export default LandingHeader;