import React from 'react'
import img1 from '../assets/food1.jpg'
import img2 from '../assets/food2.jpg'
import img3 from '../assets/food3.jpg'
import img4 from '../assets/food4.jpg'
import img5 from '../assets/food5.jpg'
import img6 from '../assets/food6.jpg'
import DeliciousCards from './DeliciousCards'


const Card = () => {

    const data = [
        {
            img: img1,
            title: "Mexican Eggrolls",
            pay: "$11.50",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img2,
            title: "chicken burger",
            pay: "$14.00",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img3,
            title: "topu lasange",
            pay: "$24.50",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img4,
            title: "pepper potatoas",
            pay: "$8.75",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img5,
            title: "bean salad",
            pay: "$30.32",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        },
        {
            img: img6,
            title: "beatball hoagie",
            pay: "$25.00",
            info: " Face together given moveth divided form Of Seasons that fruitful. "
        }
    ]

    return (
        <div>
             <DeliciousCards mydata={data}/>
        </div>
    )
}

export default Card