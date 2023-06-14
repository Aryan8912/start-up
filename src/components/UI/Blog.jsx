import React from 'react'
import '../../styles/Blog.css'
import videoImg from '../../images/video.png'
import articleImg from '../../images/article.png'
import caseStudy from '../../images/case-study.png'
const blogData = [
    {
    imgUrl: videoImg,
    title: 'video',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    linkUrl: '#'
    },
    {
        imgUrl: articleImg,
        title: 'Articles',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkUrl: '#'
    },
    {
        imgUrl: caseStudy,
        title: 'Case Study',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        linkUrl: '#'
    },
]

const Blog = () => {
  return <section>
        <div className="container">
            <div className="blog__top-content">
                <h6 className="subtitle">Our Blog</h6>
                <h2>Let's have a look from our <span className="highlight">Recent Blog</span></h2>
        </div>  
        <div className="blog__wrapper">
           {
            blogData.map((item,index)=>
            <div className="blog__item">
            <h3>{item.title}</h3>
            <div className="blog__img" key={index}>
                <img src={item.imgUrl} alt="" />
            </div>
            <p className="description blog__desc">{item.desc}</p>
            <div>
                <a href={item.linkUrl} className="learn__more"><i class="ri-arrow-right-line"></i></a>
            </div>
        </div>)
           }
            </div>                                   
           
            </div>
        
    </section>
  
}

export default Blog