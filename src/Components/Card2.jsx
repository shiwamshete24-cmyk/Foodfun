import React from 'react'
import img1 from '../assets/update1.jpg'
import img2 from '../assets/update2.jpg'
import img3 from '../assets/update3.jpg'
import Mycard2 from './Mycard2'

const Card2 = () => {

    const data = [
        {
            img: img1,
            date : '18/09/2028',
            title: "no finer food can be found",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img2,
             date : '19/09/2028',
            title: "things go better with food",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img3,
             date : '20/09/2028',
            title: "food head above the rest",
            info: " nancy boy off his nut so I said chimney pot be James Bond aking cakes he."
        },
       
    ]

    return (
        <div>

            <Mycard2 mydata={data}/>


        </div>
    )
}

export default Card2