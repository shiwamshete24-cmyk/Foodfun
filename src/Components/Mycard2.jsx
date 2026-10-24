import React from 'react'

const Mycard2 = ({mydata}) => {
    return (
        <div>
            <div className='conatiner-fluid'>

                <div className='container margin1'>

                    <div className='row'>
                        <div className='col-12 text-center my-5'>
                            <h2 className='roboto-section1'>Our <span className='text-warning '>food</span> update</h2>
                            <p className='roboto-serif5'>Beast kind form divide night above let moveth bearing darkness.</p>
                        </div>
                        <div className='col-12'>
                            <div className='row justify-content-center align-items-center'>
                                {


                                    mydata.map((item, index) => {
                                        return (

                                            <div className='col-12 col-md-6 col-lg-4 '>
                                                <div key={index} className='Delicious-style mystyle1 '>
                                                   <div className='overflow-hidden'><img src={item.img} alt="" className='img-fluid mystyle1' width={423} /></div>
                                                    <div className='p-3 me-5  '>
                                                        <div className='d-flex justify-content-start align-items-center mt-3    '>
                                                            <h4 className='roboto-serif5 pe-5'>Admin<i class="fa-regular fa-user"></i></h4>
                                                            <h4 className='roboto-serif5 ps-5'><i class="fa-solid fa-calendar-day"></i>{item.date}</h4>
                                                        </div>
                                                        <h3 className='my-3 pe-5 roboto-serif4 '>{item.title}</h3>
                                                        <p className=' roboto-serif5 pe-5'>{item.info}</p>
                                                        <h5 className='roboto3-section1'>READ MORE<i class="fa-solid fa-arrow-right"></i></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        </div>
    )
}

export default Mycard2