import React from 'react'
import '../Components/Myfooter.css'

const Footer = () => {
    return (
        <div>
            <div className='container-fluid section-footer-bg-color  text-white'>
                <div className='container'>
                    <div className='row justify-content-between align-items-center section1-height1 text-align' >
                        <div className='col-12 col-md-4 col-lg-4 text-align'>
                            <img src="src/assets/logo2.png" alt="" className='img-fluid' />
                            <p className='roboto-serif8 my-4 pe-5'>Which morning fourth great won't <br /> is to fly bearing man.Called unto <br /> shall seed, deep, herb set seed land <br />divide after over first creeping. </p>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 pe-4'>
                            <h2 className='footer-font my-4 text-warning'>contact us</h2>
                            <p className='roboto-serif8 text-align'><i class="fa-sharp fa-solid fa-location-dot me-2 "></i>1234 Some St San Francisco, CA 94102, US <br />1.800.123.4567</p>
                            <p className='roboto-serif8 text-align'><i class="fa-sharp fa-solid fa-phone me-2"></i>(123) 456 78 90</p>
                            <p className='roboto-serif8 text-align'><i class="fa-sharp fa-solid fa-envelope me-2"></i>support@axiomthemes.com</p>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4 text-align'>
                            <h2 className='footer-font my-4 text-warning'>opening hours</h2>
                            <p className='roboto-serif8'>Monday ...................... Closed</p>
                            <p className='roboto-serif8'>Tue-Fri .............. 10 am - 12 pm</p>
                            <p className='roboto-serif8'>Sat-Sun ............... 8 am - 11 pm</p>
                            <p className='roboto-serif8'>Holidays ............. 10 am - 12 pm</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className='container-fluid mybg-dark text-white text-center py-5'>
                <div className='container'>
                    <div className='row justify-content-between align-items-center copyright-height'>

                        <div className='col-12 col-md-6 col-lg-6  roboto-serif5'>
                            Copyright ©2025 All rights reserved | This template is made with <i class="fa-solid fa-heart text-danger"></i> by <span className='text-primary'>shiwam shete</span>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6'>
                            <div className='roboto-serif5'><span className='text-info'>Follow Us </span>
                                <span><i class="fa-brands fa-facebook-f ms-3"></i></span>
                                <span><i class="fa-brands fa-twitter text-white ms-3 "></i></span>
                                <span><i class="fa-brands fa-google ms-3"></i></span>
                                <span><i class="fa-brands fa-linkedin-in ms-3"></i></span>
                                <span><i class="fa-brands fa-instagram ms-3 "></i></span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer