import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';
import { classNameFunction } from '../../../../utils/classNameCompiler';
import confirmIcon from '../../../../img/uiActions/confirm.svg';
import Preloader from '../../../common/Preloader/Preloader';

const cName = classNameFunction(s);

const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [inputText, setInputText] = useState(props.aboutMe);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        //preloading images
        const img = new Image();
        img.src = confirmIcon;
    }, []);

    useEffect(() => {
        setInputText(props.aboutMe);
        setIsFetching(false);
    }, [props.aboutMe]);

    const openInput = () => {
        setEditMode(true);
    }
    const closeInput = () => {
        setEditMode(false);
        setInputText(props.aboutMe);
    }
    const updateInputText = (e) => {
        setInputText(e.target.value);
    }
    const confirmInputText = () => {
        props.updateUserStatus(inputText);
        setEditMode(false);
        setIsFetching(true);
    }


    return (
        <div className={cName('about-container')}>
            {isFetching ?
                <Preloader content={'#'.repeat(20)} />
                :
                editMode ?
                    <>
                        <input autoFocus onBlur={closeInput} onInput={updateInputText} onKeyUp={(e) => e.key === 'Enter' && confirmInputText()} className={cName('about-input')} type="text" value={inputText || ''} />
                        <button onMouseDown={(e) => { e.preventDefault() }} onClick={confirmInputText} className={cName('confirm')}><img src={confirmIcon} alt="confirm" /></button>
                    </>
                    :
                    <>
                        <span onClick={openInput} className={cName('about')}>{props.aboutMe || 'Add your status'}</span>
                    </>

            }
        </div>
    );
}

export default ProfileStatusHooks;
