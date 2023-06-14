import React from 'react'
import '../../styles/Services.css'

const serviceData =[
    {
        icon: 'ri-app-line',
        title:'App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!'
    },
    {
        icon: 'ri-code-s-slash-line',
        title:'Web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!'
    },
    {
        icon: 'ri-landscape-line',
        title:'Graphics Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!'
    },
    {
        icon: 'ri-rocket-line',
        title:'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!'
    },
    {
        icon: 'ri-app-line',
        title:'App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!'
    },
    {
        icon: 'ri-app-line',
        title:'App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cumque dolorum quod id asperiores laudantium vitae ex delectus corporis voluptatem!'
    },
]

const Services = () => {
  return (
   <section id="services">
    <div className="container">
        <div className="service__top-content">
            <div className="subtitle">Our Services</div>
            <h2>Save Time managing your bussiness</h2>
            <h2>with our best services</h2>
        </div>
        <div className="service__item-wrapper">{
           serviceData.map((item,index)=>(
            <div className="services_item" key={index}>
                <span className="service__icon"><i class={item.icon}></i></span>
                <h3 className="services__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
            </div>
           ))
}
        </div>
    </div>
   </section>
  )
}

export default Services