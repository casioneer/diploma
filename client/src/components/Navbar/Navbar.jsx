import React from 'react';
import style from './Navbar.module.css'
import Logo from '../../assets/logo.png'
import LogoText from '../../assets/logo_text.png'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    return (
        <header className={style.header}>
            <div className='container'>
                <div className={style.box}>
                    <div className={style.logo_image}>
                        <img src={Logo} alt="/" />
                        <img src={LogoText} alt="/" />
                    </div>
                    <ul className={style.menu}>
                        <li>
                            <a href="##">Главная</a>
                        </li>
                        <li>
                            <a href="##">Меню</a>
                        </li>
                        <li>
                            <a href="##">О нас</a>
                        </li>
                        <li>
                            <a href="##">Контакты</a>
                        </li>
                        <li>
                            <a href="##">Войти</a>
                        </li>
                    </ul>
                    <div>
                        <AiOutlineMenu size={26} />
                    </div>
                </div>
            </div>
        </header >
    )
}