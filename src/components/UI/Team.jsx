import React from 'react'
import '../../styles/Team.css'
import team01 from '../../images/team-01.png'
import team02 from '../../images/team-02.png'
import team03 from '../../images/team-03.png'
import team04 from '../../images/team-04.png'

const teamMember = [
    {
        imgUrl: team01,
        name: 'lorem',
        position:'lorem lorem'
    },
    {
        imgUrl: team02,
        name: 'lorem',
        position:'lorem lorem'
    },
    {
        imgUrl: team03,
        name: 'lorem',
        position:'lorem lorem'
    },
    {
        imgUrl: team04,
        name: 'lorem',
        position:'lorem lorem'
    },

]

const Team = () => {
  return (

    <section className="our__team">
   <div className="container">
    <div className="team__content">
        <h6 className="subtitle">Our team</h6>
        <h2>Meet with <span className="highlight">our team</span></h2>
    </div>
    <div className="team__wrapper">
        {
            teamMember.map((item,index)=>(
                <div className="team__item" key={index}>
            <div className="team__img">
                <img src={item.imgUrl} alt="" />
            </div>
            <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                    <span><i class="ri-linkedin-line"></i></span>
                </div>
            </div>
        </div>
            ))
        }
    </div>
   </div>
   </section>
  )
}

export default Team