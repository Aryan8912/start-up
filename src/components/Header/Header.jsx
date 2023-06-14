import React from 'react'
import './Header.css'
import Hero2 from '../../images/Hero2.png'
const nav__links=[
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#about',
        display:'About'
    },{
        path:'#services',
        display:'Services'
    },
    {
        path:'#blog',
        display:'Blog'
    },
    {
        path:'#product',
        display:'Product'
    },
    {
        path:'#team',
        display:'Team'
    },
]
const Header = () => {
  return (
   <header className="header">
    <div className="container">
        <div className="nav__wrapper">
            <div className="logo">
                <h1>Go_Digital</h1>
            

            </div>
            {/* ========== navigation ========*/}
            <div className="navigation">
                <ul className="menu">
                    {
                        nav__links.map((item,index)=>
                       <li className="menu__item"><a href={item.path} className="menu__link">
                        {item.display}
                        </a>
                        </li>
                        )
                    }
                </ul>
            </div>
            {/* =============== light mode ===========*/}
            
        </div>
    </div>
   </header>
  )
}

export default Header