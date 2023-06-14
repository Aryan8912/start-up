import React from 'react'
import './Footer.css'

const quickLinks01 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Marketing'
    },
]

const quickLinks02 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Marketing'
    },
]

const quickLinks03 = [
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Marketing'
    },
    {
        path:'#',
        display:'Marketing'
    },
]

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <h2>Digital_Agency</h2>
                    <p className="description">Lorem ipsum dolor sit.</p>

                   <p className="small__text description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aperiam odit earum, praesentium sapiente maxime impedit pariatur.</p>

                   <div className="footer__quick-links">
                    <h3 className="quick__links-title">Pages</h3>
                    <ul className="quick__links">
                        {
                            quickLinks01.map((item,index)=>(
                                <li className="quick__link-item key={index}"><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                   </div>

                   <div className="footer__quick-links">
                    <h3 className="quick__links-title">Pages</h3>
                    <ul className="quick__links">
                        {
                            quickLinks01.map((item,index)=>(
                                <li className="quick__link-item key={index}"><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                   </div>

                   <div className="footer__quick-links">
                    <h3 className="quick__links-title">Pages</h3>
                    <ul className="quick__links">
                        {
                            quickLinks01.map((item,index)=>(
                                <li className="quick__link-item key={index}"><a href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                   </div>
                </div>    
            </div>
        </div>
    </footer>
  )
}

export default Footer