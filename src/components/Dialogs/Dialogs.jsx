import React from 'react';
import s from './Dialogs.module.css'
import MessageContainer from "./MessageContainer/MessageContainer";
import DialogItem from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";


const Dialogs = (props) => {

    const dialogItems = [];
    const messageContainers = [];
    props.dialogs.forEach((el) => {
        dialogItems.push(<DialogItem key={el.id}{...el} />);
        messageContainers.push(<Route key={el.id} path={'/' + el.id}
                                      element={<MessageContainer {...el} profileData={props.profileData}
                                                                 dispatch={props.dispatch}/>}/>);
    });

    return (
        <main className={s.dialogs}>
            <div className={s.dialogContainer}>
                <header className={s.dialogHeader}>
                    <span className={s.dialogHeaderText}>All Dialogs</span>
                </header>
                <div className={s.dialogItems}>
                    {dialogItems}
                </div>
            </div>
            <Routes>
                {messageContainers}
            </Routes>
        </main>
    );
};

export default Dialogs;