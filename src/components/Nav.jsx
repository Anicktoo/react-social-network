const Nav = () => {
    return (
        <nav className='nav'>
            <a href='#p' className='nav__item'>
                <span className='nav__link' >Profile</span>
            </a>
            <a href='#m' className='nav__item'>
                <span className='nav__link' >Messages</span>
            </a>
            <a href='#n' className='nav__item'>
                <span className='nav__link' >News</span>
            </a>
            <a href='#mu' className='nav__item'>
                <span className='nav__link' >Music</span>
            </a>
            <a href='#s' className='nav__item nav__item_devided'>
                <span className='nav__link' >Settings</span>
            </a>
        </nav>
    );
}

export default Nav;
