import React from 'react'
import '../../styles/Testimonial.css'
import Slider from 'react-slick'
import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from '../../images/ava-3.jpg'
const Testimonial = () => {
    const settings = {
        dots: true,

        infinite:true,
       speed:500,
       autoplay:true,
       autoplaySpeed:3000,
       slidesToShow:1,
       slidesToScroll:1,
       swipeToSlide: true,
    }
  return (
    <section>
        <div className="cantainer">
            <div className="slider__content-top">
                <h6 className="subtitle">Testimonials</h6>
                <h2>Trusted by more than <span className="highlight">5000 customer</span></h2>
            </div>

            <div className="slider__wrapper">
            <Slider {...settings}>
            <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit obcaecati hic officia nihil? Corrupti est ullam quae! Itaque accusantium ex quasi officiis molestias natus iusto illum tenetur harum repellendus autem soluta, inventore dolores commodi.
                </p>
                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava01 } alt="" />
                    </div>
                    <div>
                        <h5 className="customer__name">Lorem, ipsum.</h5>
                        <p className="description">Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>

            <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit obcaecati hic officia nihil? Corrupti est ullam quae! Itaque accusantium ex quasi officiis molestias natus iusto illum tenetur harum repellendus autem soluta, inventore dolores commodi.
                </p>
                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava02 } alt="" />
                    </div>
                    <div>
                        <h5 className="customer__name">Lorem, ipsum.</h5>
                        <p className="description">Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
            <div className="slider__item">
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reprehenderit obcaecati hic officia nihil? Corrupti est ullam quae! Itaque accusantium ex quasi officiis molestias natus iusto illum tenetur harum repellendus autem soluta, inventore dolores commodi.
                </p>
                <div className="customer__details">
                    <div className="customer__img">
                        <img src={ava03 } alt="" />
                    </div>
                    <div>
                        <h5 className="customer__name">Lorem, ipsum.</h5>
                        <p className="description">Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </Slider>
            </div>
        </div>
    </section>
  )
}

export default Testimonial