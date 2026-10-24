import React from 'react'

const DeliciousCards = ({ mydata }) => {
    return (
        <div className='conatiner-fluid Delicious-card my-5'>

            <div className='container'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-5 mb-5'>
                                <h2 className='roboto-serif6 px-1'><span className='text-warning fst-italic roboto-serif6'>we serve</span> <br /> delicious food</h2>
                                <p className='roboto-serif5 px-1 mb-5 mt-4'>They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='row justify-content-center align-items-center'>
                            {


                                mydata.map((item, index) => {
                                    return (

                                        <div className='col-12 col-md-6 col-lg-4'>
                                            <div key={index} className='Delicious-style mystyle1'>
                                                <div className='overflow-hidden'><img src={item.img} alt="" className='img-fluid mystyle1' width={422} /></div>
                                                <div className='px-3'>
                                                    <div className='d-flex justify-content-start align-items-center my-3'>
                                                        <h3 className='my-3 pe-5 roboto-serif4 '>{item.title}</h3>
                                                        <h4 className='roboto-serif4 ps-5 text-warning'>{item.pay}</h4>
                                                    </div>
                                                    <p className='mb-5 pb-5 roboto-serif5 pe-5'>{item.info}</p>
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

    )
}

export default DeliciousCards