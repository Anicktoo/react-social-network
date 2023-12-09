import React from 'react';
import Nav from './Nav';
import Profile from './Profile';

const InnerWrapper = () => {
    return (
        <div className='inner-wrapper'>
            <Nav />
            <Profile />
        </div>
    );
}

export default InnerWrapper;
