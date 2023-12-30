import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";
import MessagesPanelContainer from "./MessagesPanel/MessagesPanelContainer";


const Dialogs = (props) => {

    const dialogItems = [];
    const messageContainers = [];
    props.dialogs?.forEach((el) => {
        dialogItems.push(<DialogItem key={el.id}{...el} />);
        messageContainers.push(<Route key={el.id} path={'/' + el.id}
                                      element={<MessagesPanelContainer {...el} store={props.store}/>}/>);
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