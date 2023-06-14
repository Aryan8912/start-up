import React from 'react'
import '../../styles/About.css'
import aboutImg from '../../images/about-us.jpg'

const chooseData=[
    {
        icon:'ri-wifi-line',
        title: 'First working process',
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ducimus saepe excepturi totam facere adipisci, provident ab quod deleniti eum."
    },
    {
        icon:'ri-team-line',
        title: 'First working process',
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ducimus saepe excepturi totam facere adipisci, provident ab quod deleniti eum."
    },
    {
        icon:'ri-customer-service-2-line',
        title: '24/7 support',
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ducimus saepe excepturi totam facere adipisci, provident ab quod deleniti eum."
    },
]

const About = () => {
  return (
    <section id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                <div className="subtitle">Why choose us</div>
                <h2>in aviding clients on</h2>
                <h2>financial challenges</h2>
                <p className="description about__content-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Praesentium soluta eaque minus commodi vero dicta voluptates 
                    cupiditate maxime esse reiciendis consectetur numquam excepturi
                    tempora delectus, in, sequi adipisci officia eveniet!
                </p>
               <div className="choose__item-wrapper">
                {
                    chooseData.map((item,index)=>(
                        <div className="choose__us-item" key={index}>
                        <span className="choose__us-icon"><i class={item.icon}></i></span>
                        <h4 className="choose__us-title">{item.title}</h4>
                        <p className="description">
                           {item.desc}
                        </p>
                    </div>


                    ))
                }
               </div>
                </div>

                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About