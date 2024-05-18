import React from 'react'
import logo from './logo.png'
import {Link, NavLink} from 'react-router-dom'
import {NavbarLinks} from "../../Mockdata";


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div>
                    <Link>
                    <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div>
                {
                    NavbarLinks.map (({id,title,to})=>{
                        return <NavLink className={styles.link}to={to}>{title}</NavLink>
                    })
                }
            </div>

        </div>
    )
}

export default Navbar