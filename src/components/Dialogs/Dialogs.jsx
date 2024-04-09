import React from 'react';
import { Route, Routes } from "react-router-dom";
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import s from './Dialogs.module.css';
import MessagesPanelContainer from "./MessagesPanel/MessagesPanelContainer";


const Dialogs = ({ dialogs }) => {
    const dialogItems = [];
    const messageContainers = [];
    dialogs?.forEach((el) => {
        dialogItems.push(
            <DialogItemContainer key={el.id} dialogItemInfo={el} />
        );
        messageContainers.push(
            <Route key={el.id} path={'/' + el.id} element={
                <MessagesPanelContainer id={el.id} dialogItemInfo={el} />
            } />
        );
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