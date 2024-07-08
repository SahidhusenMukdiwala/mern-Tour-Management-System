import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

function Testomonial() {

    const settings = {
        dots: true,
        inFinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slideToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                }
            }
        ]
    }


    return (
        <Slider {...settings}>
            
                <div className="testomonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio corporis voluptatem. Minima tempore, sint voluptatem sapiente voluptatibus, exercitationem ullam minus et possimus adipisci excepturi animi eos nulla quos. Autem!</p>

                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                        <div className="">
                            <h6 className="mb-0 mt-3">John Doe</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testomonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio corporis voluptatem. Minima tempore, sint voluptatem sapiente voluptatibus, exercitationem ullam minus et possimus adipisci excepturi animi eos nulla quos. Autem!</p>

                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                        <div className="">
                            <h6 className="mb-0 mt-3">Lia franklen</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>

                <div className="testomonial py-4 px-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio corporis voluptatem. Minima tempore, sint voluptatem sapiente voluptatibus, exercitationem ullam minus et possimus adipisci excepturi animi eos nulla quos. Autem!</p>

                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                        <div className="">
                            <h6 className="mb-0 mt-3">cath peterson</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
        </Slider>
    )
}

export default Testomonial