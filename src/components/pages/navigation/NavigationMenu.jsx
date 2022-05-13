import React from 'react';
import "./NavMenu.css"
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className='nav'>
            <ul>
                <li><a className="nav__link" to="#" >Меню</a> </li>
                <li><a className="nav__link" to="#" >Интерьер</a></li>
                <li><a className="nav__link" to="#" >Команда</a></li>
        </ul>
        </div>
    );
}

export default NavMenu;
