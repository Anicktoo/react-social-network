import React from 'react';
import s from './MainButton.module.css';

const MainButton = (props) => {
    return (
        <button className={s.mainButton}>{props.text}</button>
    );
}

export default MainButton;
