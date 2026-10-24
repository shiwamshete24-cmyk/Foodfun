import React from 'react'

const Section4 = () => {
    
    return (
        <div>
            <div className='container-fluid  section-footer-bg text-center text-white mt-5'>
                <div className='row justify-content-center align-items-center section1-height2'>
                    <div className='col-12 col-md-8 col-lg-5 p-0'>
                        <h2 className='my-1 roboto-section1'>Book <span className='text-warning'>your</span> table</h2>
                        <h4 className='mb-5 roboto3-section3 fst-italic p-3'>Beast kind form divide night above let moveth bearing darkness.</h4>
                        <div class="row mb-5 justify-content-center align-items-center">
                            <div class="col-10 col-md-4 col-lg-4 my-2">
                                <input type="text" class="form-control p-2" placeholder="date" aria-label="First name" />
                            </div>
                            <div class="col-10 col-md-4 col-lg-4 my-2">
                                <input type="text" class="form-control p-2" placeholder="time" aria-label="Last name" />
                            </div>
                            <div class="col-10 col-md-4 col-lg-4 my-2">
                                <input type="text" class="form-control" placeholder="user name" aria-label="Last name" />
                            </div>
                        </div>
                        <button className='btn  btn-warning py-2 px-4 roboto3-section1'>BOOK TABLE</button>
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default Section4