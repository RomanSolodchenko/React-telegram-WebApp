import React from 'react';
import "./NavMenu.css"
// import {
//     Link
//   } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className='nav'>
            <ul>
                {/* <li><Link className="nav__link" to="#" >Меню</Link> </li> */}
                <li><a className="nav__link" to="#" >Интерьер</a></li>
                {/* <li><a className="nav__link" to="#" >Команда</a></li> */}
        </ul>
        </div>
    );
}

export default NavMenu;
