import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://www.wallpaperflare.com/static/516/905/73/wolfenstein-the-new-order-continuation-of-a-series-wolfenstein-pc-playstation-3-wallpaper-preview.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}
export default Header