import React from 'react'
import '../Components/Mywelcome.css'

const Welcome = () => {
  return (
    <div className='container my-5'>

        <div className='row justify-content-center align-items-center'>
            <div className='col-11 col-md-6 col-lg-6'>
          <div className='overflow-hidden'><img src="src/assets/welcome-bg.png" alt="" className='img-fluid' /></div>
            </div>
            <div className='col-11 col-md-6 col-lg-6'>
                
                <div className='welcome-fonts'><span className='text-warning fst-italic'>welcome</span> <br />   to food fun</div>
                <div className='welcome-fonts-p my-3'>Created god gathered don't you yielding herb you had.  And isn't, god was saw. Dominion. Great sixth for in unto was.  Open can't tree am waters brought.  Divide after there Was.</div>
                <div className='welcome-fonts-p my-3'>Created god gathered don't you yielding herb you had. And isn't, god was saw. Dominion. <br /> Great sixth for in unto was. Open can't tree waters brought. Divide after there. Was. Created god gathered don't you yielding herb you had. And isn't god.</div>
                <div><button className='btn btn-warning px-3 py-2 my-3'>book a table</button></div>
            </div>
        </div>
         
    </div>
  )
}

export default Welcome