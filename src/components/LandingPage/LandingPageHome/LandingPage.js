import LandingFooter from './LandingFooter'
import LandingHeader from './LandingHeader';
import './landing.css'
import { MdOutlinePrivacyTip, MdOutlineManageAccounts, MdAccountTree, MdOutlinePlaylistAddCheck, MdArrowUpward } from 'react-icons/md'

import Landingimg from '../../../image/landingimg.svg'
import Services from '../../../image/services.svg'

const LandingPage = () => {
    window.onscroll = function () { scrollfunction() }

    const scrollfunction = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById('toptopbtn').style.display = 'block'
        }
        else {
            document.getElementById('toptopbtn').style.display = 'none'

        }
    }

    return (
        <>
            <div className='landingContainer'>
                <LandingHeader />
                <div className='landingContent' >
                    <section className='topbottomdiv' id='topdiv'>
                        <header className="masthead pb-4" >
                            <div className="container px-5">
                                <div className="row gx-5 align-items-center">
                                    <div className="col-lg-5" data-aos="fade-right"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                                        <div className="mb-5 mb-lg-1 text-center text-lg-start">
                                            <h3 className="display-3 lh-1 mb-3">Assets management System.</h3>
                                            <p className="lead fw-normal text-muted mb-5">Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
                                            <div className="d-flex flex-column flex-lg-row align-items-center">
                                                <button className='btn btn-voilet' onClick={() => { window.location.href = './signup' }}>Get Start</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                                        <div className="masthead-device-mockup">

                                            <div className="device-wrapper">
                                                <div className="device" >
                                                    <div className="screen ">

                                                        <img src={Landingimg} className='landingimg' alt='Landing img'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </section>



                    <section className='portfoliodiv'>
                        <div className="comp_name" >
                            <div className="comp1 text-center "><h3>AWL</h3></div>
                            <div className="comp2 text-center "><h3>ILOGSOLUTION</h3></div>
                            <div className="comp3 text-center "><h3>Dox and Box</h3></div>
                            <div className="comp4 text-center "><h3>ILOGSOLUTION</h3></div>
                        </div>

                    </section>

                    <section className='about pt-5' id='about' >
                        <header className="abouthead pt-2">
                            <div className="container px-0" >
                                <div className="row align-items-center pb-3" >
                                    <div className="col-lg-5" data-aos="fade-left"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                                        <div className="aboutimgdiv"  >
                                            <img className='aboutimg' src={Services} alt='' />
                                        </div>
                                    </div>
                                    <div className="col-lg-5" data-aos="fade-right" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                                        <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                            <h3 className="display-5 lh-1 mb-3">About our Services</h3>
                                            <p className="lead fw-normal text-muted mb-5">With data-driven insights from over 200 bread-making facilities, Grupo Bimbo raises quality control on a global scale.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </header>
                    </section>

                    <section className='photos_content'>
                        <div className='photos_content1'>
                            
                            <div className='content_'>
                                <h1>The Platform of platforms</h1>
                                <p>Behind every great experience is a great workflow. As the foundation for all digital workflows, the Now Platform® connects people, functions, and systems across your organization.</p>
                                <button className='btn btn-voilet'>Get Details</button>
                            </div>
                            <div className='img_div'></div>
                        </div>
                    </section>

                    <section className='photos_content'>
                        <div className='photos_content1'>
                        <div className='img_div2'></div>
                            <div className='content_'>
                                <h1>Personalize your value acceleration</h1>
                                <p>Maximize your investment with ServiceNow Impact. Realize value faster with experts on demand, premium support, and preventive tools to guide your digital transformation.</p>
                                <button className='btn btn-voilet'>Get Details</button>
                            </div>
                            
                        </div>
                    </section>

                    <section className='photos_content'>
                        <div className='photos_content1'>
                            
                            <div className='content_'>
                                <h1>Unleash the power of IT</h1>
                                <p>Transform your business with digital IT workflows. Modernize your operations to optimize productivity, cost, and resilience with a single platform for IT.</p>
                                <button className='btn btn-voilet'>Get Details</button>
                            </div>
                            <div className='img_div3'></div>
                        </div>
                    </section>


                    <section className='chooseus' data-aos="fade-up" data-aos-offset="200"
                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                        <header className="chooseus pt-5">
                            <div className="container px-4 pb-5">
                                <h2 className='text-center'>Why Choose Us</h2>
                                <p className="lead fw-normal text-muted text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias!</p>
                                <div className='parent_choose_div m-auto pt-3'>
                                    <div className="chid_choose_div chid_choose_div1  pt-1">
                                        <div className='choose_icon'>
                                            <div className="choose_inner_icon mt-1"><MdOutlineManageAccounts className='icons' /></div>
                                        </div>
                                        <div className='choose_content'>
                                            <h5 className='choose_title mb-0'>Title</h5>
                                            <p>Lorem ipsum dolor sit amet .</p>
                                        </div>
                                    </div>
                                    <div className="chid_choose_div chid_choose_div2  pt-1">
                                        <div className='choose_icon '>
                                            <div className="choose_inner_icon mt-1"><MdAccountTree className='icons' /></div>
                                        </div>
                                        <div className='choose_content'>
                                            <h5 className='choose_title mb-0'>Title</h5>
                                            <p>Lorem ipsum dolor sit amet .</p>
                                        </div>
                                    </div>
                                    <div className="chid_choose_div chid_choose_div3   pt-1">
                                        <div className='choose_icon '>
                                            <div className="choose_inner_icon mt-1"><MdOutlinePlaylistAddCheck className='icons' /></div>
                                        </div>
                                        <div className='choose_content'>
                                            <h5 className='choose_title mb-0'>Title</h5>
                                            <p>Lorem ipsum dolor sit amet .</p>
                                        </div>
                                    </div>
                                    <div className="chid_choose_div chid_choose_div4   pt-1">
                                        <div className='choose_icon '>
                                            <div className="choose_inner_icon mt-1"><MdOutlineManageAccounts className='icons' /></div>
                                        </div>
                                        <div className='choose_content'>
                                            <h5 className='choose_title mb-0'>Title</h5>
                                            <p>Lorem ipsum dolor sit amet .</p>
                                        </div>
                                    </div>
                                    <div className="chid_choose_div chid_choose_div5   pt-1">
                                        <div className='choose_icon '>
                                            <div className="choose_inner_icon mt-1"><MdOutlineManageAccounts className='icons' /></div>
                                        </div>
                                        <div className='choose_content'>
                                            <h5 className='choose_title mb-0'>Title</h5>
                                            <p>Lorem ipsum dolor sit amet .</p>
                                        </div>
                                    </div>
                                    <div className="chid_choose_div chid_choose_div6   pt-1">
                                        <div className='choose_icon '>
                                            <div className="choose_inner_icon mt-1  "><MdOutlinePrivacyTip className='icons' /></div>
                                        </div>
                                        <div className='choose_content ml-2'>
                                            <h5 className='choose_title mb-0'>Privacy Policy</h5>
                                            <p>Lorem ipsum dolor sit amet .</p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </header>
                    </section>

                    <section className='pricing'>
                        <header className="pricinghead pt-3" >
                            <div className="container px-4 pb-5">
                                <h2 className='text-center'>Pricing</h2>
                                <p className="lead fw-normal text-muted text-center mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, molestias!</p>
                                <div className="pricing_cards px-2 m-auto text-center" >
                                    <div className="card pricing_card pricing_card1 "
                                        data-aos="fade-right" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">

                                        <div className="card-header">
                                            Regular
                                        </div>
                                        <div className='card-body'>
                                            <h2>Free</h2>
                                            <ul>
                                                <li>1 Organisation</li>
                                                <li>5 Location</li>
                                                <li>10 Users</li>
                                                <li>50 Assets</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button className='btn btn-voilet btn-sm'>Start Now</button>
                                        </div>
                                    </div>

                                    <div className="pricing_card card pricing_card2"
                                        data-aos="fade-up" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                                        <div className="card-header">
                                            Medium
                                        </div>
                                        <div className='card-body'>
                                            <h2>$250</h2>
                                            <ul className=''>
                                                <li>1 Organisation</li>
                                                <li>5 Location</li>
                                                <li>10 Users</li>
                                                <li>50 Assets</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button className='btn btn-voilet btn-sm'>Upgrad Now</button>
                                        </div>
                                    </div>

                                    <div className="pricing_card card pricing_card3"
                                        data-aos="fade-left" data-aos-offset="200"
                                        data-aos-delay="50" data-aos-duration="1000" data-aos-once="true">
                                        <div className="card-header">
                                            Primium
                                        </div>
                                        <div className='card-body'>
                                            <h2>$500</h2>
                                            <ul>
                                                <li>1 Organisation</li>
                                                <li>5 Location</li>
                                                <li>10 Users</li>
                                                <li>50 Assets</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">
                                            <button className='btn btn-voilet btn-sm'>Upgrad Now</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </header>
                    </section>

                    <button id='toptopbtn' className='btn text-white btn-voilet position-fixed' onClick={() => { document.body.scrollTop = 0; document.documentElement.scrollTop = 0 }} style={{
                        fontSize: '25px', bottom: '40px', right: '40px',
                    }}><MdArrowUpward /></button>

                </div>
                <LandingFooter />
            </div>

        </>
    )
}

export default LandingPage;