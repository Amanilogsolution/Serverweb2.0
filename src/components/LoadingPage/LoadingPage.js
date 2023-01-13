import './LoadingPage.css'
import Dlogo from '../../image/drizzle_logo.png'
const LoadingPage = () => {

    return (
        <>
            <div className="loading-container">
                <div className='loading-inner-logo'>
                    <span  className='loading-inner-span '>
                    <img src={Dlogo} alt='Drizzle Logo'  className='loading-inner-img' style={{border:'2px solid red',width:'170px'}}/></span>
                   <h3 className='border border-danger'>Loading...</h3> 
                </div>
            </div>

        </>
    )
}

export default LoadingPage;