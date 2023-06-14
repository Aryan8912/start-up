import React from 'react'
import '../../styles/Hero.css'



const Hero = ({theme}) => {
  return (
    <section className='hero__section'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                   <div>
                   <h2>We'are Creating Perfect</h2>
                    <h2>Digital product To</h2>
                   <h2 className="highlight">Promote Your Brand</h2>
                   </div>
                   <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci eveniet eos! Necessitatibus, pariatur expedita?</p>
                   <div className="hero__btn">
                    <button className="primary__btn">get started Now</button>
                    <button className="secondary__btn">Discover more</button>
                   </div>
                </div>
                    {/*=========== images 20 =========*/}
                <div className="hero__img">

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero