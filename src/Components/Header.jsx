import React from 'react'
import "../Components/Hero.css"

const Header = () => {
    return (
        <div className='hero'>
            <nav class="navbar navbar-expand-lg bg-white  p-2 container mypos">
                <div class="container-fluid">
                    <a class="navbar-brand ms-4" href="#"><img src="src/assets/logo.png" alt="" /></a>
                    <button class="navbar-toggler text-white bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active my-1 roboto-serif mx-2" aria-current="page" href="#">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active my-1 roboto mx-2" aria-current="page" href="#">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active my-1 roboto  mx-2" aria-current="page" href="#">MENU</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active my-1 roboto  mx-2" aria-current="page" href="#">BLOG</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active my-1 roboto  mx-2" aria-current="page" href="#">CONTACT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active my-1 roboto  mx-2" aria-current="page" href="#">ELEMENTS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='hero-text'>
                <h6 className='text-white roboto2'>the most interesting food in the world</h6>
                <h1 className='text-white roboto1'>Discover the <span className='text-warning'>flavors</span>
                  <br /> of <span className='text-warning'>food</span>fun</h1>
            </div>



        </div>
    )
}

export default Header