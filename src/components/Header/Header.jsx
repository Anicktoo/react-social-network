import React from 'react';
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.logo}>
                <img src='https://www.freeiconspng.com/thumbs/network-icon/data-network-icon-image-gallery-27.png'
                    alt='NikNet Logo'></img>
                <span className={c.text}>NikNet</span>
            </div>
        </header>
    );
}

export default Header;