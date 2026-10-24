import React from 'react'
import '../Components/Mysection1.css'

const Section1 = () => {
    return (
        <div className='container-fluid my-5 section1-bg text-center text-white my-5'>
            <div className='row justify-content-center align-items-center section1-height'>
                <div className='col-12 col-md-8 col-lg-8'>
                    <h2 className='my-3 roboto-section1'>Natural ingredients and testy food</h2>
                    <h4 className='my-3 roboto2-section1'>some trendy and popular courses offerd</h4>
                    <button className='btn btn-warning border border-1 border-warning rounded-0 py-2 px-4 my-4 roboto3-section1'>RESERVATION</button>
                </div>
            </div>
        </div>
    )
}

export default Section1