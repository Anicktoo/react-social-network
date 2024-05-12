import React, { useEffect, useState } from 'react';
import confirmIcon from '../../../../img/uiActions/confirm.svg';
import { classNameFunction } from '../../../../utils/classNameCompiler';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileStatus.module.css';

const cName = classNameFunction(s);

const ProfileStatusHooks = ({ aboutMe, updateUserStatus, isOwner }) => {

    const [editMode, setEditMode] = useState(false);
    const [inputText, setInputText] = useState(aboutMe);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        //preloading images
        const img = new Image();
        img.src = confirmIcon;
    }, []);

    useEffect(() => {
        setInputText(aboutMe);
        setIsFetching(false);
    }, [aboutMe]);

    const openInput = () => {
        if (isOwner)
            setEditMode(true);
    }
    const closeInput = () => {
        setEditMode(false);
        setInputText(aboutMe);
    }
    const updateInputText = (e) => {
        setInputText(e.target.value);
    }
    const confirmInputText = () => {
        updateUserStatus(inputText);
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
                        {
                            isOwner ?
                                <span onClick={openInput} className={cName(['about', 'about_owner'])}>{aboutMe || 'Add your status'}</span> :
                                <span onClick={openInput} className={cName('about')}>{aboutMe || ''}</span>
                        }
                    </>
            }
        </div>
    );
}

export default ProfileStatusHooks;
