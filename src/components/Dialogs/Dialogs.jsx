import React from 'react';
import s from './Dialogs.module.css'
import MessageContainer from "./MessageContainer/MessageContainer";
import DialogItem from "./DialogItem/DialogItem";
import {Route, Routes} from "react-router-dom";


const Dialogs = (props) => {

    const dialogItems = props.dialogsData.map((el) =>
        <DialogItem {...el} />
    );
    const messageContainers = props.dialogsData.map((el) =>
        <Route path={'/' + el.id} element={<MessageContainer {...el}/>}/>
    );

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